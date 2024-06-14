// 中间件案例
export default defineEventHandler(event=>{
    console.log('New request: ' + getRequestURL(event))
})
