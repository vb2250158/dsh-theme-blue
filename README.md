# dsh-theme-blue

This release requires DSH 0.2.1-alpha.1 or a compatible 0.2 release. See [compatibility details](docs/dsh-0.2-compatibility.md).

私有主题基础、样式包和贴纸装饰的入口。

桌面视口宽于 1280px 时，设置窗口宽 1120px、高度最多 900px，保留官方窗口留边以及导航和内容的独立滚动。较窄视口沿用原有布局；卸载主题后恢复官方尺寸。

设置导航为当前 16 个设置项提供不同的功能图标，包括浏览器、规则、用量、对话、网络、订阅和开发工具。图标按公开 section 注册表的 ID 与排序生成主题样式，菜单重排或语言变化时保持对应；未收录的设置项沿用官方图标，卸载主题后恢复原样。Lucide 图标在构建时嵌入，无额外网络请求，许可见 [第三方声明](THIRD_PARTY_NOTICES.md)。

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
