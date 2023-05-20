import axios from "axios";
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";

const Detail = ()=>{
   const { id } = useParams(); // aqui extraemos el id de la ruta de direccion
    
    const [character, setCharacter] = useState({});


    useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(response => response.data)
        .then((data) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con eseccccccccccccc ID');
         }
      });
      return setCharacter({});
   }, [id]);

   return(
      <div>
          <h2>{character?.name}</h2>
          <h2>{character?.status}</h2>
          <h2>{character?.species}</h2>
          <h2>{character?.gender}</h2>
          <h2>{character?.origin?.name}</h2>
          <img src={character?.image} alt={character?.name} />
      </div>
  )
}

export default Detail;