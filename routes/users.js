const express = require('express');
const router = express.Router();

//parse incoming json to native js object
router.use(express.json());

//takes url-encoded strings and decodes them for use
router.use(express.urlencoded({extended: true}));

//define a home route
router.get('/home', (req, res) =>{
    res.render('home');
});


//exports the router object 
module.exports = router;