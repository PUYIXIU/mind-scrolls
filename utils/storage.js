
export const token_key = 'MindScrollsToken'
export function setStorage(key,value){
    localStorage.setItem(key,value)
}

export function getStorage(key){
    return localStorage.getItem(key)
}

export function removeStorage(key){
    localStorage.removeItem(key)
}

export function clearStorage(){
    localStorage.clear()
}
