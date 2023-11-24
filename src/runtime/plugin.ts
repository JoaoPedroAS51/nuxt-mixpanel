import { defineNuxtPlugin, addRouteMiddleware } from '#imports'
import mixpanel from 'mixpanel-browser'
import mixpanelMiddleware from './middleware'
import { createMixpanelWrapper } from './utils'

export default defineNuxtPlugin((nuxtApp) => {
  const options = nuxtApp.$config.public.mixpanel

  if (process.client && !options.disable && options.token) {
    mixpanel.init(options.token, {
      ...options.config,
      track_pageview: false
    })
  }

  if (process.client && options.config.track_pageview) {
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
