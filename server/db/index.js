import {connUrl} from './dbConfig.js'
import {DB} from './mongodb.js'
const db = new DB(connUrl)
export default db
