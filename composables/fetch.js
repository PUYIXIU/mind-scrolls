import {appendResponseHeader, H3Event} from "h3";

// 手动实现带Cookie的请求头
export const fetchWidthCookie = async (event, url)=>{
    // 服务器端点获取响应
    const res = await $fetch.raw(url)
    // 响应中获取Cookie
    const cookies = (res.headers.get('set-cookie') || '').split(',')
    // 手动添加Cookie
    for(const cookie of cookies){
        appendResponseHeader(event, 'set-cookie', cookie)
    }
    return res._data
}
