import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

const ListBook = () => {

  const { books, setBooks } = useContext(BookContext);

  const handleRemoveBook = ( id ) => {
    const librosFiltrados = books.filter( book => book.id !== id );
    setBooks(librosFiltrados)
  }


  return (
    <div className="listBook">
      { books.length ? books.map( book => ( 
        <Book book={ book } key={ book.id } handleRemoveBook={handleRemoveBook} />
      )) : (
        <p className="noData">No hay libros disponibles, agrega algunos!</p> 
      )}
    </div>
  )
}

export default ListBook