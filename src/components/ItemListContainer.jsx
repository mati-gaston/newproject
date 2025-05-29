import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if (categoryId) {
          setData(respuesta.filter((prod) => prod.category === categoryId));
        } else {
          setData(respuesta);
        }
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
