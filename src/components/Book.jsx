import { useNavigate } from "react-router-dom";

const Book = ({ book, handleRemoveBook }) => {

  const navegacion = useNavigate();
  const { id, name, autor, precio, date } = book;

  return (
    <div className="book">
      <h2>{ name }</h2>
      <div className="bookDetail">
        <p>Autor: { autor }</p>
        <p>Precio: ${ precio }</p>
        <p>Fecha: { new Date(date).toDateString() }</p>
      </div>
      <div className="buttons">
        <button onClick={() => navegacion(`/edit/${id}`)} className="btnForm">Editar</button>
        <button onClick={() => handleRemoveBook(id)} className="btnForm">Borrar</button>
      </div>
    </div>
  )
}

export default Book