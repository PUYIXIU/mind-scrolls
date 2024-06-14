import {MongoClient} from 'mongodb'
import {connUrl} from './dbConfig.js'
class DB {
    url:string
    constructor(url:string) {
        this.url = url
    }
    connect(){
        return MongoClient.connect(this.url)
    }
}

const db = new DB(connUrl)
export default db
