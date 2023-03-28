import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Home from "./pages/Home";
import Restaurant from './pages/restaurant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/restaurant" element={Restaurant}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
