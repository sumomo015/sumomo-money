export default defineNuxtConfig({
  builder: 'vite',
  devServer: {
    port: 3000,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja-JP',
      },
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-primevue',
  ],
  eslint: {
    lintOnStart: false,
  },
  primevue: {
    options: {
      unstyled: true,
    },
    cssLayerOrder: '',
    components: {
      prefix: 'prime',
      exclude: ['Editor', 'Chart'],
    },
  },
});
