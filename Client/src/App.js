import './App.css';
import Cards from './components/Cards/Cards'
import Favorites from './components/Favorites/Favorites';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import  { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);

   const [access, setAccess]= useState(false);
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
   useEffect(() => {
      !access && navigate('/')
   }, [access])
   

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({data}) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
    const onClose = (id)=>{
      const characterFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(characterFiltered)// setea el resultado en tu estado local characters
    }
//como dice que tiene que aparecer en todas las rutas lo dejo por encima de los routers
   return (
      <div className='App'>
         {
            location.pathname !=='/'?<Nav onSearch={onSearch} />:null // uso el useLocation para que en el formulario se muestre solamente en home 
         }
         
         <Routes>
            <Route path='/' element={<Form login = {login}/>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose ={onClose}/>} ></Route>

            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element ={<Detail/>}></Route>
            <Route path='/favorites' element= {<Favorites/>}> </Route>
        </Routes>
      </div>
   );
}

export default App;
