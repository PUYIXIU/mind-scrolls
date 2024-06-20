/**
 * 字典类型
 *
 */
import db from "../mongodb/index";
const DictTypeSchema = db.Schema({
    name:{type:String,required:true,trim:true}, // 字典描述
})

export const DictTypeModel = db.model('DictType',DictTypeSchema, 'dictType')

/**
 * 新增字典类型
 * @param body
 * @returns {Promise<void>}
 */
export async function dictTypeAdd(body){
    const dictType = new DictTypeModel(body)
    return await dictType.save()
}

/**
 * 修改字典类型
 * @param body
 * @returns {Promise<void>}
 */
export async function dictTypeUpdate(body){
    return await DictTypeModel.updateOne({_id:body._id},body)
}

/**
 * 删除字典类型
 * @param id
 * @returns {Promise<*>}
 */
export async function dicTypeDelete(id){
    return await DictTypeModel.deleteOne({_id:id})
}

/**
 * 查询字典类型
 * @param query
 * @returns {Promise<*>}
 */
export async function dictTypeFind(query={}){
    return await DictTypeModel.find(query)
}

