// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  // Prueba con la ruta relativa desde la raíz
  css: ['./app/assets/css/main.css'], 
  future: {
    compatibilityVersion: 4,
  }
})