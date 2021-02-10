import React, { Component } from 'react';

class PeliculaFav extends Component{
    
    marcar = () =>{
        this.props.marcarFavorita(this.props.pelicula);
    }

    render(){
        
        const {titulo, imagen} = this.props.pelicula;
        
        return(
            <article>
                <div className="col28">
                    <img className="cover-peli" src={imagen} alt={titulo} />
                </div>
                <div className="col62">
                    <span>{titulo}</span>  
                </div>
                <div className="col28">
                    <button onClick={this.marcar}>
                        Fav
                    </button>
                </div>
                <div className="cleaner"></div>
            </article>
        );
    }
}

export default PeliculaFav;