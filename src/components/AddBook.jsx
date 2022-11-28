import BookForm from "./form/BookForm"

const AddBook = () => {

  const handleOnSubmit = ( book ) => {
    console.log(book)
  }

  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default AddBook