// 全局路由中间件，由global结尾
/**
 * return navigatorTo('/') 重定向到给定路径，服务器端发生重定向时设置代码为302
 * return navigatorTo('/',{redirectCode: 301}) 重定向，但自定义重定向代码
 * return abortNavigation() 停止导航
 * return abortNavigation(error) 拒接导航并提供错误信息
 */
export default defineNuxtRouteMiddleware((to,from)=>{
    console.log('1-global路由中间件')

    if(process.server){
        console.log('1-server端运行中间件')
    }
    if(process.client){
        console.log('1-client端运行中间件')
    }
})
