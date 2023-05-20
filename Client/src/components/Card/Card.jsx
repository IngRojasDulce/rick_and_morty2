
import style from '../Componente/Componente.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState,  useEffect} from 'react';

function Card({id, name,status, species , gender , image, origin,onClose, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] =useState(false);

   const handleFavorite =()=>{
      if (isFav){
          setIsFav(false);
          removeFav(id); // aqui envio el id  que esta llegando de props aqui al removefav de return , este a su vez
      // lo despacha y lo envia por props al removefav de actions.js 
      }
      else {
         setIsFav (true);
         addFav ({myFavorites, id, name,status, species , gender , image, origin})
      }
   }

   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className = {style.imagenfondo}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
           <button className={style.fondoClaro} onClick={() => onClose(id)}><h2>Cerrar</h2>
           </button>
         
         <Link to = {`/detail/${id}`}><h2> Name :{name}</h2></Link>
         <h2>Species : {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2> Status: {status}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='' /> 
      
      </div>
   );
}
const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites

   }
}
const mapDispatchToProps = (dispatch) =>{
   return{
      addFav:(character)=>{ dispatch(addFav(character))}, // character es igual {id, name,status, species , gender , image, origin}
      removeFav: (id)=>{dispatch(removeFav(id ))}
      }
   
}
export default connect( 
   mapStateToProps,
   mapDispatchToProps
)(Card);