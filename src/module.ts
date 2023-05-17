import {defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'
import { Config as MixpanelConfig } from 'mixpanel-browser'

// Module options TypeScript interface definition
export interface ModuleOptions extends MixpanelConfig {
  token: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-mixpanel',
    configKey: 'mixpanel'
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    nuxt.options.runtimeConfig.public.mixpanel = options

    if (!options.token) {
      console.warn('[nuxt-mixpanel]: No Mixpanel token provided. Please add it to the module options.')
    }

    addPlugin(resolver.resolve('./runtime/plugin'))

    addImports({
      name: 'useMixpanel',
      as: 'useMixpanel',
      from: resolver.resolve('./runtime/composables')
    })
  }
})
