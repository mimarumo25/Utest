import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function Validacionradio() {
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
