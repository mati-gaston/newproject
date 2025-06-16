import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div 
      style={{ padding: '3rem', maxWidth: '600px', margin: '4rem auto', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}
    >
      <h2 style={{ marginBottom: '1rem', color: '#333' }}>Tu carrito está vacío 🛒</h2>
      <h4 style={{ marginBottom: '2rem', color: '#666' }}>¡Realizá tu primera compra!</h4>
      
      <Link 
        className='btn btn-dark' 
        to='/' 
        style={{ padding: '0.7rem 1.5rem', fontSize: '1rem', borderRadius: '8px'}}>
        Seguir comprando
      </Link>
    </div>
  )
}

export default EmptyCart
