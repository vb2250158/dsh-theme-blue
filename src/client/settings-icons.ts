/** Semantic settings glyphs registered through the public navigation icon slot. */
import { createElement } from 'react'
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

/**
 * Register decorative glyphs without changing settings labels or actions.
 * The shell selects each glyph by section id and owns its decorative wrapper.
 * Unknown sections retain the official glyph; disposal restores every glyph.
 * @param ctx - Client context owning the reversible icon registrations.
 */
export function installSettingsIconStyles(ctx: Context): void {
  ctx.slots.inject('settings.section.icon', () => {
    const disposers = [...SECTION_ICONS].map(([id, svg]) => {
      const maskImage = `url("data:image/svg+xml,${encodeURIComponent(svg.replaceAll('currentColor', '#000'))}")`
      return ctx.slots.register({ name: 'settings.section.icon', id }, ({ size }) => createElement('span', {
        style: {
          display: 'block', width: size, height: size, backgroundColor: 'currentColor',
          maskImage, maskSize: 'contain', maskPosition: 'center', maskRepeat: 'no-repeat',
        },
      }))
    })
    return () => {
      for (const dispose of disposers.reverse()) dispose()
    }
  })
}
