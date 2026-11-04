import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import test from 'node:test'

const clientBundleUrl = new URL('../lib/client.js', import.meta.url).href
const React = createRequire(import.meta.url)('react')

async function loadClientBundle() {
  let loaded
  const previousWindow = globalThis.window
  globalThis.window = { __ModuleLoader__: { load: value => { loaded = value } } }
  try {
    await import(`${clientBundleUrl}?test=${Date.now()}-${Math.random()}`)
    assert.equal(loaded?.id, 'dsh-theme-blue')
    return loaded.factory(name => {
      assert.equal(name, 'react')
      return React
    })
  } finally {
    if (previousWindow === undefined) delete globalThis.window
    else globalThis.window = previousWindow
  }
}

function clientContext(initialSections = []) {
  const layers = []
  const disposals = []
  const effects = []
  const sectionListeners = new Set()
  const registrations = []
  let sections = initialSections
  const ctx = {
    effect: callback => {
      const cleanup = callback()
      let disposed = false
      const dispose = () => {
        if (disposed) return
        disposed = true
        cleanup?.()
      }
      effects.push(dispose)
      return dispose
    },
    theme: {
      overrideTokens: (source, tokens) => {
        layers.push({ source, tokens })
        let disposed = false
        return () => {
          if (disposed) return
          disposed = true
          disposals.push(source)
        }
      },
    },
    slots: {
      inject: (key, callback) => {
        assert.equal(key, 'settings.section.icon')
        return ctx.effect(callback)
      },
      register: (config, Component) => {
        assert.equal(config.name, 'settings.section.icon')
        const registration = { config, Component }
        registrations.push(registration)
        return () => {
          const index = registrations.indexOf(registration)
          if (index !== -1) registrations.splice(index, 1)
        }
      },
      entries: key => {
        assert.equal(key, 'settings.section')
        return sections
      },
      subscribe: (key, listener) => {
        assert.equal(key, 'settings.section')
        sectionListeners.add(listener)
        return () => { sectionListeners.delete(listener) }
      },
    },
  }
  return {
    ctx, layers, disposals, effects, sectionListeners, registrations,
    setSections: nextSections => {
      sections = nextSections
      for (const listener of [...sectionListeners]) listener()
    },
  }
}

function fakeDocument() {
  const classes = new Set()
  const appended = []
  const head = {
    appendChild: tag => { appended.push(tag) },
  }
  return {
    documentElement: {
      classList: {
        add: value => { classes.add(value) },
        remove: value => { classes.delete(value) },
        contains: value => classes.has(value),
      },
    },
    head,
    createElement: () => {
      const tag = {
        dataset: {}, textContent: '',
        remove: () => {
          const index = appended.indexOf(tag)
          if (index !== -1) appended.splice(index, 1)
        },
      }
      return tag
    },
    appended,
  }
}

async function withDocument(callback) {
  const previousDocument = globalThis.document
  const document = fakeDocument()
  globalThis.document = document
  try {
    await callback(document)
  } finally {
    if (previousDocument === undefined) delete globalThis.document
    else globalThis.document = previousDocument
  }
}

function section(id, order = 0, priority = 0) {
  return { options: { id, order, priority } }
}

function iconMasks(registrations, size = 16) {
  return new Map(registrations.map(({ config, Component }) => {
    const element = Component({ size, active: false })
    assert.equal(React.isValidElement(element), true)
    assert.equal(element.type, 'span')
    assert.equal(element.props.style.width, size)
    assert.equal(element.props.style.height, size)
    assert.equal(element.props.style.backgroundColor, 'currentColor')
    return [config.id, element.props.style.maskImage]
  }))
}

test('私有蓝色主题在 loader 启用时注册基础 token 覆盖层', async () => {
  const client = await loadClientBundle()
  const state = clientContext()
  client.apply(state.ctx)
  assert.deepEqual(client.inject, ['theme', 'slots'])
  assert.equal(state.layers.length, 1)
  assert.equal(state.layers[0].source, 'dsh-theme-blue')
  assert.equal(state.layers[0].tokens['--dsw-alias-bg-base'].light, '#eef5ff')
  assert.equal(state.layers[0].tokens['--dsw-alias-bg-base'].dark, '#071a33')
})

test('new-session elevated fill follows the blue palette in both schemes', async () => {
  const client = await loadClientBundle()
  const state = clientContext()
  client.apply(state.ctx)
  assert.deepEqual(state.layers[0].tokens['--dsw-alias-button-elevated-fill'], {
    light: '#e8f1ff', dark: '#12345f',
  })
  assert.equal(state.layers[0].tokens['--dsw-alias-button-primary-fill'].light, '#2563eb')
  assert.equal(state.layers[0].tokens['--dsw-alias-button-primary-fill'].dark, '#3b82f6')
  state.effects[0]()
  assert.deepEqual(state.disposals, ['dsh-theme-blue'])
})

test('停用私有主题 loader 时只撤销它自己的 token 覆盖层', async () => {
  const client = await loadClientBundle()
  const state = clientContext()
  client.apply(state.ctx)
  state.effects[0]()
  assert.deepEqual(state.disposals, ['dsh-theme-blue'])
})

test('蓝色主题样式与根类随 loader 生命周期安装和清理', async () => {
  const client = await loadClientBundle()
  await withDocument(document => {
    const state = clientContext()
    client.apply(state.ctx)
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), true)
    assert.equal(document.appended.length, 1)
    assert.equal(document.appended[0].dataset.pluginCss, client.BLUE_THEME_STYLE_ID)
    assert.match(document.appended[0].textContent, /data-dsh-private-ui='theme-mode'/)
    state.effects[1]()
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), false)
    assert.equal(document.appended.length, 0)
    state.effects[2]()
    assert.equal(document.appended.length, 0)
  })
})

test('设置滑条保留原生输入、禁用、键盘焦点及减少动画样式', async () => {
  const client = await loadClientBundle()
  await withDocument(document => {
    const state = clientContext()
    client.apply(state.ctx)
    const css = document.appended[0].textContent
    assert.match(css, /\[role='dialog'\]:has\(> nav\) input\[type='checkbox'\]/)
    assert.match(css, /button\[role='switch'\]\[aria-checked='true'\]/)
    assert.match(css, /:focus-visible/)
    assert.match(css, /:disabled/)
    assert.match(css, /prefers-reduced-motion: reduce/)
    assert.match(css, /--dsh-switch-on: var\(--dsw-alias-brand-primary\)/)
    state.effects[1]()
    assert.equal(document.appended.some(tag => tag.dataset.pluginCss === client.BLUE_THEME_STYLE_ID), false)
  })
})

test('当前十六个设置入口各有不同的语义图标', async () => {
  const client = await loadClientBundle()
  const ids = [
    'general', 'models', 'plugins', 'model-list', 'my-plugins', 'agent-presets',
    'emotional-chat-workbench', 'webview-mode', 'jev-context-gate', 'usage-cost',
    'workbuddy-gateway', 'chat-enhancement', 'dsh-unity-enhancement', 'dsh-proxy',
    'subscriptions', 'opencode-go',
  ]
  await withDocument(document => {
    const state = clientContext(ids.map((id, index) => section(id, index)))
    client.apply(state.ctx)
    const generated = iconMasks(state.registrations)
    assert.equal(generated.size, ids.length)
    assert.equal(new Set(generated.values()).size, ids.length)
    assert.deepEqual([...generated.keys()], ids)
    for (const image of generated.values()) {
      assert.match(image, /^url\(["']?data:image\/svg\+xml,/)
      assert.match(decodeURIComponent(image), /<svg\s/)
    }
    assert.equal(state.sectionListeners.size, 0)
    assert.equal(document.appended.length, 1)
    assert.doesNotMatch(document.appended[0].textContent, /button:nth-child|> nav > div:last-child/)
    assert.equal(document.appended.some(tag => tag.dataset.pluginCss === 'dsh-theme-blue/settings-icons.css'), false)
  })
})

test('设置图标按唯一入口 id 注册，不随入口排序或重复贡献改变', async () => {
  const client = await loadClientBundle()
  await withDocument(document => {
    const state = clientContext([section('general', 0), section('webview-mode', 1), section('models', 2)])
    client.apply(state.ctx)
    const registrations = [...state.registrations]
    const reference = iconMasks(state.registrations)
    state.setSections([
      section('models', 30), section('future-plugin', -20), section('general', 10),
      section('webview-mode', 10), section('general', 10, -50),
    ])
    assert.deepEqual(state.registrations, registrations)
    assert.deepEqual(iconMasks(state.registrations), reference)
    assert.equal(state.registrations.filter(entry => entry.config.id === 'general').length, 1)
    assert.equal(state.registrations.some(entry => entry.config.id === 'future-plugin'), false)

    state.setSections([
      section('future-plugin', 20), section('webview-mode', 10),
      section('general', -10), section('models', 0),
    ])
    assert.deepEqual(state.registrations, registrations)
    assert.deepEqual(iconMasks(state.registrations), reference)
  })
})

test('未知入口不获得主题图标，已知图标组件使用宿主尺寸和当前颜色', async () => {
  const client = await loadClientBundle()
  await withDocument(document => {
    const state = clientContext([section('general')])
    client.apply(state.ctx)
    const reference = iconMasks(state.registrations)
    assert.doesNotThrow(() => state.setSections([
      section('future-plugin'), section('toString', 1), section('constructor', 2),
    ]))
    for (const unknown of ['future-plugin', 'toString', 'constructor']) {
      assert.equal(state.registrations.some(entry => entry.config.id === unknown), false)
    }
    assert.doesNotThrow(() => state.setSections([
      section('toString', -2), section('constructor', -1), section('models', 1),
    ]))
    assert.deepEqual(iconMasks(state.registrations, 24), reference)
    for (const { Component } of state.registrations) {
      const inactive = Component({ size: 24, active: false })
      const active = Component({ size: 24, active: true })
      assert.deepEqual(active.props.style, inactive.props.style)
    }
    assert.equal(document.appended.length, 1)
  })
})

test('清理图标注册时保留基础主题和其他插件样式', async () => {
  const client = await loadClientBundle()
  await withDocument(document => {
    const unrelated = document.createElement('style')
    unrelated.dataset.pluginCss = 'another-plugin/style.css'
    document.head.appendChild(unrelated)
    const state = clientContext([section('general')])
    client.apply(state.ctx)
    const foundation = document.appended.find(tag => tag.dataset.pluginCss === client.BLUE_THEME_STYLE_ID)
    assert.equal(state.registrations.length, 16)
    state.effects[2]()
    state.effects[2]()
    assert.equal(state.registrations.length, 0)
    assert.equal(state.sectionListeners.size, 0)
    assert.deepEqual(document.appended, [unrelated, foundation])
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), true)
    state.setSections([section('models')])
    assert.equal(state.registrations.length, 0)
    state.effects[1]()
    assert.deepEqual(document.appended, [unrelated])
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), false)
  })
})
