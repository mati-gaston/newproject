import './App.css'
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Cart from './components/Cart';
import  {CartProvider} from './context/CartContext';
import Checkout from './components/Checkout';
import Promos from './components/Promos';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Hamburgueseria Mr. Gregory" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria" />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/chekout' element={<Checkout/>}/>
        <Route path='/promos' element={<Promos/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
        </CartProvider>
  )
}

export default App
