import logo from './logo.svg';
import './App.css';
import Navbar from './Container/Components/Navbar'
import Hero from './Container/Components/Hero'
import ClaimEverGrow from './Container/Components/ClaimEverGrow'
import AirDropDesc from './Container/Components/AirDropDesc'
import AirDrop from './Container/Components/AirDrop'
import TokenDetails from './Container/Components/TokenDetails'
import Announcing from './Container/Components/Announcing'
import Footer from './Container/Components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <AirDropDesc />
              <ClaimEverGrow />
              <AirDrop />
              <TokenDetails></TokenDetails>
              <Announcing></Announcing>
              <Footer></Footer>
            </>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
