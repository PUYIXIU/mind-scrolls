/**
 * 新建字典
 */
import {addDictData} from "../../db/Model/DictDataModel.js";
import {dictTypeAdd} from "../../db/Model/DictTypeModel.js";

export default defineEventHandler(async event =>{
    const body = await readBody(event)
    // 新增字典
    const newDict = await dictTypeAdd(body)
    // 新增字典值
    const dictDataList = body.children.map(item=>{
        item.type_id = newDict._id
        addDictData(item)
    })
    await Promise.all(dictDataList)
    return '新增成功'
})
