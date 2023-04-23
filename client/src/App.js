import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Homepage from './pages/Homepage';
import Navbar from "./components/Navbar"; 
import Footer from './components/Footer';
import Chronicles from './pages/Chronicles';
import SingleBlog from './pages/singleBlog'; 

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql', 
  cache: new InMemoryCache(), 
}); 

function App() {
  return (
    <ApolloProvider client={client}> 
      <Router>
        <Navbar/>
        <div className="body">
          <Routes>
            <Route path="/" element={<Homepage/>}/> 
            <Route path="/chronicles" element={<Chronicles/>}/>
            <Route path='/chronicles/:blogId' element={<SingleBlog/>}/>
            {/* <Route path="/gergatizer" element={<Gergatizers/>}/>
            <Route path="/gergals" element={<Gergals/>}/>
            <Route path="/gergisms" element={<Gergisms/>}/>
            <Route path="/faces" element={<FacesOfGerg/>}/>
            <Route path="/shop" element={<ShopAGerg/>}/> */}
          </Routes>
        </div>
        <Footer/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
