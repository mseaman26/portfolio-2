import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.js'
import Header from './components/Header'
import ProjectsPage from './Pages/ProjectsPage'

function App() {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/><Route/>
          <Route path='/projects' element={<ProjectsPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
