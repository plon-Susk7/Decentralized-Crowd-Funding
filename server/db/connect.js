const mongoose = require('mongoose');


const connectDB = async (url) =>{
        return new Promise(async (resolve,reject)=>{
            const connection  = await mongoose.createConnection(url).asPromise();
            resolve(connection)
        })
}


module.exports = connectDB
