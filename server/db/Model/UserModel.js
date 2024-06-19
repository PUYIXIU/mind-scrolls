/**
 * 用户模型
 */
import db from "../mongodb/index";
const UserSchema = db.Schema({
    username:{type:String, required:true, unique:true, trim:true,}, // 用户名
    password:{type:String, required:true,}, // 密码
    email:{type:String, required:true, unique:true}, // 个人邮箱
},{
    statics:{
        // 查询是否存在同名数据
        async exitSameNameData(username){
            let result = await this.find({username:username})
            return result.length>0
        },
        // 查询是否存在同名邮箱
        async exitSameEmailData(email){
            let result = await this.find({email:email})
            return result.length>0
        },
    }
})
export const UserModel = db.model('User', UserSchema, 'user')

/**
 * 新增用户数据
 * @param body
 * @returns {Promise<void>}
 */
export async function userAdd(body){

}
