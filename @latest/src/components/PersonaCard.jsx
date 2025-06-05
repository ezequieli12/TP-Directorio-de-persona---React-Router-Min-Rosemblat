import { useNavigate } from 'react-router-dom'

export default function PersonaCard({ persona }) {
  const navigate = useNavigate()
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      <h3>{persona.nombre}</h3>
      <p>Edad: {persona.edad}</p>
      <button onClick={() => navigate(`/persona/${persona.id}`)}>Ver más</button>
    </div>
  )
}
