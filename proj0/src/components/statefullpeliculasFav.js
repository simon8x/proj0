import React, { Component } from 'react';
import PeliculaFav from './statefullpeliculaFav';

class PeliculasCE extends Component{

    state = {
        peliculas:[
            {titulo:'El Padrino 1', imagen:'https://www.ecartelera.com/carteles/fondos/2500/2521-n.jpg'},
            {titulo:'El retorno del rey', imagen:'https://www.ecartelera.com/carteles/fondos/2600/2650-n.jpg'},
            {titulo:'La vida es bella', imagen:'https://www.ecartelera.com/carteles/fondos/2600/2611-n.jpg'},
            {titulo:'Los vengaludos0', imagen:'https://www.ecartelera.com/carteles/fondos/3900/3977-n.jpg'}
        ],
        favorita: {}
    }

    cambiarTitulo = () => {
        var { peliculas } = this.state;
                
        peliculas[0].titulo = "The Godfather";

        this.setState({
            peliculas : peliculas
        });
    }

    favorita = (pelicula) => {
        console.log("Favorita Marcada");
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        })
    }

    render(){
        return(

            <div className="borde-rojo padd10">
                <h3>Soy el componente PeliculasCE </h3>
                <h6>(con estado) y extends</h6>
                {this.state.favorita.titulo ?(
                    <p>                
                        <strong>La Favorita es: </strong>
                        <span> {this.state.favorita.titulo} </span>
                    </p>
                ) : (
                    <p>No hay favorita aún</p>
                )
                }
                <div>
                    <button onClick={this.cambiarTitulo}> traducir </button>
                </div>
                {
                        this.state.peliculas.map((pelicula,i)=>{
                            return(
                                <PeliculaFav 
                                    key={i} 
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                }

            </div>
            
        )
    }
}

export default PeliculasCE