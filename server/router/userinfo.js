const express = require('express')
const router = express.Router()

const {createAccount,getAccounts} = require('../controller/userinfo')

router.post('/',createAccount)
router.get('/',getAccounts)

module.exports = router