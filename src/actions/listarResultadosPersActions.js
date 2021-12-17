import { collection,getDocs} from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { types } from "../types/types";


export const listarResultadosPersActions = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "personalidadresultados"));
        const respuesta = [];
        querySnapshot.forEach((doc) => {
            respuesta.push({
                ...doc.data()
            })
        });
        dispatch(listarPersonalidadRespuesta(respuesta));
    }
}

export const listarPersonalidadRespuesta = (resultado) => {
    return {
        type: types.listarResultadosPers,
        payload: resultado
    }
}