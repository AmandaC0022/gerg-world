import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from "./components/Navbar"; 
import Footer from './components/Footer';
import Chronicles from './pages/Chronicles';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="body">
        <Routes>
          <Route path="/" element={<Homepage/>}/> 
          <Route path="/chronicles" element={<Chronicles/>}/>
          {/* <Route path="/gergatizer" element={<Gergatizers/>}/>
          <Route path="/gergals" element={<Gergals/>}/>
          <Route path="/gergisms" element={<Gergisms/>}/>
          <Route path="/faces" element={<FacesOfGerg/>}/>
          <Route path="/shop" element={<ShopAGerg/>}/> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
