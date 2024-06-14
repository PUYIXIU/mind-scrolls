// 连接之前需要创建有指定数据库读写权限的用户名密码
const dbConfig = {
    ip: "127.0.0.1",
    port: "27017",
    dbname: "MindScrolls",
    name: "",
    password: "",
}
// export const connUrl = `mongodb://${dbConfig.name}:${dbConfig.password}@${dbConfig.ip}:${dbConfig.port}/${dbConfig.dbname}`
export const connUrl = `mongodb://${dbConfig.ip}:${dbConfig.port}/${dbConfig.dbname}`
