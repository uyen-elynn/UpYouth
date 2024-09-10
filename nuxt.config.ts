// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'DM Sans': [400, 700]
        }
      }
    ]
  ],
  srcDir: 'src',
  colorMode: {
    preference: 'light'
  }
})
