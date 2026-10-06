/** Semantic settings glyphs projected from the public section ledger. */
import type { Context } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import sliders from 'lucide-static/icons/sliders-horizontal.svg'
import brain from 'lucide-static/icons/brain-circuit.svg'
import puzzle from 'lucide-static/icons/puzzle.svg'
import list from 'lucide-static/icons/list-tree.svg'
import blocks from 'lucide-static/icons/blocks.svg'
import bot from 'lucide-static/icons/bot.svg'
import heart from 'lucide-static/icons/heart-handshake.svg'
import globe from 'lucide-static/icons/globe.svg'
import workflow from 'lucide-static/icons/workflow.svg'
import chart from 'lucide-static/icons/chart-no-axes-combined.svg'
import briefcase from 'lucide-static/icons/briefcase-business.svg'
import message from 'lucide-static/icons/message-square-more.svg'
import box from 'lucide-static/icons/box.svg'
import network from 'lucide-static/icons/waypoints.svg'
import ticket from 'lucide-static/icons/ticket.svg'
import terminal from 'lucide-static/icons/terminal.svg'

const SECTION_ICONS: ReadonlyMap<string, string> = new Map([
  ['general', sliders],
  ['models', brain],
  ['plugins', puzzle],
  ['model-list', list],
  ['my-plugins', blocks],
  ['agent-presets', bot],
  ['emotional-chat-workbench', heart],
  ['webview-mode', globe],
  ['jev-context-gate', workflow],
  ['usage-cost', chart],
  ['workbuddy-gateway', briefcase],
  ['chat-enhancement', message],
  ['dsh-unity-enhancement', box],
  ['dsh-proxy', network],
  ['subscriptions', ticket],
  ['opencode-go', terminal],
])

const NAV_BUTTON = "html.dsh-private-theme-blue [role='dialog'][data-shortcut-modal='settings'] > nav > div:last-child > button"

/**
 * Install decorative glyphs without changing settings labels or actions.
 * Ledger order matches the settings shell's raw, stably sorted section rows.
 * Unknown sections retain the official glyph; disposal restores every glyph.
 * @param ctx - Client context owning the section subscription and stylesheet.
 */
export function installSettingsIconStyles(ctx: Context): void {
  if (typeof document === 'undefined') return
  ctx.slots.inject('settings.section', () => {
    const tag = document.createElement('style')
    tag.dataset.plugin = 'dsh-theme-blue'
    tag.dataset.pluginCss = 'dsh-theme-blue/settings-icons.css'
    const rebuild = () => {
      const icons = ctx.slots.entries('settings.section')
        .map(entry => ({ id: entry.options.id, order: entry.options.order ?? 0 }))
        .sort((left, right) => left.order - right.order)
        .flatMap((section, index) => {
          const svg = section.id === undefined ? undefined : SECTION_ICONS.get(section.id)
          if (svg === undefined) return []
          return [{ selector: `${NAV_BUTTON}:nth-child(${index + 1})`, svg }]
        })
      if (icons.length === 0) {
        tag.textContent = ''
        return
      }
      const before = icons.map(icon => `${icon.selector}::before`).join(',\n')
      const originals = icons.map(icon => `${icon.selector} > svg`).join(',\n')
      const masks = icons.map(icon => {
        const data = encodeURIComponent(icon.svg.replaceAll('currentColor', '#000'))
        return `${icon.selector}::before { mask-image: url("data:image/svg+xml,${data}"); }`
      }).join('\n')
      tag.textContent = `${originals} { display: none; }\n${before} {
  content: '';
  display: block;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  background-color: currentColor;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}\n${masks}\n`
    }
    rebuild()
    document.head.appendChild(tag)
    const off = ctx.slots.subscribe('settings.section', rebuild)
    return () => { off(); tag.remove() }
  })
}
