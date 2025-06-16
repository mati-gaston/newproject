import React, { useEffect, useState } from 'react';
import { getProducts } from '../service/firebase/products';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

function Promos() {
  const [productosEnPromo, setProductosEnPromo] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      const promos = data.filter(p => p.promo === true);
      setProductosEnPromo(promos);
    });
  }, []);

  return (
    <div className="container mt-4"> <h1 className="container text-center my-5" style={{fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem',  fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', color: '#333'}}>🔥 Promociones Especiales 🔥</h1>
     <ItemList data={productosEnPromo} />
    </div>
  );
}

export default Promos;
