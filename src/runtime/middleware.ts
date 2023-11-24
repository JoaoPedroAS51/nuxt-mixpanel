import { defineNuxtRouteMiddleware, useMixpanel } from '#imports';

export default defineNuxtRouteMiddleware(() => {
  const mixpanel = useMixpanel()
  mixpanel.track_pageview()
})
