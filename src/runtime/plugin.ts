import { defineNuxtPlugin, addRouteMiddleware } from '#imports'
import mixpanel, { type Mixpanel } from 'mixpanel-browser'
import mixpanelMiddleware from './middleware'
import { createMixpanelWrapper } from './utils'

export default defineNuxtPlugin((nuxtApp) => {
  const options = nuxtApp.$config.public.mixpanel

  if (import.meta.client && !options.disable && options.token) {
    mixpanel.init(options.token, {
      ...options.config,
      track_pageview: false
    })
  }

  if (import.meta.client && options.config.track_pageview) {
    addRouteMiddleware('mixpanel', mixpanelMiddleware, {
      global: true,
    })
  }

  return {
    provide: {
      mixpanel: createMixpanelWrapper(mixpanel, options),
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $mixpanel: Mixpanel
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $mixpanel: Mixpanel
  }
}
