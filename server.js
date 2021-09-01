require('dotenv').config();
var express = require('express');
var helmet = require('helmet');
var cors = require('cors')
var path = require('path');
var logger = require('morgan');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var contactsRouter = require('./routes/contact');


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/contacts/api', contactsRouter);


app.use(express.static(path.join(__dirname, 'public')));



app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.get('/api/.',(req,res)=>
{

});

/* app.get('/*',(req,res)=>{
    res.send('Hello from somewhere else')
}); */

app.listen(process.env.HOST_PORT, ()=>
{
    console.log("listening at http://"+ process.env.HOST_NAME +":"+ process.env.HOST_PORT);
});
