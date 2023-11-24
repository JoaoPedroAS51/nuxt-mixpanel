import { defineNuxtPlugin } from '#imports'
import mixpanel from 'mixpanel-browser'
import { createMixpanelWrapper } from './utils'

export default defineNuxtPlugin((nuxtApp) => {
  const options = nuxtApp.$config.public.mixpanel

  if (process.client && !options.disable && options.token) {
    mixpanel.init(options.token, options.config)
  }

  return {
    provide: {
      mixpanel: createMixpanelWrapper(mixpanel, options),
    },
  }
})
