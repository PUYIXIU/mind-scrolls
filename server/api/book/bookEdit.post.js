import {bookAdd, bookEdit} from "../../db/Model/BookModel.js";

export default defineEventHandler(async event =>{
    let body = await readBody(event)
    if(body._id){
        return bookEdit(body)
    }else{
        return bookAdd(body)
    }
})

