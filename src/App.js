import logo from './logo.svg';
import './App.css';
import Contador from './Componentes/Contador.js';
import ListaNombres from './Componentes/ListaNombres.js';


function App() {
  const fichaMedica = {grupoSanguineo: "H+", alergia: "Ninguna"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaNombres></ListaNombres>
      </header>
    </div>
  );
}

export default App;
