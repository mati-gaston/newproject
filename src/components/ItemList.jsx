import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', padding: '2rem',}}>
      {data.map((productos) => (
        <Item key={productos.id} productos={productos} />
      ))}
    </div>
  );
};

export default ItemList;
