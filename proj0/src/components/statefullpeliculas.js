import React, { Component } from 'react';
import Pelicula from './statefullpelicula';

class Peliculas extends Component{

    state = {
        peliculas:[
            {titulo:'El Padrino 1', imagen:'https://www.ecartelera.com/carteles/fondos/2500/2521-n.jpg'},
            {titulo:'El retorno del rey', imagen:'https://www.ecartelera.com/carteles/fondos/2600/2650-n.jpg'},
            {titulo:'La vida es bella', imagen:'https://www.ecartelera.com/carteles/fondos/2600/2611-n.jpg'},
            {titulo:'Los vengaludos0', imagen:'https://www.ecartelera.com/carteles/fondos/3900/3977-n.jpg'}
        ]
    }

    render(){
        return(

            <div className="borde-rojo padd10">
            <h3>Soy el componente Peliculas </h3>
            <h6>(con estado) y extends</h6>
            <p>un h3 y un p y estas props</p>
            {
                    this.state.peliculas.map((pelicula,i)=>{
                        return(
                            <Pelicula 
                                key={i} 
                                pelicula={pelicula}
                            />
                        )
                    })
            }

        </div>
            
        )
    }
}

export default Peliculas