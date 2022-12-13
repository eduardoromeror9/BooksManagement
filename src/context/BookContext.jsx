import { createContext } from "react"
import UseLocalStorage from "../hooks/UseLocalStorage";


export const BookContext = createContext();

const BookProvider = ({ children }) => {

  const [ books, setBooks ] = UseLocalStorage('books', []);
  const value = { books, setBooks };

  return (
    <BookContext.Provider value={ value }>
      { children }    
    </BookContext.Provider>
  )
}

export default BookProvider