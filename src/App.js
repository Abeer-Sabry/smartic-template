
import Navbar  from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Thermometer from './components/The Hosttest Thermometer/Thermometer.jsx';
import Technology from './components/The coolest technology/Technology.jsx';
import Ways from './components/2 ways of measurement/Ways.jsx';
import Body from './components/Track your body/Body.jsx';
import Batteries from './components/Batteries/Batteries.jsx';
import Easy from './components/Easy to use/Easy.jsx';
import Featured from './components/Featured/Featured.jsx';
import Buy from './components/Buy Now/Buy.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import Reviews from './components/Reviews/Reviews.jsx';
import PopUp from './components/SearchPopUp/PopUp';
import CartPopUp from './components/CartPopUP/CartPopUp.jsx';

const App = () => {
  return (
    <div className="App">
      <PopUp/>
      <CartPopUp/>
      <Navbar/>
      <Header/>
      <Thermometer/>
      <Technology/>
      <Ways/>
      <Body/>
      <Batteries/>
      <Easy/>
      <Reviews/>
      <Featured/>
      <Buy/>
      <Footer/>
    </div>
  );
}

export default App;
