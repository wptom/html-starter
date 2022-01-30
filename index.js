const express = require('express');
const path = require('path');

const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App listening on port 3000');
});

app.get('/',(req,res) => {
    // res.render('public/index.html');
    res.sendFile(path.resolve(__dirname,'public/index.html'));
});

app.get('/about',(req,res) => {
    //res.render('public/about.html');
    res.sendFile(path.resolve(__dirname,'public/about.html'));
});
/*app.get('/about',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public/pages/about.html'))
});*/

/*app.get('/contact',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public/pages/contact.html'))
});

app.get('/post',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public/pages/post.html'))
});*/
