// import http from 'http'
const http = require('http');



const server = http.createServer((request, response) => {
    // response.write("hola mundo")
    // console.log("request --> ", request);

    // const persona = {
    //     id: 2,
    //     nombre: 'cristian'
    // }
    // response.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // response.writeHead(200,{'Content-Type': 'application/csv'});
    // response.write('id, nombre');
    // response.write('1, cristian')
    // response.write('2, maria')
    // response.write('3, fernanda')


    response.write("hola mundo")
    response.end()

}).listen(8080);

console.log("escuchando en el puerto 8080");




