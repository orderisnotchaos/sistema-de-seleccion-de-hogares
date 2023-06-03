const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const CORSpolicy = require('./middlewares/CORSpolicy');

const APIRouter = require('./routes/APIRouter');

const mainRouter= require('./routes/mainRouter');

const methodOverride = require('method-override');

const notifications = require('./middlewares/notifications');



app.use(bodyParser.urlencoded({extended: true})); 

app.use( express.static (__dirname + "\\public"));

app.use(bodyParser.json());
app.use(CORSpolicy);

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.use('/api', APIRouter);

app.listen(3001, () => {
    console.log('Server is running on port 3001');

});