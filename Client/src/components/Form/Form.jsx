import { useState } from "react";
import Validation from "../Validation/Validation";

const Form = ({login}) =>{
    const [errors, setErros] = useState({}) 
    const [userData, setUserData]= useState({
        email: '',
        password: ''
    });
    const handleChange = (event) => {
         // aqui uso braker para poder utilizar esta propiedad en todos los imput
    // es por esa razon que llamo esta funcion en los input con la propiedad onChange. aqui se termina de bindear
        setUserData({
        ...userData, [event.target.name]: event.target.value

    })
    setErros(Validation({
        ...userData, [event.target.name]: event.target.value
    }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()// se usa el preventDefaul  hace que la pagina no se esste recargando cuando le doy al boton
        login(userData);
    }
    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value ={userData.email}
             onChange={handleChange}></input>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor= "password">Password</label>
            <input type="text" name="password" value = {userData.password} 
            onChange={handleChange}/>
             {errors.password && <p>{errors.password}</p>}
            <button>Submit</button>
        </form>
    )
}
export default Form;