const Validation = (userData) =>{// no va en mayuscula por que es una funcion comun y corriente
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'Email no valido'
    }
    if(!userData.email){// email vacio?
        errors.email = 'ingrese email'
    }
    if(userData.email.length >35){
        errors.email = 'Supera 35 Caracteres'
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = ' ingrese al menos un munero'

    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = ' La contraseña debe tener entre 6 y 10 caracteres'
    }
    return errors;
}
export default Validation;