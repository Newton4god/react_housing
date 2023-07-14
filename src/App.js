import './Navigation.css'
import './App.css';
import Navigation from './Navigation';
import LandingCarousel from './LandingCarousel';
import AboutUs from './AboutUs';
import MainCarouselPage from './MainCarouselPage';
import ChooseUs from './ChooseUs';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <LandingCarousel/>
      <AboutUs/>
      <MainCarouselPage/>
      <ChooseUs/>
      <Footer/>
    </div>
  );
}

export default App;
