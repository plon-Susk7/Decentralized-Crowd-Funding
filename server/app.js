const express = require('express')
const app = express()
const cors = require('cors');
const accountDetails = require('./router/registration')
const userDetails = require('./router/userinfo')

const port = process.env.PORT || 5000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(express.static("./public"))
app.use('/regDetails',accountDetails)
app.use('/userDetails',userDetails)



const start = async()=>{
    try{
        app.listen(port,console.log("Server is listening..."))
    }catch(err){
        console.log(err);
    }
}
start()