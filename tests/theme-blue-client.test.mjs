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

function clientContext() {
  const layers = []
  const disposals = []
  const effects = []
  const ctx = {
    effect: callback => { const dispose = callback(); effects.push(dispose); return dispose },
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
  }
  return { ctx, layers, disposals, effects }
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
    createElement: () => ({ dataset: {}, textContent: '', remove: () => { appended.splice(0, 1) } }),
    appended,
  }
}

test('私有蓝色主题在 loader 启用时注册基础 token 覆盖层', async () => {
  const client = await loadClientBundle()
  const state = clientContext()
  client.apply(state.ctx)
  assert.deepEqual(client.inject, ['theme'])
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
  const previousDocument = globalThis.document
  const document = fakeDocument()
  globalThis.document = document
  try {
    const state = clientContext()
    client.apply(state.ctx)
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), true)
    assert.equal(document.appended.length, 1)
    assert.equal(document.appended[0].dataset.pluginCss, client.BLUE_THEME_STYLE_ID)
    assert.match(document.appended[0].textContent, /data-dsh-private-ui='theme-mode'/)
    state.effects[1]()
    assert.equal(document.documentElement.classList.contains(client.BLUE_THEME_ROOT_CLASS), false)
    assert.equal(document.appended.length, 0)
  } finally {
    if (previousDocument === undefined) delete globalThis.document
    else globalThis.document = previousDocument
  }
})
