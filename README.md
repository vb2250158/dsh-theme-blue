# dsh-theme-blue

This release requires DSH 0.2.1-alpha.1 or a compatible 0.2 release. See [compatibility details](docs/dsh-0.2-compatibility.md).

私有主题基础、样式包和贴纸装饰的入口。

网页桌宠的气泡、对话输入框和积分卡片使用 DSH 默认字体。气泡使用深色文字和 98% 不透明白底。碎碎念文字最小 12px，行距为字号的 1.6 倍；关闭蓝色主题后恢复桌宠原有样式。

Web pet bubbles, chat input and score cards use the DSH default font. Bubbles use dark text on a 98% opaque white background. Whisper text stays at least 12px with a 1.6 line height; disabling the blue theme restores the pet styles.

与 `dafy-whale-theme` 同时启用时，左上角只显示一组大肥鱼图标和标题，避免上游品牌样式在新版 DSH 的嵌套元素中重复显示。关闭大肥鱼主题后恢复原有品牌区域。

When enabled alongside `dafy-whale-theme`, the sidebar shows one whale mark and title. The original identity returns when the whale theme is disabled.

桌面视口宽于 1280px 时，设置窗口宽 1120px、高度最多 900px，保留官方窗口留边以及导航和内容的独立滚动。较窄视口沿用原有布局；卸载主题后恢复官方尺寸。

设置导航为当前 16 个设置项提供不同的功能图标，包括浏览器、规则、用量、对话、网络、订阅和开发工具。图标按公开 section 注册表的 ID 与排序生成主题样式，菜单重排或语言变化时保持对应；未收录的设置项沿用官方图标，卸载主题后恢复原样。Lucide 图标在构建时嵌入，无额外网络请求，许可见 [第三方声明](THIRD_PARTY_NOTICES.md)。

设置弹窗中的复选框和现有滑动开关使用同一组主题滑条，保留标签点击、键盘、禁用状态和保存事件。尺寸与颜色由 `themes/blue/style.css` 中的 `--dsh-switch-*` 变量控制；聊天任务列表保持原样，卸载主题后恢复原始样式。

Settings checkboxes and existing switches share themed tracks while retaining labels, keyboard input, disabled states and save events. The `--dsh-switch-*` variables in `themes/blue/style.css` control dimensions and colors. Chat task lists remain unchanged; unloading restores the original styles.

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

## 许可证

MIT

## Plugin display metadata

The plugin list shows **Blue theme** in English and **蓝色主题** in Chinese, following the DSH interface language. `locale/en.json` and `locale/zh.json` provide the title and description; `icon.svg` supplies self-contained artwork. The package exports and publishes these resources. The icon is adapted from Lucide; see [ICON_LICENSE.txt](ICON_LICENSE.txt).

The icon uses a centered 36 × 36 viewBox to leave more space around the artwork inside the plugin icon frame.
