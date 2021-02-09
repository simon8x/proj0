import React from 'react';
export default function(props){

    var date = "new Date()";
    var fecha = date + 0;
    return(
        <div className="borde-rojo padd10 col2p">
            <h3>Soy el bloque stateless1 </h3>
            <h6>(sin estado) y generado a partir de función</h6>
            <p>un h3 y un p y estas props</p>
            <p className="borde-rojo padd10">Propiedad Nombre: {props.nombre} </p>
            <p className="borde-rojo padd10">Profesión: {props.profesion} </p>
            <p className="borde-rojo padd10">Date: {date} </p>
            <p className="borde-rojo padd10">Date: {fecha} </p>
        </div>
    )
}