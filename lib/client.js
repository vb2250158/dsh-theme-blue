window.__ModuleLoader__.load({
  id: "dsh-theme-blue",
  factory: () => {
    var module = { exports: {} }
    var exports = module.exports
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.ts
var index_exports = {};
__export(index_exports, {
  BLUE_THEME_OVERRIDE_SOURCE: () => BLUE_THEME_OVERRIDE_SOURCE,
  BLUE_THEME_ROOT_CLASS: () => BLUE_THEME_ROOT_CLASS,
  BLUE_THEME_STYLE_ID: () => BLUE_THEME_STYLE_ID,
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);

// themes/blue/style.css
var style_default = "html.dsh-private-theme-blue [data-dsh-private-ui='theme-mode'] {\r\n  min-height: 76px;\r\n  padding: 12px 14px;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: left;\r\n  white-space: normal;\r\n}\r\nhtml.dsh-private-theme-blue [data-dsh-private-ui='theme-mode-description'] {\r\n  color: var(--dsw-alias-label-secondary);\r\n}\r\n\r\nhtml.dsh-private-theme-blue [data-dsh-private-ui='theme-mode'][aria-pressed='true'] [data-dsh-private-ui='theme-mode-description'] {\r\n  color: var(--dsw-alias-brand-primary-invert);\r\n}\r\n\r\n/* Dafy's brand selector also matches the nested identity, mark, and name. */\r\nhtml.dsh-private-theme-blue:has(style[data-plugin-css='dafy-whale-theme-css']) [class*='_logoRow'] > button[class*='_brand'] > [class*='_brandIdentity'] {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 1281px) {\r\n  html.dsh-private-theme-blue [role='dialog'][data-shortcut-modal='settings'] {\r\n    width: 1120px;\r\n    height: min(900px, calc(100vh - 2 * max(24px, var(--dsh-frame-overlay-top, 24px))));\r\n  }\r\n}\r\n";

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/sliders-horizontal.svg
var sliders_horizontal_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-sliders-horizontal"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M10 5H3" />\n  <path d="M12 19H3" />\n  <path d="M14 3v4" />\n  <path d="M16 17v4" />\n  <path d="M21 12h-9" />\n  <path d="M21 19h-5" />\n  <path d="M21 5h-7" />\n  <path d="M8 10v4" />\n  <path d="M8 12H3" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/brain-circuit.svg
var brain_circuit_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-brain-circuit"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />\n  <path d="M9 13a4.5 4.5 0 0 0 3-4" />\n  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />\n  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />\n  <path d="M6 18a4 4 0 0 1-1.967-.516" />\n  <path d="M12 13h4" />\n  <path d="M12 18h6a2 2 0 0 1 2 2v1" />\n  <path d="M12 8h8" />\n  <path d="M16 8V5a2 2 0 0 1 2-2" />\n  <circle cx="16" cy="13" r=".5" />\n  <circle cx="18" cy="3" r=".5" />\n  <circle cx="20" cy="21" r=".5" />\n  <circle cx="20" cy="8" r=".5" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/puzzle.svg
var puzzle_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-puzzle"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/list-tree.svg
var list_tree_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-list-tree"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M8 5h13" />\n  <path d="M13 12h8" />\n  <path d="M13 19h8" />\n  <path d="M3 10a2 2 0 0 0 2 2h3" />\n  <path d="M3 5v12a2 2 0 0 0 2 2h3" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/blocks.svg
var blocks_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-blocks"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />\n  <rect x="14" y="2" width="8" height="8" rx="1" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/bot.svg
var bot_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-bot"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M12 8V4H8" />\n  <rect width="16" height="12" x="4" y="8" rx="2" />\n  <path d="M2 14h2" />\n  <path d="M20 14h2" />\n  <path d="M15 13v2" />\n  <path d="M9 13v2" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/heart-handshake.svg
var heart_handshake_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-heart-handshake"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/globe.svg
var globe_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-globe"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <circle cx="12" cy="12" r="10" />\n  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />\n  <path d="M2 12h20" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/workflow.svg
var workflow_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-workflow"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <rect width="8" height="8" x="3" y="3" rx="2" />\n  <path d="M7 11v4a2 2 0 0 0 2 2h4" />\n  <rect width="8" height="8" x="13" y="13" rx="2" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/chart-no-axes-combined.svg
var chart_no_axes_combined_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-chart-no-axes-combined"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M12 16v5" />\n  <path d="M16 14.639V21" />\n  <path d="M20 10.656V21" />\n  <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />\n  <path d="M4 18.463V21" />\n  <path d="M8 14.656V21" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/briefcase-business.svg
var briefcase_business_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-briefcase-business"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M12 12h.01" />\n  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />\n  <path d="M22 13a18.15 18.15 0 0 1-20 0" />\n  <rect width="20" height="14" x="2" y="6" rx="2" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/message-square-more.svg
var message_square_more_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-message-square-more"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />\n  <path d="M12 11h.01" />\n  <path d="M16 11h.01" />\n  <path d="M8 11h.01" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/box.svg
var box_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-box"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />\n  <path d="m3.3 7 8.7 5 8.7-5" />\n  <path d="M12 22V12" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/waypoints.svg
var waypoints_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-waypoints"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="m10.586 5.414-5.172 5.172" />\n  <path d="m18.586 13.414-5.172 5.172" />\n  <path d="M6 12h12" />\n  <circle cx="12" cy="20" r="2" />\n  <circle cx="12" cy="4" r="2" />\n  <circle cx="20" cy="12" r="2" />\n  <circle cx="4" cy="12" r="2" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/ticket.svg
var ticket_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-ticket"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />\n  <path d="M13 5v2" />\n  <path d="M13 17v2" />\n  <path d="M13 11v2" />\n</svg>\n';

// node_modules/.pnpm/lucide-static@1.52.0/node_modules/lucide-static/icons/terminal.svg
var terminal_default = '<!-- @license lucide-static v1.52.0 - ISC -->\n<svg\n  class="lucide lucide-terminal"\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  <path d="M12 19h8" />\n  <path d="m4 17 6-6-6-6" />\n</svg>\n';

// src/client/settings-icons.ts
var SECTION_ICONS = /* @__PURE__ */ new Map([
  ["general", sliders_horizontal_default],
  ["models", brain_circuit_default],
  ["plugins", puzzle_default],
  ["model-list", list_tree_default],
  ["my-plugins", blocks_default],
  ["agent-presets", bot_default],
  ["emotional-chat-workbench", heart_handshake_default],
  ["webview-mode", globe_default],
  ["jev-context-gate", workflow_default],
  ["usage-cost", chart_no_axes_combined_default],
  ["workbuddy-gateway", briefcase_business_default],
  ["chat-enhancement", message_square_more_default],
  ["dsh-unity-enhancement", box_default],
  ["dsh-proxy", waypoints_default],
  ["subscriptions", ticket_default],
  ["opencode-go", terminal_default]
]);
var NAV_BUTTON = "html.dsh-private-theme-blue [role='dialog'][data-shortcut-modal='settings'] > nav > div:last-child > button";
function installSettingsIconStyles(ctx) {
  if (typeof document === "undefined") return;
  ctx.slots.inject("settings.section", () => {
    const tag = document.createElement("style");
    tag.dataset.plugin = "dsh-theme-blue";
    tag.dataset.pluginCss = "dsh-theme-blue/settings-icons.css";
    const rebuild = () => {
      const icons = ctx.slots.entries("settings.section").map((entry) => ({ id: entry.options.id, order: entry.options.order ?? 0 })).sort((left, right) => left.order - right.order).flatMap((section, index) => {
        const svg = section.id === void 0 ? void 0 : SECTION_ICONS.get(section.id);
        if (svg === void 0) return [];
        return [{ selector: `${NAV_BUTTON}:nth-child(${index + 1})`, svg }];
      });
      if (icons.length === 0) {
        tag.textContent = "";
        return;
      }
      const before = icons.map((icon) => `${icon.selector}::before`).join(",\n");
      const originals = icons.map((icon) => `${icon.selector} > svg`).join(",\n");
      const masks = icons.map((icon) => {
        const data = encodeURIComponent(icon.svg.replaceAll("currentColor", "#000"));
        return `${icon.selector}::before { mask-image: url("data:image/svg+xml,${data}"); }`;
      }).join("\n");
      tag.textContent = `${originals} { display: none; }
${before} {
  content: '';
  display: block;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  background-color: currentColor;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}
${masks}
`;
    };
    rebuild();
    document.head.appendChild(tag);
    const off = ctx.slots.subscribe("settings.section", rebuild);
    return () => {
      off();
      tag.remove();
    };
  });
}

// src/client/index.ts
var BLUE_THEME_OVERRIDE_SOURCE = "dsh-theme-blue";
var BLUE_THEME_ROOT_CLASS = "dsh-private-theme-blue";
var BLUE_THEME_STYLE_ID = `${BLUE_THEME_OVERRIDE_SOURCE}/style.css`;
var BLUE_TOKENS = {
  "--dsw-alias-bg-base": { light: "#eef5ff", dark: "#071a33" },
  "--dsw-alias-bg-layer-1": { light: "#f7fbff", dark: "#0a2443" },
  "--dsw-alias-bg-layer-2": { light: "#e8f1ff", dark: "#0e2e55" },
  "--dsw-alias-bg-layer-3": { light: "#dceaff", dark: "#143967" },
  "--dsw-alias-bg-module-platform": { light: "#e3efff", dark: "#12345f" },
  "--dsw-alias-bg-overlay": { light: "#d6e6fb", dark: "#1c477c" },
  "--dsw-alias-border-l1": { light: "rgba(37, 99, 235, 0.10)", dark: "rgba(147, 197, 253, 0.12)" },
  "--dsw-alias-border-l2": { light: "rgba(37, 99, 235, 0.18)", dark: "rgba(147, 197, 253, 0.20)" },
  "--dsw-alias-border-l3": { light: "rgba(37, 99, 235, 0.24)", dark: "rgba(147, 197, 253, 0.28)" },
  "--dsw-alias-border-l4": { light: "rgba(37, 99, 235, 0.32)", dark: "rgba(147, 197, 253, 0.38)" },
  "--dsw-alias-brand-primary": { light: "#2563eb", dark: "#3b82f6" },
  "--dsw-alias-brand-primary-invert": { light: "#eff6ff", dark: "#071a33" },
  "--dsw-alias-brand-text": { light: "#1e3a8a", dark: "#dbeafe" },
  "--dsw-alias-button-primary-fill": { light: "#2563eb", dark: "#3b82f6" },
  "--dsw-alias-button-primary-hover": { light: "#1d4ed8", dark: "#60a5fa" },
  "--dsw-alias-button-info-fill": { light: "#3b82f6", dark: "#60a5fa" },
  "--dsw-alias-button-info-hover": { light: "#2563eb", dark: "#93c5fd" },
  "--dsw-alias-button-floating-hover": { light: "#dbeafe", dark: "#173d6d" },
  "--dsw-alias-interactive-bg-active": { light: "rgba(59, 130, 246, 0.14)", dark: "rgba(147, 197, 253, 0.18)" },
  "--dsw-alias-interactive-bg-hover": { light: "rgba(59, 130, 246, 0.08)", dark: "rgba(147, 197, 253, 0.10)" },
  "--dsw-alias-interactive-bg-hover-accent": { light: "rgba(59, 130, 246, 0.16)", dark: "rgba(147, 197, 253, 0.22)" },
  "--dsw-alias-interactive-bg-hover-solid": { light: "#dbeafe", dark: "#1b477b" },
  "--dsw-alias-label-primary": { light: "#0f2b54", dark: "#eaf3ff" },
  "--dsw-alias-label-secondary": { light: "#3b5f88", dark: "#b8d0ed" },
  "--dsw-alias-label-tertiary": { light: "#6484aa", dark: "#8eb0d4" },
  "--dsw-alias-label-primary-bluish": { light: "#1e40af", dark: "#bfdbfe" },
  "--dsw-alias-markdown-code-block": { light: "#e7f0ff", dark: "#0b2444" },
  "--dsw-alias-markdown-code-block-banner": { light: "#dbeafe", dark: "#12345f" },
  "--dsw-alias-markdown-inline-code": { light: "#dbeafe", dark: "#173d6d" },
  "--dsw-alias-scrollbar-bg-l1": { light: "#9bbce8", dark: "#3f6fa8" },
  "--dsw-alias-scrollbar-bg-l2": { light: "#82a9dc", dark: "#4f80b9" },
  "--dsw-alias-scrollbar-hover-l1": { light: "#6f9ed6", dark: "#5d8dc8" },
  "--dsw-alias-scrollbar-hover-l2": { light: "#5d8dc8", dark: "#75a8dc" },
  "--dsw-alias-state-business-primary": { light: "#2563eb", dark: "#60a5fa" },
  "--dsw-alias-state-business-tertiary": { light: "#dbeafe", dark: "#1e4f8e" },
  "--dsw-specific-bubble-highlight": { light: "#bfdbfe", dark: "#1e5aa5" },
  "--dsw-specific-bubble": { light: "#eaf3ff", dark: "#153964" },
  "--dsw-specific-input-major": { light: "#f8fbff", dark: "#0b2443" },
  "--dsw-specific-login-input": { light: "#eef5ff", dark: "#0b2443" },
  "--dsw-specific-selector": { light: "#dceaff", dark: "#173d6d" },
  "--dsw-specific-sidebar-fill": { light: "#eaf2ff", dark: "#0a2342" },
  "--dsw-specific-sidebar-nav-item-active": { light: "#dbeafe", dark: "#173d6d" },
  "--dsw-specific-sidebar-nav-item-hover": { light: "#e7f0ff", dark: "#1b477b" },
  "--dsw-specific-sidebar-nav-item-active-accent": { light: "#bfdbfe", dark: "#1e4f8e" },
  "--dsw-specific-tip": { light: "#e3efff", dark: "#173d6d" }
};
var inject = ["theme", "slots"];
function installBlueThemeStyles(ctx) {
  if (typeof document === "undefined") return;
  ctx.effect(() => {
    const root = document.documentElement;
    const tag = document.createElement("style");
    root.classList.add(BLUE_THEME_ROOT_CLASS);
    tag.dataset.plugin = BLUE_THEME_OVERRIDE_SOURCE;
    tag.dataset.pluginCss = BLUE_THEME_STYLE_ID;
    tag.textContent = style_default;
    document.head.appendChild(tag);
    return () => {
      root.classList.remove(BLUE_THEME_ROOT_CLASS);
      tag.remove();
    };
  }, "ui-theme-blue: visual stylesheet");
}
function apply(ctx) {
  ctx.effect(
    () => ctx.theme.overrideTokens(BLUE_THEME_OVERRIDE_SOURCE, BLUE_TOKENS),
    "ui-theme-blue: foundation token override"
  );
  installBlueThemeStyles(ctx);
  installSettingsIconStyles(ctx);
}

    return module.exports
  },
})
