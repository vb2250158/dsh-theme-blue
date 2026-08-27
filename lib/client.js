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
var style_default = "html.dsh-private-theme-blue [data-dsh-private-ui='theme-mode'] {\n  min-height: 76px;\n  padding: 12px 14px;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: center;\n  text-align: left;\n  white-space: normal;\n}\nhtml.dsh-private-theme-blue [data-dsh-private-ui='theme-mode-description'] {\n  color: var(--dsw-alias-label-secondary);\n}\n\nhtml.dsh-private-theme-blue [data-dsh-private-ui='theme-mode'][aria-pressed='true'] [data-dsh-private-ui='theme-mode-description'] {\n  color: var(--dsw-alias-brand-primary-invert);\n}";

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
var inject = ["theme"];
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
}

    return module.exports
  },
})
