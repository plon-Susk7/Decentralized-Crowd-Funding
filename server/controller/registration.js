const {getRegistrationModel} = require('../models/registration')


const createAccount = async(req,res) => {
    let regModel = await getRegistrationModel();
    console.log(req.body)
    const request = regModel.create(req.body)
    request.then((result)=>{
        res.status(201).send(result)
    })
    .catch((err)=>console.log(err))
}


const getAccounts = async(req,res)=>{
    let regModel = await getRegistrationModel();
    const request = regModel.find();

    request.then((result)=>{
        res.status(201).send(result)
    })
    .catch((err)=>console.log(err))
}

module.exports = {createAccount,getAccounts}