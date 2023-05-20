const axios= require('axios');

const getCharById= (res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)// se hace un get por default
    .then((res)=> res.data)
    .then((data)=>{
        let character={
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin, // aqui se envia sin el origin .name xq estamos en  en back
            image: data.image,
            status: data.status
        }// esta promesa crea un objeto con la respuesta que dio
    
    res.writeHead(200,{ 'Content-Type': 'application/json'} ).end
    (JSON.stringify(character))// cambia ese obj a formato json

    })
    .catch(error => res.writeHead(500,{'Content-Type': 'text/plain'})
    .end(error.message))
};

module.exports = {
    getCharById,
};