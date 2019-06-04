import { ConcatSource } from 'webpack-sources'

const PLUGIN_NAME = 'TaroChunkTemplatePlugin'

export default class TaroChunkTemplatePlugin {
  apply (chunkTemplate) {
    chunkTemplate.hooks.render.tap(PLUGIN_NAME, (modules, chunk) => {
      const source = new ConcatSource()
      const jsonpFunction = chunkTemplate.outputOptions.jsonpFunction
      source.add(`(function (g) { `)
      source.add(`if (g && g[${JSON.stringify(jsonpFunction)}]) { `)
      source.add(`g[${JSON.stringify(jsonpFunction)}](${JSON.stringify(chunk.ids)},`)
      source.add(modules)

      const entries = [chunk.entryModule].filter(Boolean).map(m => m.id)

       if (entries.length > 0) {
        source.add(`,${JSON.stringify(entries)}`)
      }

      source.add(`)`)
      source.add(`}`)
      source.add(`})(typeof window !== 'undefined' && window.Math === Math ? window : typeof global === 'object' ? global : this)`)

      return source
    })

    chunkTemplate.hooks.hash.tap(PLUGIN_NAME, (hash) => {
      hash.update(PLUGIN_NAME)
      hash.update(`4`)
      hash.update(`${chunkTemplate.outputOptions.jsonpFunction}`)
      hash.update(`${chunkTemplate.outputOptions.globalObject}`)
    })
  }
}
