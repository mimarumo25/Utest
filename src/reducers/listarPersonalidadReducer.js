import { types } from "../types/types";


const initialState = {
    preguntas: [],
    
}


export const listarPersonalidadReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.listarPersonalidad:
            return {
                preguntas: [...state.preguntas, action.payload]
            }
       
        default:
            return state;
    }
}