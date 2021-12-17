import { collection,getDocs} from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { types } from "../types/types";


export const listarResultadosInteActions = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "inteligenciamultipleresultados"));
        const respuesta = [];
        querySnapshot.forEach((doc) => {
            respuesta.push({
                ...doc.data()
            })
        });
        dispatch(listarInteligenciaRespuesta(respuesta));
    }
}

export const listarInteligenciaRespuesta = (resultado) => {
    return {
        type: types.listarResultadosInte,
        payload: resultado
    }
}