import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

async function connect() {
    const mongod = await MongoMemoryServer.create() //create new mongod instance whenever you start server
    const getUri = mongod.getUri()

    const db = await mongoose.connect(getUri)
    console.log('Database Connected')
    return db 
}

export default connect 