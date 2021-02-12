import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import{ NavLink } from 'react-router-dom';

class Header extends Component{
    
    render(){
        return(

            <div className="borde-rojo padd10">
                <div className="center content-nav">
                    <div id="brand-wrapper">
                        <img src={logo} className="app-logo" alt="logo" />
                        <span id="brand">Header <strong>H</strong></span>
                    </div>

                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active-link">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cb1" activeClassName="active-link">Link1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cb2" activeClassName="active-link">Link2</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pagina1" activeClassName="active-link">Link3</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/nav" activeClassName="active-link">Link3</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="cleaner"></div>
                </div>
            </div>

            
        )
    }

}

export default Header