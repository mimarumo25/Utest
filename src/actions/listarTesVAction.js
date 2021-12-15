
import { collection,getDocs} from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { types } from "../types/types";


export const listarPreguntasTestVocacional = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "testvocacional"));
        const questions = [];
        querySnapshot.forEach((doc) => {
            questions.push({
                ...doc.data()
            })
        });
        dispatch(listarVocacional(questions));
    }
}

export const listarVocacional = (preguntas) => {
    return {
        type: types.listarVocacional,
        payload: preguntas
    }
}