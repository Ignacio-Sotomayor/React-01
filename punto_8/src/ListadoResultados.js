import { ListGroup, ListGroupItem } from "react-bootstrap";

function ListadoResultados(props) {
  return (
    <ListGroup >
      {props.resultados.map((elemento) => 
        <ListGroup.Item variant="info">La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default ListadoResultados;