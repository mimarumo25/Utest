import { types } from "../types/types";


const initialState = {
    resultado: [],
    
}


export const resulListarVocacionalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.listarResultadosVoca:
            return {
                preguntas: [...state.resultado, action.payload]
            }
       
        default:
            return state;
    }
}