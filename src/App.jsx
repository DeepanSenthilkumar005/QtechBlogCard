import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Items from './components/Items.jsx';
import NavBar from './components/NavBar.jsx';
// import ItemCard from './components/ItemCard';
import Carousel from './components/Carosuel.jsx';
import ErrorPage from './components/ErrorPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Move NavBar outside of Routes */}
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/products' element={<Items />} />
          <Route path='*' element={<ErrorPage />} />
          {/* Add other routes as necessary */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
