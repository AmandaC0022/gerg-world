import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from "./components/Navbar"; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="body">
        <Routes>
          <Navbar/>
          <Route path="/" element={<Homepage/>}/> 
          <Route path="/chronicles" elements={<Chronicles/>}/>
          <Footer/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
