const express = require('express');

const app = express();


const CORSpolicy = require('./middlewares/CORSpolicy');

const APIRouter = require('./routes/APIRouter');

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
app.use(CORSpolicy);


app.use('/api', APIRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});