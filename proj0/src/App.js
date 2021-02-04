import logo from './logo.svg';
import './App.css';
import ComponenteBloque1 from './components/componentebloque1';
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
      <ComponenteBloque1/>
    </div>
  );
}

export default App;
