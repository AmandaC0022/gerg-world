import './App.css';
import Homepage from './pages/Homepage';
import Navbar from "./components/Navbar"; 
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="body">
        <Homepage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
