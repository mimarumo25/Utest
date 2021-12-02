import { types } from "../types/types";

export const registerReducer = (state={},action) =>{
    switch (action.type) {
        case types.register:
            
            return{
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            }
    
        default:
            return state
    }
}
