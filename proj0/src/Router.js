import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import ComponenteBloque1 from './components/componentebloque1';
//import ComponenteBloque2 from './components/componentebloque2';
//import PeliculasCE from './components/statefullpeliculasCambioEstado';
import Error from './components/error';

import Header from './components/header';
import ComponenteBloque1 from './components/componentebloque1';
import ComponenteBloque2 from './components/componentebloque2';
import ComponenteBloque3 from './components/componentebloque3';
import Stateless1 from './components/stateless1';
import Statefullcontador from './components/statefullcontador';
import Peliculas from './components/statefullpeliculas';
import PeliculasCE from './components/statefullpeliculasCambioEstado';
import PeliculasFav from './components/statefullpeliculasFav';

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Header />

                <div className="contenido">

                {/*configurar rutas y páginas*/}
                <Switch>
                    <Route exact path ="/" component={PeliculasCE} />
                    <Route exact path ="/cb1" component={ComponenteBloque1} />
                    <Route exact path ="/cb2" component={ComponenteBloque2} />
                    <Route exact path ="/pagina1" render ={() => (
                        <h1>Hola desde la ruta página 1</h1>
                    )}/>
                    
                    <Route exact path="/pruebas/:id" render={ (props) => {
                    
                        var id = props.match.params.id;

                        return (
                            <div className="borde-rojo padd10">
                                <h1>página de pruebas</h1>
                                <h6>parametros desde url</h6>
                                <h2>{id}</h2>
                            </div>
                        );
                    }

                    }/>

                    <Route component={Error} />
                </Switch>

                </div>

                <div className="aside">
                

                <div className="cleaner"></div><div className="linea-horizontal m2px"></div>
                <ComponenteBloque1 nombre="Miguel Angel Buo" profesion="pintor"/>
                <ComponenteBloque2 nombre="Raphael Sanzio" profesion="pintor"/>
                <ComponenteBloque3 nombre="Leonardo Davinci" profesion="pintor"/>
                <div className="cleaner"></div><div className="linea-horizontal m2px"></div>
                <Stateless1 nombre="Raphael Sanzio" profesion="pintor"/>
                <Statefullcontador/>
                <Peliculas/>
                <div className="cleaner"></div><div className="linea-horizontal m2px"></div>
                <PeliculasCE/>
                <PeliculasFav/>

                </div>

            </BrowserRouter>
        )

    }
}

export default Router;