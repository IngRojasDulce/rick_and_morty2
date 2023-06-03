const axios= require('axios');
const URL ="https://rickandmortyapi.com/api/character"

const getCharById= async(req, res)=>{
   
   try{
        const {id}= req.params;
        const {data} = await axios.get(`${URL}/${id}`)// se hace un get por default
    
            let character={
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin, // aqui se envia sin el origin .name xq estamos en  en back
                image: data.image,
                status: data.status
                 }// esta promesa crea un objeto con la respuesta que dio
                 return res.status(200).json(character);
    
    
                }
   
        
   // res.writeHead(200,{ 'Content-Type': 'application/json'} ).end
    //(JSON.stringify(character))// cambia ese obj a formato json
       
    
        return res.status(404).send('Not found');
    // aqui tiene diferente
    } catch(error)
    {res.status(500).send(error.message)}
    // .catch(error => res.writeHead(500,{'Content-Type': 'text/plain'})
    // .end(error.message))

    
};

module.exports = {
  getCharById,
};
