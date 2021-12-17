import { types } from "../types/types";

export const resulListarVocacionalReducer = (state = {}, action) => {
    switch (action.type) {
        case types.listarResultadosVoca:
            return {
                resultado: action.payload
            }
       
        default:
            return state;
    }
}