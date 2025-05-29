import { useState, useEffect } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [compra, setCompra] = useState(false);

  // Solo para debug, podés eliminar en producción
  useEffect(() => {
    console.log('Count o compra cambiaron:', count, compra);
  }, [count, compra]);

  const comprar = () => {
    setCompra(!compra);
    onAdd(count); // Llamo a la función pasada para agregar al carrito con la cantidad actual
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <button className="btn btn-success" onClick={sumar}>+</button>
        <span className="btn">{count}</span>
        <button className="btn btn-danger" onClick={restar}>-</button>
      </div>

      <button className="btn btn-primary" onClick={comprar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
