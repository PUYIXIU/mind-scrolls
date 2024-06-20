/**
 * 复制对象
 * @param obj
 * @returns {any}
 */
export function copy(obj){
    return JSON.parse(JSON.stringify(obj))
}
