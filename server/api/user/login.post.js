import {UserModel} from "~/server/db/Model/UserModel.js";

export  default defineEventHandler(async event=>{
    let body = await readBody(event)
    let result
    await query(body)
        .then(res=>result = {code:200,data:res})
        .catch(err=>result={code:400,data:err})
    return result
})

function query(body){
    return new Promise(async (resolve, reject)=>{
        if(body.token){
            // 使用token登录
            let result = await UserModel.find({_id:body.token})
            if(result.length>0) resolve(result[0])
            else reject('token失效')
        }else{
            // 使用用户名密码登录
            let result = await UserModel.find(body)
            if(result.length>0) resolve(result[0])
            else reject('请检查用户名或密码是否正确')
        }
    })
}
