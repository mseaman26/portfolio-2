import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.js'
import Header from './components/Header'
import Footer from './components/Footer';
import ProjectsPage from './Pages/ProjectsPage'
import ResumePage from './Pages/ResumePage';
import ContactPage from './Pages/Contact';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    
    <Router>
      <Header/> 
        <Routes>
          <Route path='/' element={<Home/>}/><Route/>
          <Route path='/projects' element={<ProjectsPage/>}></Route>
          <Route path='/resume' element={<ResumePage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
        </Routes>
        
    </Router>
    <Footer/>
    
    </>
  );
}

export default App;
