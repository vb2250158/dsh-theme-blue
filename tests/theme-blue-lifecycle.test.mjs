import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import test from 'node:test'
import { pathToFileURL } from 'node:url'
import { runInNewContext } from 'node:vm'

// The integration target is explicit: never borrow a running profile or its data.
const sourceRoot = process.env.DSH_SOURCE_ROOT
assert.ok(sourceRoot, 'Set DSH_SOURCE_ROOT to the built, tested DSH source checkout')
const coreRequire = createRequire(resolve(sourceRoot, 'packages/client/ui-primitives/package.json'))
const { Context, Service } = await import(pathToFileURL(coreRequire.resolve('@deepseek-ai/cordis')).href)
const { JSDOM } = coreRequire('jsdom')

function loadBundle(path, document, requireModule) {
  let descriptor
  runInNewContext(readFileSync(path, 'utf8'), {
    window: { __ModuleLoader__: { load(value) { descriptor = value } } },
    document,
    console,
  }, { filename: String(path) })
  assert.ok(descriptor, 'Client artifact registers with the module loader')
  return descriptor.factory(requireModule)
}

test('real Cordis disposal restores underlying tokens, DOM and settings icons across reactivation', async () => {
  const dom = new JSDOM('<!doctype html><html><head><style id="unrelated">body { margin: 0 }</style></head><body></body></html>')
  const ctx = new Context()
  try {
    const { ThemeRuntime } = loadBundle(resolve(sourceRoot, 'packages/client/ui-theme/lib/client.js'), dom.window.document, name => {
      // These UI-only imports are unused by ThemeRuntime; the actual service runs unmodified.
      if (name === '@deepseek-ai/dsh-client-ui-primitives') return { ICON_SYMBOLS: {} }
      if (name === '@deepseek-ai/dsh-client-store') return {}
      return coreRequire(name)
    })
    const subscriptions = new Set()
    const host = {
      getSnapshot: () => ({ value: undefined }),
      subscribe: callback => { subscriptions.add(callback); return () => subscriptions.delete(callback) },
      set: async () => true,
    }
    const theme = new ThemeRuntime(ctx, host)
    ctx.provide('theme', theme)
    const registrations = new Set()
    // Keep only the icon registry face; Service preserves the caller's real fiber ownership.
    class IconRegistry extends Service {
      constructor(context) { super(context, 'slots') }
      inject(name, callback) {
        assert.equal(name, 'settings.section.icon')
        return this.ctx.effect(callback)
      }
      register(config, Component) {
        assert.equal(config.name, 'settings.section.icon')
        const registration = { config, Component }
        registrations.add(registration)
        return () => registrations.delete(registration)
      }
    }
    new IconRegistry(ctx)
    const plugin = loadBundle(new URL('../lib/client.js', import.meta.url), dom.window.document, coreRequire)
    const token = '--dsw-alias-label-primary'
    const underlying = { id: 'underlying', colorScheme: 'dark', tokens: { [token]: '#112233' } }
    ctx.effect(() => theme.register(underlying))
    theme.setTheme(underlying.id)
    const before = theme.getTheme()

    for (let cycle = 0; cycle < 2; cycle++) {
      const fiber = ctx.plugin(plugin)
      await fiber.await()
      assert.equal(registrations.size, 16)
      assert.equal(dom.window.document.querySelectorAll('style[data-plugin="dsh-theme-blue"]').length, 1)
      assert.ok(dom.window.document.documentElement.classList.contains(plugin.BLUE_THEME_ROOT_CLASS))
      assert.equal(theme.getTheme().preference, before.preference, 'Enabling never changes the selected theme')
      assert.equal(theme.getTheme().active.tokens[token], '#eaf3ff')
      theme.setTheme('light')
      assert.equal(theme.getTheme().active.tokens[token], '#0f2b54')
      theme.setTheme('dark')
      assert.equal(theme.getTheme().active.tokens[token], '#eaf3ff')
      theme.setTheme(underlying.id)
      await fiber.dispose()
      assert.equal(theme.getTheme().active.id, underlying.id)
      assert.equal(theme.getTheme().active.tokens[token], '#112233')
      assert.equal(registrations.size, 0)
      assert.equal(dom.window.document.querySelectorAll('style[data-plugin="dsh-theme-blue"]').length, 0)
      assert.equal(dom.window.document.documentElement.classList.contains(plugin.BLUE_THEME_ROOT_CLASS), false)
      assert.ok(dom.window.document.getElementById('unrelated'))
    }

    theme.setTheme('light')
    assert.equal(theme.getTheme().active.tokens[token], undefined, 'Default light palette has no stale blue override')
    theme.setTheme('dark')
    assert.equal(theme.getTheme().active.tokens[token], undefined, 'Default dark palette has no stale blue override')
    await ctx.fiber.dispose()
    assert.equal(subscriptions.size, 0)
  } finally {
    await ctx.fiber.dispose()
    dom.window.close()
  }
})
