import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar/>
          <Home/>
        </div>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
