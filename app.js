const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const app = express();
const port = process.env.puerto;
// servir contenido estatico
app.use(express.static('public'));


// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });
// app.get('/', function (req, res) {
//     res.send('Hello World')
// })


app.get('/hola-mundo', function (req, res) {
    res.send('hola mundo en su respectiva ruta')
});



app.get('/home', function (req, res) {
    // res.sendFile(__dirname + '/public/home.html')
    res.render('home.hbs', {
        nombre: 'Cristian Casas',
        titulo: 'Node js Developer'
    });
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'Cristian Casas',
        titulo: 'Node js Developer'
    });
});

app.get('/generic', (req, res) => {
    // res.sendFile(__dirname+ '/public/generic.html')
    res.render('generic.hbs', {
        nombre: 'Cristian Casas',
        titulo: 'Node js Developer'
    });
});

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements.hbs', {
        nombre: 'Cristian Casas',
        titulo: 'Node js Developer'
    });
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html');
});



// app.get('/visitrack', function(req, res){
//     res.send("esta es la ruta de visitrack")
// });


// app.get('/cristian', (req,res) => {
//     res.send("esta es la ruta de cristian")
// });

// app.get('/emmanuel',(request, response) =>{
//     response.send("esta es la ruta de emmaanuel")
// })
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})