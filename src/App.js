import React from 'react';
import CarouselPage from './Components/Carousel/Carousel';
import Carousel from "./Components/Carousel/Carousel";
import NavbarComp from './Components/Navbar/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <><div className="App">
      <CarouselPage />
      <NavbarComp />
      <h1 style={styles}>House-Plant Watering Log</h1>
      <PlantProfiles />
    </div><BrowserRouter>
        <nav>
          <Link to="/"></Link>
          <Link to="/create"></Link>
        </nav>
        <Routes>
          <Route path="/" element={<PlantProfiles/>} />
          <Route path="/create" element={<NavbarComp />} />
          <Route path="/:id" element={<Carousel />} />
        </Routes>
      </BrowserRouter></>
      
     
  );
  
}
const styles = {
  color: 'green',
  backgroundColor: 'salmon',
  fontSize: '40px',
  margin: '20px'
}
export default App;
