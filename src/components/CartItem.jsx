import React from 'react'

const CartItem = ({ compra, removeItem }) => {
  return (
    <div 
      key={compra.id} 
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9'}}>
       <img 
        src={compra.img} 
        alt={compra.name} 
        style={{  width: '8rem', borderRadius: '5px', objectFit: 'cover', marginRight: '1rem'}}/>

      <div style={{ flex: 1 }}>
        <h4 style={{ margin: '0 0 0.5rem' }}>{compra.name}</h4>
        <p style={{ margin: '0.2rem 0' }}>Precio unitario: ${compra.price},00</p>
        <p style={{ margin: '0.2rem 0' }}>Cantidad: {compra.quantity}</p>
        <p style={{ margin: '0.2rem 0', fontWeight: 'bold' }}>Precio final: ${compra.price * compra.quantity},00</p>
      </div>

      <button 
        className='btn btn-danger' 
        style={{ marginLeft: '1rem', height: '2rem' }} 
        onClick={() => removeItem(compra.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default CartItem
