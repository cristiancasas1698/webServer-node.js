const express = require('express')
const app = express()
const port = 8080;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hola-mundo', function (req, res) {
    res.send('hola mundo en su respectiva ruta')
  });

  app.get('*', function (req, res) {
    res.send('404 | page no found')
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