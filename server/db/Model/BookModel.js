/**
 * 作品模型
 */

import db from "../mongodb/index.js";
const BookSchema = db.Schema({
    // 作品名称
    title:{type:String, required:true,trim:true},
    author:{type:String,}, // 作者
    // country:{type:String}, // 创作国家
    // age:{type:String}, // 创作年代
    // category:{type:Array}, // 类型
})

export const BookModel = db.model('Book', BookSchema, 'book')

/**
 * 新增书
 * @param body
 * @returns {Promise<void>}
 */
export async function bookAdd(body){
    const book = new BookModel(body)
    return await book.save()
}

/**
 * 修改书
 * @param body
 * @returns {Promise<void>}
 */
export async function bookEdit(body){
    return await BookModel.updateOne({_id:body.id},body)
}

/**
 *
 * @param query
 * @returns {Promise<Query<Array<HydratedDocument<InferSchemaType<*>, ObtainSchemaGeneric<*, "TVirtuals"> & ObtainSchemaGeneric<*, "TInstanceMethods">, ObtainSchemaGeneric<*, "TQueryHelpers">>>, any, unknown, any, "find", unknown>>}
 */
export async function bookFind(query){
    return await BookModel.find(query)
}
