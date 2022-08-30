const express = require('express')
const mongoose = require('mongoose')

const bodyParser =  require('body-parser')

const port = (process.env.PORT || 1314)

const app = express()

setInterval(() => {
    console.log('hello')
}, 3000);

app.use(bodyParser.json())

app.listen(port,(req,res)=>{
    console.log("Server working at "+port);
})