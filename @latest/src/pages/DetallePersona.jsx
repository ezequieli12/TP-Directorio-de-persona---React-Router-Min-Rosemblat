import { useParams } from 'react-router-dom'
import personas from '../data/personas.json'

export default function DetallePersona() {
  const { id } = useParams()
  const persona = personas.find(p => p.id.toString() === id)

  if (!persona) return <p>Persona no encontrada 😕</p>

  const mensaje = persona.edad >= 18 ? 'Mayor de edad' : 'Menor de edad'

  return (
    <div>
      <h2>{persona.nombre}</h2>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
      <p><strong>{mensaje}</strong></p>
    </div>
  )
}
