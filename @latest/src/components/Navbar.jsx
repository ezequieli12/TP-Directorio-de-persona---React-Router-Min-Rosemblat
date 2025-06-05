import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav >
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/estadisticas">Estadísticas</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  )
}
