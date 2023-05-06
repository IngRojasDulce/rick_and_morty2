import style from './Componente/Componente.module.css'
export default function Card({id, name,status, species , gender , image, origin,onClose}) {
   return (
      <div className = {style.imagenfondo}>
         
           <button className={style.fondoClaro} onClick={onClose}><h2></h2>Cerrar<h2/></button>
         
         <h2> Name :{name}</h2>
         <h2>Species : {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2> Status: {status}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='' /> 
      
      </div>
   );
}
