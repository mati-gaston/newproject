import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ detalle }) => {
  const [compra, setCompra] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCompra(true);
    addItem(detalle, cantidad);
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div
        className="card shadow"
        style={{ maxWidth: '600px', width: '100%', borderRadius: '12px', padding: '2rem', backgroundColor: '#f9f9f9',}}>
        <img
          src={detalle.img}
          alt={detalle.name}
          className="card-img-top mx-auto d-block"
          style={{ height: '280px', objectFit: 'contain', backgroundColor: '#fff', borderRadius: '10px', padding: '1rem', marginBottom: '1.5rem', boxShadow: 'inset 0 0 5px rgba(0,0,0,0.05)',}}/>

        <div className="card-body text-center">
          <h2 className="card-title" style={{ marginBottom: '1rem', color: '#333' }}>
            {detalle.name}
          </h2>
          <p className="card-text" style={{ color: '#555' }}>{detalle.description}</p>
          <p className="card-text fw-bold" style={{ fontSize: '1.2rem', color: '#222', margin: '1rem 0' }}>
            ${detalle.price},00
          </p>

          {compra ? (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Link to='/' className='btn btn-outline-dark'>
                🛍 Seguir comprando
              </Link>
              <Link to='/cart' className='btn btn-dark'>
                🛒 Ir al carrito
              </Link>
            </div>
          ) : (
            <ItemCount stock={detalle.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

