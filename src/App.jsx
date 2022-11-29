import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddBook from './components/AddBook'
import Header from './components/Header'
import ListBook from './components/ListBook'
import BookProvider from './context/BookContext'

function App() {

  return (
    <div className="container">     
      <BookProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ListBook />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </BookProvider>

    </div>
  )
}

export default App
