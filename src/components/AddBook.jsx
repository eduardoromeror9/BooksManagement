import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext"
import BookForm from "./form/BookForm"

const AddBook = () => {

  const navegacion = useNavigate();
  const { books, setBooks } = useContext(BookContext);

  const handleOnSubmit = ( book ) => {
    setBooks([ book, ...books ]) // se agrega el nuevo libro al principio del arreglo
    navegacion('/')
  }

  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default AddBook