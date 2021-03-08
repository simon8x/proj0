import React, { Component } from 'react';
import Slider from './slider';
import Sidebar from './sidebar';

class Blog extends Component{

    render(){

        return(
            <div>
                <Slider 
                    title="Estamos en la Blog"
                    size="slider-small"
                />
                    
                
                <div className="contenido">
                    <h3 className="subheader">Últimos Artículos</h3>
                </div>

                <div className="aside">
                    <Sidebar
                    blog="true"
                    />
                </div>


            </div>
        )
    }
}

export default Blog