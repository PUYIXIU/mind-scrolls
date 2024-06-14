export default defineNuxtPlugin(nuxtApp=>{
    // nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    //     // 处理错误
    // }

    // Vue渲染生命周期错误 钩子函数
    nuxtApp.hook('vue:error',(error, instance, info)=>{
        console.log('Vue渲染生命周期 报错：')
        console.log(error)
    })

    // Nuxt启动错误 钩子函数
    nuxtApp.hook('app:error',(error, instance, info)=>{
        console.log('Nuxt启动错误 报错：')
        console.log(error)
    })

    // Nuxt启动错误 钩子函数
    nuxtApp.hook('app:error',(error, instance, info)=>{
        console.log('Nuxt启动错误 报错：')
        console.log(error)
    })
})
