# 皮肤市场 / Marketplace

本插件通过 `dsh.bundle` 和 `cordis.patch.yml` 加载。dsh-market 从插件目录的 `category: theme` 识别皮肤，切换时启停对应插件包；它没有要求所有主题提供统一的 `skin.json`。本插件沿用官方 token 覆盖和设置图标插槽，并在插件卸载时释放注册、DOM 样式及配色覆盖。

This plugin loads through `dsh.bundle` and `cordis.patch.yml`. dsh-market identifies skins using `category: theme` in its catalog and switches them by enabling/disabling their packages. A separate `skin.json` is not required for this root-package theme. All token overrides, DOM styles and settings glyphs are owned by the plugin lifetime.

目录收录由 [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md) 管理；fork 商店不会自动完成上游收录。向目录提交以下单个条目，仓库路径为 `data/plugins/vb2250158__dsh-theme-blue.yml`：

Catalog inclusion is managed by [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md). Installing a marketplace fork does not submit this theme to the upstream catalog. Submit this entry at `data/plugins/vb2250158__dsh-theme-blue.yml`:

```yaml
url: https://github.com/vb2250158/dsh-theme-blue
name: vb2250158/dsh-theme-blue
category: theme
description:
  zh: 蓝色浅色与深色配色、设置导航图标和可撤销界面样式。
  en: Blue light and dark palettes, settings glyphs and reversible interface styles.
```

仓库的 `screenshots.json` 保存真实 Web 截图的仓库相对路径；截图和清单一起发布。当前实测环境见[兼容说明](dsh-0.2-compatibility.md)。本主题只声明当前维护环境，其他宿主或产品形态未列入支持范围。

The repository's `screenshots.json` lists real Web screenshots by repository-relative path. Publish the images and manifest together. See the [tested environment](dsh-0.2-compatibility.md); other hosts and product forms are outside the maintained target.
