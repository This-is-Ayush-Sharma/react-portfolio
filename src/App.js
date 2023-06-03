import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import NavbarTop from './components/Navbar/Navbar';
import Lander from './components/Lander/Lander';
// import Footer from './components/basic/Footer/Footer';
import Abouts from './components/Abouts/Abouts';
import Achievement from './components/Achievement/Achievement';
import Contacts from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Router>
        <NavbarTop />
        <Routes>
          <Route path='/about' element={<Abouts />} />
          <Route path='/' element={<Lander />} />
          <Route path='/contact' element={<Contacts/>} />
          <Route path='/achievements' element={<Achievement/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skills/>} />
          {/* <Route path='/about' element={<Abouts/>}/>
        <Route path='/about' element={<Abouts/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

// {/* <>
//   <NavbarTop />
//   <Lander />
//   {/* <Footer /> */}
//   {/* <Abouts /> */}
//   {/* <Achievement /> */}
//   {/* <Contacts /> */}
// </> */}

export default App;
