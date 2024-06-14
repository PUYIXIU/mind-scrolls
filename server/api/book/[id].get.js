// 请求案例：提取请求参数
export default defineEventHandler(event=>{
    const id = getRouterParam(event, 'id')
    return {
        hello:`id:${id}书本对应信息`
    }
})
