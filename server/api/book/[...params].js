export default defineEventHandler(async event=>{
    // 抓取到的路由参数
    const params = event.context.params.params

    return {
        message:'捕捉到一个路由',
        params:params,
    }
})
