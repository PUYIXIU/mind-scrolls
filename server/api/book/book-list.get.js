import db from '~/server/db/index.js'
export default defineEventHandler( async event=>{
    let resultData = await query().catch(err=>{
        throw createError({
            statusCode: 500,
            statusMessage:err.message
        })
    })
    return {
        data:resultData
    }
})

function query(){
    return new Promise(async (resolve, reject)=>{
        db.connect().then(conn=>{
            const dbTable = conn.db('MindScrolls').collection("books")
            dbTable.find({})
                .toArray()
                .then(res=>{
                    resolve(res)
                })
                .catch(err=>{
                    console.log(`数据操作失败：${err.message}`)
                    reject(err.message)
                })
                .finally(()=>{
                    conn.close()
                })
        }).catch(err=>{
            console.log(`数据库连接失败：${err.message}`)
            reject(err.message)
        })
    })
}
