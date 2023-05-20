import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id , setId] = useState('');
   const handleChange = (event) => {// aqui voy a estar modificando el valor del estado
      setId(event.target.value) // aqui con event.target.value recibe un input 
   }
   return (
      <div>
         <input type='search' onChange={ handleChange}  value={id}/> 
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
