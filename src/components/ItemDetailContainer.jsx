import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../mock/AsyncService';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { ItemId } = useParams();

  useEffect(() => {
    getOneProduct(ItemId)
      .then((response) => setDetalle(response))
      .catch((error) => console.log(error));
  }, [ItemId]);

  return (
    <div>
      <ItemDetail detalle={detalle} />
    </div>
  );
};

export default ItemDetailContainer;
