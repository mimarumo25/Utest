import { types } from "../types/types"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "@firebase/auth"
import { db } from "../firebase/firebase"
import { doc, setDoc } from "firebase/firestore"

export const register = (name, img, email, password, departamento) => {
    return {
        type: types.register,
        payload: {
            name, 
            img,
            email,
            password, 
            departamento
        }
    }
}

export const registerEmailPassword = (name, file,email, password, departamento) =>{
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password, file)
        .then(async({user})=>{
            await updateProfile(auth.currentUser, {displayName: name, photoURL:file})
            const docuRef = doc(db, `usuarios/${user.uid}`)
            setDoc(docuRef,{departamento: departamento})
            dispatch(register(user.displayName, user.photoURL, user.email, user.uid, departamento))
        })
    }
}