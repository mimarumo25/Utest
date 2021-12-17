import { types } from "../types/types";





export const resultListarPersonalidadReducer = (state ={}, action) => {
    switch (action.type) {
        case types.listarResultadosPers:
            return {
                resultado: action.payload
            }
       
        default:
            return state;
    }
}