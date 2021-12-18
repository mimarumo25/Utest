import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth"
import Swal from "sweetalert2"
import { facebook, google } from "../firebase/firebase"
import { types } from "../types/types"

export const login = (id, displayname, image) =>{
    
    return {
        type: types.login,
        payload:{
            id,
            displayname,
            image
        }
        
    }
    
}

export const loginGoogle = () =>{
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth,google)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName, user.photoURL))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Inicio De Sesion Exitoso !!',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(e=>{
            console.log(e)
        })
    }
}
export const loginFacebok = () =>{
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth,facebook)
        .then(({user})=>{
            
            dispatch(login(user.uid, user.displayName, user.photoURL))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Inicio De Sesion Exitoso !!',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(e=>{
            console.log(e)
        })
    }
}

export const loginEmailPassword = (email,password,image) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password,image)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName, user.photoURL))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Inicio De Sesion Exitoso !!',
                showConfirmButton: false,
                timer: 1500
              })
            
        })
        .catch(error => {
            console.log(error)
            console.log('El usuario no existe')
        })
    }
}

export const logoutSincrono = () => {
    return{
        type: types.logout,
    }
 }
export const logout = () => {

    return(dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logoutSincrono())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

