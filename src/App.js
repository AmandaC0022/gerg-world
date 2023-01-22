import './App.css';
import Homepage from './components/Homepage';
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <div>
      <Navbar/>
      <div className="body">
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
