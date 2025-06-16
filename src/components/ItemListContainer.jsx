import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import  {collection, getDocs, query, where, } from "firebase/firestore"
import {db} from '../service/firebase'

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const {categoryId} = useParams();
  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  

  const productsCollection = categoryId ? query(collection(db, "productos"),where("category", "==", categoryId)) :  collection(db, "productos");


  getDocs(productsCollection)
    .then((res) => {

      let list = res.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

    if (!categoryId) {
  list = list.filter((producto) => producto.promo !== true);
}

      setData(list);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
}, [categoryId]);


  return (

     <>

      { 
      loading 
       ? 
        <LoaderComponent/> :  <div>
                                <h1 className="container text-center my-5" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', color: '#333'}}>
  {greeting} {categoryId && <span style={{textTransform:"capitalize"}}>{categoryId}</span>}</h1>
                                <ItemList data={data} />
                              </div>
    }
     </>
  );
};

export default ItemListContainer;
