import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddBook from './components/AddBook'
import Header from './components/Header'
import ListBook from './components/ListBook'

function App() {

  return (
    <div className="container">      
      <Header />
      <Routes>
        <Route path="/" element={<ListBook />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </div>
  )
}

export default App
