import { defineNuxtModule, addPlugin, createResolver, useLogger, addImports, extendViteConfig } from '@nuxt/kit'
import type { Config as MixpanelConfig } from 'mixpanel-browser'

const logger = useLogger('nuxt:mixpanel')

// Module options TypeScript interface definition
export interface ModuleOptions {
  token: string
  disable: boolean
  config: Partial<MixpanelConfig>
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'mixpanel-nuxt',
    configKey: 'mixpanel',
    compatibility: {
      nuxt: '^3'
    }
  },
  defaults: {
    token: process.env.MIXPANEL_TOKEN || '',
    disable: false,
    config: {},
  },
  async setup(options, nuxt) {
    if (options.disable) {
      logger.info('Mixpanel is disabled ("disable" option has been set)')
    } else if (!options.token) {
      options.disable = true
      logger.info('Mixpanel is disabled (no Token has been provided)')
    }

    nuxt.options.runtimeConfig.public.mixpanel = options

    // Create resolver to resolve relative paths
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    addPlugin(resolve(runtimeDir, 'plugin'))

    addImports({
      name: 'useMixpanel',
      as: 'useMixpanel',
      from: resolve(runtimeDir, 'composables'),
    })

    nuxt.options.build.transpile.push(runtimeDir)

    extendViteConfig(config => {
      config.optimizeDeps = config.optimizeDeps || {}
      config.optimizeDeps.include = config.optimizeDeps.include || []
      config.optimizeDeps.exclude = config.optimizeDeps.exclude || []
      config.optimizeDeps.include.push(
        'mixpanel-browser',
      )
    })
  },
})
