import { collection,getDocs} from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { types } from "../types/types";


export const listarTestPersonalidad = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "testpersonalidad"));
        const questions = [];
        querySnapshot.forEach((doc) => {
            questions.push({
                ...doc.data()
            })
        });
        dispatch(listarPersonalidad(questions));
    }
}

export const listarPersonalidad = (preguntas) => {
    return {
        type: types.listarPersonalidad,
        payload: preguntas
    }
}