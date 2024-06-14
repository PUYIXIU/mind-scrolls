import mongoose from 'mongoose'

export class DB {
    conn = null // 连接对象
    constructor(url) {
        this.url = url
        this.connect()
    }
    // 连接
    connect(){
        this.conn = mongoose.connect(this.url)
        mongoose.connection.on('connected',()=>console.log(`数据库连接成功：${this.url}`))
        mongoose.connection.on('error',err=>console.log(`连接错误：${err}`))
        mongoose.connection.on('disconnection',()=>console.log('断开连接'))
    }
}

