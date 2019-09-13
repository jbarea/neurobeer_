import React from 'react';
import '../css/form-errors.css';

export const FormErrors = ({formErrors}) => {
    return(
    <div className="form-errors">
        {Object.keys(formErrors).map((fieldName, i) => {
            //console.log("valor del indice de iteracion:"+i);
            //console.log("contenido de fieldName:"+fieldName);
            if(formErrors[fieldName].length > 0){
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>
    )
}