import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ background: '#eee', padding: '1rem', display: 'flex', gap: '1rem' }}>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/estadisticas">Estadísticas</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  )
}
