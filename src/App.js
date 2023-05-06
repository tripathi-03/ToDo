import './App.css';


import Header from "./Components/Header";
import Home from "./Components/Home";

// import About from "./Components/About";
// import Contact from "./Components/Contact";
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'; 

// import Footer from './Components/Footer';

function App() {
  return (
    <Router>

      
      <Header /> 
      <Home/>
      

      {/* <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

      </Routes>
      
      <Footer/> */}
  
    
    </Router>
  );
}

export default App;
