import mongoose from 'mongoose'

// 连接之前需要创建有指定数据库读写权限的用户名密码
const dbConfig = {
    ip: "127.0.0.1",
    port: "27017",
    dbname: "MindScrolls",
    name: "",
    password: "",
}
// export const connUrl = `mongodb://${dbConfig.name}:${dbConfig.password}@${dbConfig.ip}:${dbConfig.port}/${dbConfig.dbname}`
const connUrl = `mongodb://${dbConfig.ip}:${dbConfig.port}/${dbConfig.dbname}`

mongoose.connect(connUrl)

mongoose.connection.on('connected',()=>console.log(`数据库连接成功：${connUrl}`))
mongoose.connection.on('error',err=>console.log(`连接错误：${err}`))
mongoose.connection.on('disconnection',()=>console.log('断开连接'))

export default mongoose
