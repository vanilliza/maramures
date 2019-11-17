//jshint esversion:6
const express = require('express');
const app = express();
const path = require('path');
const VIEWS = path.join(__dirname, 'views');

app.use(express.static('scripts'));
app.use(express.static('images'));


app.get('/', function(req, res){
    res.sendFile('index.html',{root:VIEWS});

});


app.listen(3001, function(){
    console.log('server is running at port 3001');
});


