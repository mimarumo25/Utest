import { types } from "../types/types";

export const categoriaReducer = (state={},action) => {
    switch (action.type) {
        
            case types.categoria:
            return{
                categoria:[ action.payload]
            }
            default:
                return state
    }
}