import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

const ListBook = () => {

  const { books, setBooks } = useContext(BookContext);
  console.log(books);

  return (
    <div className="listBook">
      { books.length ? books.map( book => ( 
        <Book book={ book } key={ book.id } />
      )) : (
        <p className="noData">No hay libros disponibles, agrega algunos!</p> 
      )}
    </div>
  )
}

export default ListBook