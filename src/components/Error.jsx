import React from 'react'
import { Link, Links } from 'react-router-dom'

const Error = () => {
  return (
<div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
  <div className="p-5 border rounded shadow bg-white text-center" style={{ maxWidth: '500px', width: '100%' }}>
    <div style={{ fontSize: '3rem' }}>⚠️</div>
    <h2 className="mt-3 text-danger">¡Producto no encontrado!</h2>
    <p className="mt-2">El producto que estás buscando no existe o fue eliminado 🍔</p>
    <Link to='/' className='btn btn-dark mt-4 w-100'>Volver al inicio</Link>
  </div>
</div>
  )
}

export default Error