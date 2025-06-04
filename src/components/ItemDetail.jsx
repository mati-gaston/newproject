import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ detalle }) => {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <img
          src={detalle.img}
          alt={detalle.name}
          className="card-img-top mx-auto d-block"
          style={{
            height: '250px',
            objectFit: 'contain',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            padding: '10px',
          }}
        />
        <div className="card-body text-center">
          <h2 className="card-title">{detalle.name}</h2>
          <p className="card-text">{detalle.description}</p>
          <p className="card-text fw-bold">${detalle.price}</p>
          <ItemCount stock={detalle.stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

