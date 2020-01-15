const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASSWORD }@cluster0-ovbaw.mongodb.net/${ process.env.DB_NAME }?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening at port: ${ process.env.SERVER_PORT }`);
});