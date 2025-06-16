import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ productos }) => {
  return (
    <div className="d-flex justify-content-center my-3">
      <div className="card" style={{ width: '18rem' }}>
        <img
  src={productos.img}
  alt={productos.name}
  className="card-img-top mx-auto d-block"
  style={{ height: "200px", width: "100%", objectFit: "contain", padding: "10px", backgroundColor: "#f8f9fa", }}/>
        <div className="card-body text-center">
          <h5 className="card-title"  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem',  fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', color: '#333'}}>
  {productos.name}</h5>
          <p className="card-text"  style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '1rem', color: '#555', lineHeight: '1.4'}}>
  {productos.description}</p>
          <p className="card-text">${productos.price}.00</p>
          <Link to={`/item/${productos.id}`} className="btn btn-dark"> Comprar</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
