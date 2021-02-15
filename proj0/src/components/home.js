import React, { Component } from 'react';
import Slider from './slider';

class Home extends Component{

    render(){

        return(
            <div>
                <Slider 
                    title="Estamos en la home"
                    btntxt="Ver Más"
                />
                    
                
                <div className="contenido">
                    <h3 className="subheader">Últimos Artículos</h3>
                </div>
            </div>
        )
    }
}

export default Home