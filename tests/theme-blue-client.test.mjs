import assert from 'node:assert/strict'
import test from 'node:test'

const clientBundleUrl = new URL('../lib/client.js', import.meta.url).href

async function loadClientBundle() {
  let loaded
  const previousWindow = globalThis.window
  globalThis.window = { __ModuleLoader__: { load: value => { loaded = value } } }
  try {
    await import(`${clientBundleUrl}?test=${Date.now()}-${Math.random()}`)
    assert.equal(loaded?.id, 'dsh-theme-blue')
    return loaded.factory(() => { throw new Error('The blue foundation has no runtime imports') })
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
        assert.equal(key, 'settings.section')
        return ctx.effect(callback)
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
    ctx, layers, disposals, effects, sectionListeners,
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

function iconStyle(document) {
  const style = document.appended.find(tag => tag.dataset.pluginCss === 'dsh-theme-blue/settings-icons.css')
  assert(style, 'settings icon stylesheet is installed')
  return style
}

function masks(text) {
  return new Map([...text.matchAll(/button:nth-child\((\d+)\)::before\s*\{\s*mask-image:\s*url\("([^"]+)"\);\s*\}/g)]
    .map(match => [Number(match[1]), match[2]]))
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
    assert.equal(document.appended.length, 2)
    assert.equal(document.appended[0].dataset.pluginCss, client.BLUE_THEME_STYLE_ID)
    assert.match(document.appended[0].textContent, /data-dsh-private-ui='theme-mode'/)
    state.effects[1]()
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), false)
    assert.equal(document.appended.length, 1)
    assert.equal(document.appended[0].dataset.pluginCss, 'dsh-theme-blue/settings-icons.css')
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
    const style = iconStyle(document)
    const generated = masks(style.textContent)
    assert.equal(generated.size, ids.length)
    assert.equal(new Set(generated.values()).size, ids.length)
    assert.deepEqual([...generated.keys()], Array.from({ length: ids.length }, (_, index) => index + 1))
    for (const image of generated.values()) {
      assert.match(image, /^data:image\/svg\+xml,/)
      assert.match(decodeURIComponent(image), /<svg\s/)
    }
    assert.match(style.textContent, /html\.dsh-private-theme-blue \[role='dialog'\]\[data-shortcut-modal='settings'\]/)
    assert.equal(state.sectionListeners.size, 1)
  })
})

test('设置图标跟随稳定排序后的真实位置，保留重复注册和未知入口', async () => {
  const client = await loadClientBundle()
  await withDocument(document => {
    const state = clientContext([section('general', 0), section('webview-mode', 1), section('models', 2)])
    client.apply(state.ctx)
    const style = iconStyle(document)
    const reference = masks(style.textContent)
    state.setSections([
      section('models', 30), section('future-plugin', -20), section('general', 10),
      section('webview-mode', 10), section('general', 10, -50),
    ])
    const sorted = masks(style.textContent)
    assert.deepEqual([...sorted.keys()], [2, 3, 4, 5])
    assert.equal(sorted.get(2), reference.get(1))
    assert.equal(sorted.get(3), reference.get(2))
    assert.equal(sorted.get(4), reference.get(1))
    assert.equal(sorted.get(5), reference.get(3))
    assert.doesNotMatch(style.textContent, /button:nth-child\(1\)/)

    state.setSections([
      section('future-plugin', 20), section('webview-mode', 10),
      section('general', -10), section('models', 0),
    ])
    const reordered = masks(style.textContent)
    assert.deepEqual([...reordered.keys()], [1, 2, 3])
    assert.equal(reordered.get(1), reference.get(1))
    assert.equal(reordered.get(2), reference.get(3))
    assert.equal(reordered.get(3), reference.get(2))
    assert.doesNotMatch(style.textContent, /button:nth-child\(4\)/)
  })
})

test('注册表变成只有未知入口时清除旧图标，后续注册继续刷新同一样式', async () => {
  const client = await loadClientBundle()
  await withDocument(document => {
    const state = clientContext([section('general')])
    client.apply(state.ctx)
    const style = iconStyle(document)
    assert.equal(masks(style.textContent).size, 1)
    assert.doesNotThrow(() => state.setSections([
      section('future-plugin'), section('toString', 1), section('constructor', 2),
    ]))
    assert.equal(style.textContent, '')
    assert.doesNotThrow(() => state.setSections([
      section('toString', -2), section('constructor', -1), section('models', 1),
    ]))
    assert.equal(iconStyle(document), style)
    assert.deepEqual([...masks(style.textContent).keys()], [3])
    assert.doesNotMatch(style.textContent, /button:nth-child\([12]\)/)
    assert.equal(document.appended.length, 2)
  })
})

test('清理图标样式时取消订阅并保留基础主题和其他插件样式', async () => {
  const client = await loadClientBundle()
  await withDocument(document => {
    const unrelated = document.createElement('style')
    unrelated.dataset.pluginCss = 'another-plugin/style.css'
    document.head.appendChild(unrelated)
    const state = clientContext([section('general')])
    client.apply(state.ctx)
    const foundation = document.appended.find(tag => tag.dataset.pluginCss === client.BLUE_THEME_STYLE_ID)
    const style = iconStyle(document)
    const lastContent = style.textContent
    state.effects[2]()
    assert.equal(state.sectionListeners.size, 0)
    assert.deepEqual(document.appended, [unrelated, foundation])
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), true)
    state.setSections([section('models')])
    assert.equal(style.textContent, lastContent)
    state.effects[1]()
    assert.deepEqual(document.appended, [unrelated])
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), false)
  })
})
