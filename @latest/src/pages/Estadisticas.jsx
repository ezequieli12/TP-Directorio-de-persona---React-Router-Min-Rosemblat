import personas from '../data/personas.json'

export default function Estadisticas() {
  const total = personas.length
  const mayores35 = personas.filter(p => p.edad > 35).length
  const mayor = Math.max(...personas.map(p => p.edad))
  const menor = Math.min(...personas.map(p => p.edad))
  const personasMayor = personas.filter(p => p.edad === mayor)
  const personasMenor = personas.filter(p => p.edad === menor)
  const promedio = (personas.reduce((acc, p) => acc + p.edad, 0) / total).toFixed(2)

  return (
    <div>
      <h2>Estadísticas</h2>
      <ul>
        <li>Total: {total}</li>
        <li>Mayores de 35: {mayores35}</li>
        <li>Mayor edad: {mayor} ({personasMayor.map(p => p.nombre).join(', ')})</li>
        <li>Menor edad: {menor} ({personasMenor.map(p => p.nombre).join(', ')})</li>
        <li>Promedio de edad: {promedio}</li>
      </ul>
    </div>
  )
}
