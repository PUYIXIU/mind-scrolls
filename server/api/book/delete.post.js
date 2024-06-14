export default defineEventHandler (async event=>{
    let body = await readBody(event)
    return {
        message:`${body.id}删除成功`,
        body:body
    }
})
