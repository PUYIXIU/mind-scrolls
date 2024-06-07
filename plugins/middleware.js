// 动态添加中间件
export default defineNuxtPlugin(()=>{
    addRouteMiddleware('global-test',()=>{
        console.log('1-动态添加的global中间件')
    },{global:true})

    addRouteMiddleware('named-test',()=>{
        console.log('3-动态添加的命名中间件')
    })
})
