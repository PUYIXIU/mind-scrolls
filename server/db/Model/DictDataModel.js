/**
 * 字典值类型
 */
import db from "../mongodb/index";
const DictDataSchema = db.Schema({
    type_id:{type:String,required:true,trim:true}, // 所属字典键值
    label:{type:String,required:true,trim:true}, // 字典名
    value:{type:String,required:true,trim:true}, // 字典值
    isDefault:{type:Boolean,default:false}, // 是否为默认值
    color:{type:String,default:"#c0c0c0"}, // 颜色
})

export const DictDataModel = db.model('DictData',DictDataSchema, 'dictData')

// 新加字典值
export async function addDictData(body){
    const dictData = new DictDataModel(body)
    return await dictData.save()
}
