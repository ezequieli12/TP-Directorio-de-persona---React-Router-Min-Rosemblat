import { useState } from 'react'

export default function FormularioContacto() {
  const [form, setForm] = useState({ nombre: '', apellido: '', email: '', edad: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validar = () => {
    if (!form.nombre || !form.apellido || !form.email || !form.edad) return 'Todos los campos son obligatorios.'
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Email inválido.'
    if (isNaN(form.edad) || parseInt(form.edad) <= 0) return 'Edad debe ser un número positivo.'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errorMsg = validar()
    if (errorMsg) {
      setError(errorMsg)
      setSuccess('')
    } else {
      setError('')
      setSuccess('Formulario enviado con éxito 🎉')
      setForm({ nombre: '', apellido: '', email: '', edad: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
      <input placeholder="Apellido" value={form.apellido} onChange={e => setForm({ ...form, apellido: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Edad" value={form.edad} onChange={e => setForm({ ...form, edad: e.target.value })} />
      <button type="submit">Enviar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  )
}
