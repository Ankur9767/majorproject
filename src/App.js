import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter, Routes, Route ,Link
} from "react-router-dom";
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route  path="dashboard" element={<Dashboard />} />
          <Route  path="about" element={<h1>About</h1>} />
          
         
          
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
