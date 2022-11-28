import { NavLink } from "react-router-dom"


const Header = () => {

  const navegacion = [
    {path: '/', name: 'Lista de Libros'},
    {path: '/add', name: 'Agregar Libro'},
  ]

  return (
    <header>
      <h1>Administrador de Libros</h1>
      <nav>
        {navegacion.map( nav => (
          <NavLink
            key={nav.path}
            to={nav.path}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header