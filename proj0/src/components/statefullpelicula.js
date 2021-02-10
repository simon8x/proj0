import React, { Component } from 'react';

class Pelicula extends Component{
    render(){
        const{titulo, imagen} = this.props.pelicula;

        return(
            <article>
                <div className="col28">
                    <img className="cover-peli" src={imagen} alt={titulo} />
                </div>
                <div className="col82">
                    <span>{titulo}</span>  
                </div>
                <div className="cleaner"></div>
            </article>
        );
    }
}

export default Pelicula;