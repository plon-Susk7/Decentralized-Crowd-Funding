const mongoose = require('mongoose')
var connectDB = require('../db/connect')

const url = 'mongodb+srv://priyash7:12345@syntaxerror.t41h2az.mongodb.net/?retryWrites=true&w=majority'

let db

const informationSchema = new mongoose.Schema({
    walletID : String,
    amount : Number,
    project : String
})

const getDB = async () =>{
    return db ? db : await connectDB(url)
}

const getInfoModel = async () =>{
    const DB = await getDB();
    return DB.model("userInfo",informationSchema)
}

module.exports = {getInfoModel}