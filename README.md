# dsh-theme-blue

This release targets DSH 0.2.2-rc.1 source Web with the public settings icon slot. See [environment details](docs/dsh-0.2-compatibility.md).

蓝色浅色与深色配色、设置导航图标和可撤销的界面样式。

Blue light and dark palettes, settings glyphs and reversible interface styles.

通过皮肤商店启用或停用本主题时，配色覆盖、样式和设置图标随插件生命周期一起生效或清理；停用后恢复底层主题及官方图标。浅色、深色和跟随系统仍由 DSH 的外观设置管理。商店收录方式见[皮肤市场](docs/marketplace.md)。

Marketplace enable/disable controls this plugin's token layer, stylesheet and settings glyphs together. Disabling restores the underlying theme and original icons. DSH Appearance settings continue to control light, dark and system modes. See [marketplace integration](docs/marketplace.md).

“新会话”按钮使用蓝色主题的浅色和深色底色。

网页桌宠的气泡、对话输入框和积分卡片使用 DSH 默认字体。气泡使用深色文字和 98% 不透明白底。碎碎念文字最小 12px，行距为字号的 1.6 倍；关闭蓝色主题后恢复桌宠原有样式。

Web pet bubbles, chat input and score cards use the DSH default font. Bubbles use dark text on a 98% opaque white background. Whisper text stays at least 12px with a 1.6 line height; disabling the blue theme restores the pet styles.

与 `dafy-whale-theme` 同时启用时，左上角只显示一组大肥鱼图标和标题，避免上游品牌样式在新版 DSH 的嵌套元素中重复显示。关闭大肥鱼主题后恢复原有品牌区域。

When enabled alongside `dafy-whale-theme`, the sidebar shows one whale mark and title. The original identity returns when the whale theme is disabled.

桌面视口宽于 1280px 时，设置窗口宽 1120px、高度最多 900px，保留官方窗口留边以及导航和内容的独立滚动。较窄视口沿用原有布局；卸载主题后恢复官方尺寸。

设置导航为 16 个设置项提供功能图标。图标通过公开的 `settings.section.icon` 插槽按设置项 ID 注册，每项只显示一个图标，菜单重排或语言变化时保持对应；未收录项沿用官方图标，卸载主题后恢复原样。Lucide 图标在构建时嵌入，无额外网络请求，许可见 [第三方声明](THIRD_PARTY_NOTICES.md)。

Settings navigation registers 16 semantic glyphs through the public `settings.section.icon` slot. Each section id selects one glyph, independently of order and locale. Unknown sections keep the official icon; unloading restores the originals. SVGs are bundled without extra network requests.

设置弹窗中的复选框和现有滑动开关使用同一组主题滑条，保留标签点击、键盘、禁用状态和保存事件。尺寸与颜色由 `themes/blue/style.css` 中的 `--dsh-switch-*` 变量控制；继承的颜色变量无法解析时在控件处回退到 DSH 主题令牌，支持通过 portal 挂载的弹窗，关闭状态的圆点沿用官方颜色。聊天任务列表保持原样，卸载主题后恢复原始样式。

Settings checkboxes and existing switches share themed tracks while retaining labels, keyboard input, disabled states and save events. The `--dsh-switch-*` variables in `themes/blue/style.css` control dimensions and colors; unresolved inherited colors fall back to DSH tokens at each control, including dialogs mounted through portals. Off-state thumbs retain the official color. Chat task lists remain unchanged; unloading restores the original styles.

## 安装

锁定公开仓库的提交后，通过 DSH 官方入口安装：

```powershell
pnpm dsh plugin --profile web add github:vb2250158/dsh-theme-blue#<commit>
```

插件包声明 `dsh.bundle`，安装后会把自己的配置层加入 profile。

## 配置

插件配置保存在 DSH profile 的 `cordis.patch.yml`。多电脑同步仓库只保存仓库地址、固定提交、启停状态和配置，不保存本仓库源码。

## 验证

```powershell
npm test
npm run build
npm pack --dry-run
```

维护环境的生命周期集成测试使用当前 DSH 源码构建，不读取运行中的 profile：

```powershell
$env:DSH_SOURCE_ROOT = '<current-dsh-source-checkout>'
npm run test:lifecycle
```

## 许可证

MIT

## Plugin display metadata

The plugin list shows **Blue theme** in English and **蓝色主题** in Chinese, following the DSH interface language. `locale/en.json` and `locale/zh.json` provide the title and description; `icon.svg` supplies self-contained artwork. The package exports and publishes these resources. The icon is adapted from Lucide; see [ICON_LICENSE.txt](ICON_LICENSE.txt).

The icon uses a centered 36 × 36 viewBox to leave more space around the artwork inside the plugin icon frame.
