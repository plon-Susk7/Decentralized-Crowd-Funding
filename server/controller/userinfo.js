const {getInfoModel} = require('../models/userinfo')


const createAccount = async(req,res) => {
    let infoModel = await getInfoModel();
    console.log(req.body)
    const request = infoModel.create(req.body)
    request.then((result)=>{
        res.status(201).send(result)
    })
    .catch((err)=>console.log(err))
}


const getAccounts = async(req,res)=>{
    let infoModel = await getInfoModel();
    const request = infoModel.find();

    request.then((result)=>{
        res.status(201).send(result)
    })
    .catch((err)=>console.log(err))
}

module.exports = {createAccount,getAccounts}