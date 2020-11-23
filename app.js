const bodyParser = require('body-parser');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

//Static Files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + "public/css"));
app.use('/images',express.static(__dirname + "public/images"));
app.use('/js',express.static(__dirname + "public/js"));

//Templating and view engine 
app.set('views','./src/views');
app.set('view engine','ejs');

//Enabling body-parser
app.use(bodyParser.urlencoded({extended:true}));

//Routes 



//

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})