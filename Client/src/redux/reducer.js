import { type } from "@testing-library/user-event/dist/type";
import { ADD_FAV, REMOVE_FAV } from "./action-types";
const initialState = {
    myFavorites : []


}
const reducer =(state = initialState, payload)=>{ // action es un objeto se puede hacer destructure
    switch (type){
       
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };

        default: // siempre retorna lo mismo 
        return { ...state}
    }
}
export default reducer;