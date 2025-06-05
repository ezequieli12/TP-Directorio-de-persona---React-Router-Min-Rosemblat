import { useEffect, useState } from 'react'
import PersonaCard from '../components/PersonaCard'
import personas from '../data/personas.json'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(personas)
  }, [])

  return (
    <div>
      <h2>Lista de Personas</h2>
      {data.map(p => <PersonaCard key={p.id} persona={p} />)}
    </div>
  )
}
