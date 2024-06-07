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
          additionalData: '@use "@/assets/styles/_colors.scss" as *;'
        }
      }
    }
  },

  // SEO 和 Meta
  app:{
    head:{
      title:'Mind Scrolls | 脑轴', // 配置标题
      link:[
        {rel:'icon', type:'image/png', href:'/e-duck.png'}, // 配置头栏
      ]
    }
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
