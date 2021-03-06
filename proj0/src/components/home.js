import React, { Component } from 'react';
import Slider from './slider';
import Sidebar from './sidebar';

class Home extends Component{

    render(){

        return(
            <div>
                <Slider 
                    title="Estamos en la home"
                    btntxt="Ver Más"
                    size="slider-big"
                />
                    
                
                <div className="contenido">
                    <h3 className="subheader">Últimos Artículos</h3>
                </div>

                <div className="aside">
                    <Sidebar/>
                </div>


            </div>
        )
    }
}

export default Home