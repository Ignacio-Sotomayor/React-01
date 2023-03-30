import { useState, useEffect } from 'react';
import CoordenadaFlecha from './CoordenadaFlecha';

function App() {

  const [texto, setTexto] = useState("")

  useEffect(() => {document.title = texto}, [texto])

  const [visible, setVisible] = useState(true)

  function ocultar() {
    setVisible(false)
  }

  function cambiar(e) {
    setTexto(e.target.value)
  }

  return (
    <div>
      <p><input type="text" onChange={cambiar} /></p>
      <p>{texto}</p>
    
      {visible ? <CoordenadaFlecha /> : <p>Se oculto la coordenada</p>}
      <button onClick={ocultar}>Ocultar</button>
    </div>
  );
}

export default App;
