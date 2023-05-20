
const http = require('http');
const characters = require('./utils/data');
const {getCharById}= require ('./controllers/getCharById');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split('/').at(-1);// filter devuelve un array el find

        getCharById(res,Number(id));

       // return res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(charactersFind))
    }



    
}).listen(3001, 'localhost');// lo ponemos a escuchar
