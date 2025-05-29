import './App.css'
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Hamburgueseria Don Gregory" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en categoria" />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
