import { Form, Button } from "react-bootstrap";

function FormularioNumeros(props) {
    return (
        <Form onSubmit={props.onSumar}>
          <p>Ingrese primer valor:<input type="text" name="valor1" /></p>
          <p>Ingrese segundo valor:<input type="text" name="valor2" /></p>
          <Button type="submit" value="Sumar">Sumar</Button> 
        </Form>
        );
}

export default FormularioNumeros;