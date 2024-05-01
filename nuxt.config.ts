export default defineNuxtConfig({
  
  app:{
    head:{
      title:'nuxt course',
      meta:[
        {name:'viewport',
          content:'this is a test page'
        }
      ]
    }
  },
  devtools: { enabled: true },
  alias:{
    assets:"/<rootDir>/assets"
  },
  ssr:true,
  modules: ['@vueuse/nuxt', '@pinia/nuxt'],
  css:['../assets/main.css'],postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})