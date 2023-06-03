const express = require ('express');
const server = express();
const router = require('./routes/index');
const morgan= require('morgan');


server .use(express.json());
server.use(morgan('dev'));


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });



server.use('/rickandmorty', router);

server.listen(3001, ()=> console.log('Listering on port 3001'));



// const http = require('http');
// const characters = require('./utils/data');
// const {getCharById}= require ('./controllers/getCharById');

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split('/').at(-1);// filter devuelve un array el find

//         getCharById(res,Number(id));

//        // return res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(charactersFind))
//     }



    
// }).listen(3001, 'localhost');// lo ponemos a escuchar
