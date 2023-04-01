import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Home from "./pages/Home";
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/restaurant" element={<Restaurant/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
