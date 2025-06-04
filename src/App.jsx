import './App.css'
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  {CartProvider} from './context/CartContext';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Hamburgueseria Don Gregory" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria" />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
