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
        <Route path="/" element={<Home />}>

          <Route exact path="/dashboard" element={<Dashboard />} />
         
          
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
