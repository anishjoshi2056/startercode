const express = require('express');
const homepageRoute = express.Router();


homepageRoute.get('/',(req,res)=> {
    res.render('homepage')
})

module.exports = homepageRoute