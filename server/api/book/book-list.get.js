// 请求案例
export default defineEventHandler(event=>{
    return {
        data:[
            {id:0, name:'123',author:'admin'},
            {id:1, name:'456',author:'admin'},
            {id:2, name:'789',author:'admin'},
        ]
    }
})
