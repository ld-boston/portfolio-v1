// We cannot leverage vue-router scrollBehavior since the scroll is not on window
export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()

  nuxtApp.hooks.hook('page:finish', async () => {
    if (!window) return
    window.scrollTo({ top: 0 })
  })
})
