import logo from './logo.svg';
import './App.css';

function mostrarTitulo(tit) {
  return (<h1>
    {tit}
  </h1>);
}

function App() {
  
  const año = 2023
    
  return (
    <div>
      {mostrarTitulo('Hola')}
      <h></h>
      <p> Estamos en el año {año}</p>
    </div>
  );
}

export default App;
