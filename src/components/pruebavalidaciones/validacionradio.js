import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { collection, getDoc,  getDocs, doc, getFirestore } from "firebase/firestore";
import { db, app } from "../../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firestore = getFirestore(app)


export default function Validacionradio() {
  const [user, setUser] = useState(null);
  console.log(user)

  // const [datos, setDatos] = useState([]);

  async function getDepartamento(uid){
    console.log(uid)
    const docuRef = doc(firestore, `usuarios/${uid}`)
    const docuCifrada = await getDoc(docuRef)
    const infoFinal = docuCifrada.data().departamento
    return infoFinal;
  }


  const setUserWithFirebase = (usuarioFirebase) => {
    getDepartamento(usuarioFirebase.uid).then((departamento)=>{
      console.log(departamento)
      const userData = {
        uid: usuarioFirebase.uid,
        departamento: departamento
      }
      setUser(userData)
      console.log("userData final", userData)
      
    });
  }


  const auth = getAuth()
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {

    if(!user){
      setUserWithFirebase(usuarioFirebase)
    }
     
    }else{
      setUser(null)
    }
    
  });


  // useEffect(() => {
  //   obtenerDatos();
  // }, []);

  // const obtenerDatos = async () => {
  //   const querySnapshot = await getDocs(collection(db, "usuarios"));
  //   const response = [];
  //   querySnapshot.forEach((doc) => {
        
  //     response.push({ id: doc.id, ...doc.data() });
      
  //     //   console.log(`${doc.id} => ${doc.data()}`);
  //     //console.log(doc.data());
  //   });
  //   setDatos(response);
  // };
  return (
    <Formik
      initialValues={{
        picked: "",
      }}

       validate={(valores)=>{
            let errores ={}
           
            if(!valores.picked){
                errores.picked = 'Por selecciona una opción'
            }        
             return errores;
        }}

      onSubmit={ (values) => {
        alert(values)
      }}

      
    >
      {({ values, errors, touched }) => (
        <Form>
          <div id="radioGroup" >Validacion</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            {touched.picked && errors.picked && <div className="error">{errors.picked}</div>}
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            <div>Picked: {values.picked}</div>
            {touched.picked && errors.picked && <div className="error">{errors.picked}</div>}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
