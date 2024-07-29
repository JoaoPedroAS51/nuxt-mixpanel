export default defineNuxtConfig({
  modules: ['../src/module'],
  // Disabled in playground, but with the module debug
  mixpanel: {
    token: 'MY_TOKEN',
    disable: true,
    config: { debug: true }
  }
})
