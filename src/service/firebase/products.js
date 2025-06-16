import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; 

export const getProducts = async () => {
  const productsCollection = collection(db, 'productos');
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getOneProduct = async (id) => {
  const docRef = doc(db, 'productos', id);
  const res = await getDoc(docRef);
  if (res.exists()) {
    return { id: res.id, ...res.data() };
  } else {
    throw new Error('Producto no encontrado');
  }
};
