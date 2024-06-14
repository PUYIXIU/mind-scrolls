// 根据模式创建模型
// 根据模型创建实例

import {model,Schema} from "mongoose";

const UserSchema = new Schema(
    {
        username:{type:String, required:true, unique:true, trim:true,}, // 用户名
        password:{type:String, required:true,}, // 密码
        email:{type:String, required:true, unique:true}, // 个人邮箱
    },
    {
        // 实例方法 new UserModel().xxxx
        methods:{},
        // 静态方法 UserModel.xxx
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
        },
        // 查询助手
        query:{}
    }
)
export const UserModel = model('User',UserSchema)

