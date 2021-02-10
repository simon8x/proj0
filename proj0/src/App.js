import logo from './logo.svg';
import './App.css';
import ComponenteBloque1 from './components/componentebloque1';
import ComponenteBloque2 from './components/componentebloque2';
import ComponenteBloque3 from './components/componentebloque3';
import Stateless1 from './components/stateless1';
import Statefullcontador from './components/statefullcontador';
import Peliculas from './components/statefullpeliculas';
import PeliculasCE from './components/statefullpeliculasCambioEstado';
import PeliculasFav from './components/statefullpeliculasFav';
import './assets/css/estilos.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
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

  );
}

export default App;
