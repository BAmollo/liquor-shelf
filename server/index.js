require('dotenv').config();
const massive = require('massive');
const express = require('express');
const controller = require('./controller');


//initialize variables stored in .env
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

//Top-level middleware
const app = express();

// app.use( express.static( `${__dirname}/../build` ) );

//to make sure req.body exists
app.use(express.json() );

//connecting server to database using massive
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("db connected");
}).catch(console.log)


const db = app.get('db')

//======medication endpoints=====
app.post('/api/product', controller.addProduct)
// app.get('/api/product/:id', controller.getProduct)
// app.put('/api/product/:id', controller.editProduct)
// app.delete('/api/product/:id', controller.deleteProduct)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})