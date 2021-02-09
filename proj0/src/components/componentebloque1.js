import React, { Component } from 'react';

class ComponenteBloque1 extends Component{
    render(){
        return(
            <div className="borde-rojo padd10 col2p">
                <h3>Soy el bloque 1 </h3>
                <h6>(sin estado) y generado a partir de clase</h6>
                <p>un h3 y un p y estas props</p>
                <p className="borde-rojo padd10">Propiedad Nombre: {this.props.nombre} </p>
                <p className="borde-rojo padd10">Profesión: {this.props.profesion} </p>
            </div>

        )
    }
}

export default ComponenteBloque1