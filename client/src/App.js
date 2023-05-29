import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//PAGES 
import Homepage from './pages/Homepage';
import Chronicles from './pages/Chronicles';
import EditBlog from './pages/EditBlog';
import Gergals from './pages/Gergals';
import EditGergal from './pages/EditGergal';
import Gergisms from './pages/Gergisms';
import Navbar from "./components/Navbar"; 
import Footer from './components/Footer';


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
            <Route path='/chronicles/:blogId' element={<EditBlog/>}/>
            <Route path="/gergals" element={<Gergals/>}/>
            <Route path="/gergals/:gergalId" element={<EditGergal/>}/>
            <Route path="/gergisms" element={<Gergisms/>}/>
            {/* <Route path="/gergatizer" element={<Gergatizers/>}/>
            <Route path="/gergisms/:gergismsId" element={<EditGergism/>}/>
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
