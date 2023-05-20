import { type } from "@testing-library/user-event/dist/type";
import { ADD_FAV, REMOVE_FAV } from "./action-types";
const initialState = {
    myFavorites : []


}
const reducer =(state = initialState, payload)=>{ // action es un objeto se puede hacer destructure
    switch (type){
       
        case ADD_FAV:
            return {
                ...state, myFavorites:  [...state.myFavorites, payload]   // MAP O FILTER PERO NO SE PUEDE PUSHEAR  
            }
        case REMOVE_FAV:
            return{
                ...state, 
                myFavorites : state.myFavorites.filter(fav => fav.id !== Number(payload)) //************* ID */ 
            }


        default: // siempre retorna lo mismo 
        return { ...state}
    }
}
export default reducer;