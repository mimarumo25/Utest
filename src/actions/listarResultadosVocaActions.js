import { collection,getDocs} from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { types } from "../types/types";


export const listarResultadosVocaActions = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "profesionesporarea"));
        const respuesta = [];
        querySnapshot.forEach((doc) => {
            respuesta.push({
                ...doc.data()
            })
        });
        dispatch(listarVocacionalRespuesta(respuesta));
    }
}

export const listarVocacionalRespuesta = (resultado) => {
    return {
        type: types.listarResultadosVoca,
        payload: resultado
    }
}