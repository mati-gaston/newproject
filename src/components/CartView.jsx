import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartView = () => {
  const { cart, cartTotal, clear, removeItem } = useContext(CartContext)

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🛒 Tu carrito</h2>

      <div>
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center' }}>El carrito está vacío.</p>
        ) : (
          cart.map((compra) => (
            <CartItem key={compra.id} compra={compra} removeItem={removeItem} />
          ))
        )}
      </div>

      {cart.length > 0 && (
        <>
          <div 
            style={{ marginTop: '2rem', padding: '1rem', borderTop: '2px solid #ccc', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f4f4f4', borderRadius: '8px'}}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
             Total a pagar: ${cartTotal().toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className='btn btn-danger' onClick={clear}>🗑 Borrar todo</button>
              <Link to='/chekout' className='btn btn-dark'>✅ Terminar compra</Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartView
