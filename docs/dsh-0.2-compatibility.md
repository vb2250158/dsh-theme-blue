# DSH 0.2 compatibility

The maintained target is DSH 0.2.2-rc.1 source Web on Windows x64, Core revision 54931fbd25050ef036e44b1daec931da2bfe7b39, Node 24.15.0, pnpm 11.28.5 and npm 11.12.1. The package declares this host version in `engines.dsh`. Settings glyphs require its public `settings.section.icon` slot. Other environments are not included in the maintenance test matrix. Source verification and formal installation are recorded separately by the maintenance task.

本维护版本面向 Windows x64 的 DSH 0.2.2-rc.1 源码 Web，Core 提交为 54931fbd25050ef036e44b1daec931da2bfe7b39，Node 24.15.0、pnpm 11.28.5、npm 11.12.1，包通过 `engines.dsh` 声明该宿主版本。导航图标使用公开的 `settings.section.icon` 插槽；源码验证与正式安装分别记录。

Declared DSH dependencies and browser injection packages match the current package inventory. Removed runtime and invariant packages are no longer declared.

Install the fixed commit reachable from the repository main branch through dsh plugin. The shared environment stores full commit ids; local source paths are not portable plugin pins.

The maintenance lockfile disables implicit peer installation. DSH supplies the declared peer packages; the repository includes the built browser artifact, so installing its fixed Git commit does not rebuild against a developer checkout.
