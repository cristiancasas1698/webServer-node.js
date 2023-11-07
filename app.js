const express = require('express')
const app = express()
const port = 8080;
// servir contenido estatico
app.use(express.static('public'));



// app.get('/', function (req, res) {
//     res.send('Hello World')
// })


app.get('/hola-mundo', function (req, res) {
    res.send('hola mundo en su respectiva ruta')
});



app.get('/home', function (req, res) {
    res.sendFile(__dirname+ '/public/home.html')
});

app.get('/generic', function (req, res) {
    res.sendFile(__dirname+ '/public/generic.html')
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname+ '/public/elements.html')
});


app.get('*', function (req, res) {
    res.sendFile(__dirname +'/public/back/404.html');
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
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})