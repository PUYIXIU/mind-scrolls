/**
 * 字典值类型
 */
import db from "../mongodb/index";
const DictDataSchema = db.Schema({
    key:{type:String,required:true,trim:true}, // 所属字典键值
    label:{type:String,required:true,trim:true}, // 字典名
    value:{type:Number,required:true,trim:true}, // 字典值
    isDefault:{type:Boolean,default:false}, // 是否为默认值
})

export const DictDataModel = db.model('DictData',DictDataSchema, 'dictData')
