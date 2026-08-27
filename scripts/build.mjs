import { build } from 'esbuild'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(repositoryRoot, 'src/client/index.ts')
const output = resolve(repositoryRoot, 'lib/client.js')
const moduleId = 'dsh-theme-blue'

const result = await build({
  entryPoints: [source],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: 'es2022',
  write: false,
  sourcemap: false,
  legalComments: 'none',
  loader: { '.css': 'text' },
  logLevel: 'silent',
})

const bundled = result.outputFiles.at(0)
if (bundled === undefined) throw new Error('Theme client bundle did not produce JavaScript')
const artifact = `window.__ModuleLoader__.load({\n  id: ${JSON.stringify(moduleId)},\n  factory: () => {\n    var module = { exports: {} }\n    var exports = module.exports\n${bundled.text}\n    return module.exports\n  },\n})\n`

await mkdir(dirname(output), { recursive: true })
await writeFile(output, artifact)
console.log(`Built ${output}`)
