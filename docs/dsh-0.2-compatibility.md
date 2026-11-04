# DSH 0.2 compatibility

The maintained target is DSH 0.2.2-alpha.3 source Web on Windows x64, Core revision 80edbdff23f93d742235d7410c1ef0905ec90500, Node 24.15.0, pnpm 11.28.5 and npm 11.12.1. Settings glyphs require its public `settings.section.icon` slot. Other environments are not included in the maintenance test matrix. Source verification and formal installation are recorded separately by the maintenance task.

本维护版本面向 Windows x64 的 DSH 0.2.2-alpha.3 源码 Web，Core 提交为 80edbdff23f93d742235d7410c1ef0905ec90500，Node 24.15.0、pnpm 11.28.5、npm 11.12.1。导航图标使用公开的 `settings.section.icon` 插槽；源码验证与正式安装分别记录。

Declared DSH dependencies and browser injection packages match the current package inventory. Removed runtime and invariant packages are no longer declared.

Install the fixed commit reachable from the repository main branch through dsh plugin. The shared environment stores full commit ids; local source paths are not portable plugin pins.

The maintenance lockfile disables implicit peer installation and uses the current Cordis and schemastery versions. Git packages build without depending on the source checkout node_modules.
