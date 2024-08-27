const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));//sara static file milega public ke andar
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("index");
});

app.get('/profile/:username', function(req, res){
    res.send("chal mere ghar");
})
app.listen(3000,function(){
    console.log("its running");
});