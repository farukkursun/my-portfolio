


import NavBar from './components/NavBar'
import Zertifikat from './components/Zertifikat';
import About from './pages/About';
import Home from "./pages/Home";
// import Router from "./router/Router";


function App() {
  return (
   <div>
    {/* <Router/> */}
    <NavBar/>
    <Home/>
    <About/>
    <Zertifikat/>
    
   </div>
  );
}

export default App;
