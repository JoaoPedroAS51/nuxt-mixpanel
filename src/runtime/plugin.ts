import { defineNuxtPlugin } from '#app'
import { init, type Mixpanel} from 'mixpanel-browser'
import { createMixpanelWrapper } from './utils'

export default defineNuxtPlugin((nuxtApp) => {
  const options = nuxtApp.$config.public.mixpanel

  let mixpanel: Mixpanel | undefined

  if (process.client && !options.disable && options.token && options.name) {
    mixpanel = init(options.token, options.config, options.name)
  }

  return {
    provide: {
      mixpanel: createMixpanelWrapper(mixpanel, options),
    },
  }
})
