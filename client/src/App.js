import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Home from "./pages/Home";
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart'

import RestaurantRegister from './pages/RestaurantRegister';
import RestaurantRegisterForm from './components/RestaurantRegisterForm';

import {Provider} from 'react-redux';
import {store} from './redux/store/store.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/restaurant" element={<Restaurant/>}></Route>

          <Route path="/Cart" element={<Cart/>}></Route>

          <Route path="/RestaurantRegister" element={<RestaurantRegister/>}></Route>
          <Route path="/RestaurantRegisterForm" element={<RestaurantRegisterForm/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
