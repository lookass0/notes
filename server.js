require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const categories = require('./router/categories');
const notes = require('./router/notes');
const app = express();

app.listen(5000);
app.use(parser.json());
app.use('/categories', categories);
app.use('/notes', notes);
mongoose.connect(process.env.MONGOOSE_CONN, 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});