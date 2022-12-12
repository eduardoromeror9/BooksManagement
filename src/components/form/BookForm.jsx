import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const BookForm = ({ book, handleSubmit }) => {
  const [ bookState, setBookState ] = useState({
    name: book ? book.name : '',
    autor: book ? book.autor : '',
    precio: book ? book.precio : '',
  })

  
  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit({
      id: uuidv4(),
      date: new Date(),
      ...bookState
    })
    setBookState({ name: '', autor: '', precio: '' }) // se limpia el formulario
  }
  
  const renderInputField = (label, placeholder, name) => {
    return (
      <div className="inputField">
        <label>{label}</label>
        <input value={ bookState[name] } onChange={ handleChange } name={name} type="text" placeholder={placeholder} />
      </div>
    )
  }

  const disableSubmit = !bookState.name || !bookState.autor || !bookState.precio;

  return (
    <form onSubmit={ onSubmit } className="form">
      { renderInputField('Titulo del Libro', 'Ingresa el nombre del libro...', 'name') }
      { renderInputField('Autor del Libro',  'Ingresa el nombre del autor...', 'autor') }
      { renderInputField('Precio del Libro', 'Ingresa el precio del libro...', 'precio') }
      <button className="btnForm" type="submit" disabled={ disableSubmit }>{ book ? 'Actualizar' :  'Submit'}</button>
    </form>
  )
}

export default BookForm