require('dotenv').config();
var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var contactsRouter = require('./routes/contact');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/contacts', contactsRouter);


app.use(express.static(path.join(__dirname, 'public')));



app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.get('/api/.',(req,res)=>
{

});

 app.get('/*',(req,res)=>{
    res.send('Hello from somewhere else')
}); 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.d236u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
 mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: false,
        //useCreateIndex: true
    },
    (err) => {

        if(err)
        {
            console.log("Connection to MongoDB failed "+ JSON.stringify(err, undefined,2));
            return;
        }
        console.log('Successfully connected to MongoDB');
    }
); 



app.listen(process.env.HOST_PORT, ()=>
{
    console.log("listening at http://"+ process.env.HOST_NAME +":"+ process.env.HOST_PORT);
});
