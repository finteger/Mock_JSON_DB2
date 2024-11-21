const express = require('express');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
});