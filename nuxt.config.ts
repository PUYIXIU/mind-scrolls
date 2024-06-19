// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: false }, // 控制台
  buildDir:'nuxt-build', // 构建文件夹


  typescript:{
    typeCheck:true, // 启动构建时类型检查 同时要在dev下安装vue-tsc@^1和typescript
  },

  experimental:{
    componentIslands: true, // 独立服务器端组件
  },

  modules:[ // 引入模块
      '@element-plus/nuxt',
      '@nuxtjs/tailwindcss',
  ],
  css:[
      'element-plus/dist/index.css'
  ],

  vite:{
    css: {
      preprocessorOptions: {
        scss:{
          additionalData:
              // '@use "@/assets/styles/_colors.scss" as *;@use "@/assets/styles/global.scss" as *;@use "@/assets/styles/_font.scss" as *;@use "@/assets/styles/element-reset.scss" as *;'
              '@use "@/assets/styles/global.scss" as *;'
        }
      }
    }
  },

  // SEO 和 Meta
  app:{
    pageTransition:{name:'page', mode:'out-in'}
  },

  components:[
    { // 去掉组件路由前缀
      path:'~/components',
      pathPrefix:false,
      extensions:['.vue']
    }
  ],
  devServer:{
    host:'10.5.6.88',
    port:8070,
  }
})
