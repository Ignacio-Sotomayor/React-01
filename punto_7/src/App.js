import ListadoResultados from "./ListadoResultados";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {

  const [operaciones, setOperacion] = useState([])

  function sumar(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.valor1.value, 10)
    const v2 = parseInt(event.target.valor2.value, 10)
    const suma = v1 + v2
    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2
    }
    setOperacion([nuevo, ...operaciones])
    event.target.valor1.value = ''
    event.target.valor2.value = ''
  }

  return (
    <Container>
      <div className="contenedor">
        <Form onSubmit={sumar} >
          <Form.Group id="1" >
          <p>Ingrese primer valor:<input type="text" name="valor1" /></p>
          <p>Ingrese segundo valor:<input type="text" name="valor2" /></p>
          </Form.Group>
          <Button variant="info" type="submit"  value="Sumar">Sumar</Button>{' '}
        </Form>
        <ListadoResultados resultados={operaciones} />
      </div>
    </Container>    
  );
}

export default App;
