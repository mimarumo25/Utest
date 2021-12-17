import { types } from "../types/types";

export const resultListarInteligenciaReducer = (state = {}, action) => {
    switch (action.type) {
        case types.listarResultadosInte:
            return {
                resultado: action.payload
            }
       
        default:
            return state;
    }
}