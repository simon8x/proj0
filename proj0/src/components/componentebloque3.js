import React from 'react';

export default propiedades =>(
    <div className="borde-rojo padd10 col2p">
        <h3>Soy el bloque 3 </h3>
        <h6>(sin estado) y generado a partir de función =></h6>
        <p>un h3 y un p y estas propiedades</p>
        <p className="borde-rojo padd10">Propiedad Nombre: {propiedades.nombre} </p>
        <p className="borde-rojo padd10">Profesión: {propiedades.profesion} </p>
    </div>
)