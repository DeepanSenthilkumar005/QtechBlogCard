import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Items from './components/Items.jsx';
import NavBar from './components/NavBar.jsx';
// import ItemCard from './components/ItemCard';
import Carousel from './components/Carosuel.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Move NavBar outside of Routes */}
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/products' element={<Items />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
