require('dotenv').config();
var express = require('express');
const helmet = require('helmet');
const cors = require('cors')

var app = express();


app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.listen(process.env.HOST_PORT, ()=>
{
    console.log("listening at http://"+ process.env.HOST_NAME +":"+ process.env.HOST_PORT);
});
