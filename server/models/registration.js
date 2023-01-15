const mongoose = require('mongoose')
var connectDB = require('../db/connect')

const url = 'mongodb+srv://priyash7:12345@syntaxerror.t41h2az.mongodb.net/?retryWrites=true&w=majority'

let db

const registrationSchema = new mongoose.Schema({
    title : String,
    author : String,
    domain : String,
    expectedAmount :Number,
    collectedAmount : Number,
    walletID : String
})

const getDB = async () =>{
    return db ? db : await connectDB(url)
}

const getRegistrationModel = async () =>{
    const DB = await getDB();
    return DB.model("registrationInfo",registrationSchema)
}

module.exports = {getRegistrationModel}