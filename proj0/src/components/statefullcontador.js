import React from 'react';

export default class Contador extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            contador:100
        };
    }
    

    incrementar(){
        this.setState({
            contador: (this.state.contador+1)
        });
    }

    decrementar(){
        this.setState({
            contador: (this.state.contador - 1)
        });
    }



    render(){
        return(
            <div className="borde-rojo padd10">
                <h3>Soy el bloque statefullcontador </h3>
                <h6>sumo y resto sin roncha</h6>
                <p>Cuenta actual = {this.state.contador}</p>
                <button onClick={this.incrementar.bind(this)}> + </button>
                <button onClick={this.decrementar.bind(this)}> - </button>
            </div>
        );
    }

}