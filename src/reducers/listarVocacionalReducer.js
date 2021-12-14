import { types } from "../types/types";


const initialState = {
    preguntas: [],
    
}


export const listarVocacionalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.listarVocacional:
            return {
                preguntas: [...state.preguntas, action.payload]
            }
       
        default:
            return state;
    }
}