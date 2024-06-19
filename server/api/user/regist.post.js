import UserModel from "~/server/db/Model/UserModel.js";

/**
 * 新用户注册
 */

export default defineEventHandler(async event=>{
    let body = await readBody(event)
    let result
    await add(body).then(res=>{
        result = {success:true, token:res}
    }).catch(err=>{
        result = {success:false, message:err}
    })
    return result
})

function add(query){
    return new Promise(async (resolve,reject)=>{
        // 如果存在同名用户
        if(await UserModel.exitSameNameData(query.username)){
            reject('存在同名用户')
            return
        }
        if(await UserModel.exitSameEmailData(query.email)){
            reject('邮箱已被注册')
            return
        }
        let user = new UserModel({...query})
        user.save().then(res=>{
            resolve(res._id)
        }).catch(err=>{
            console.log(`注册失败：${err.message}`)
            reject(err.message)
        })
    })
}
