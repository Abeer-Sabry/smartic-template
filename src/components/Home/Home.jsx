import React from 'react'
import Header from '../Header/Header';
import Thermometer from '../The Hosttest Thermometer/Thermometer.jsx';
import Technology from '../The coolest technology/Technology.jsx';
import Ways from '../2 ways of measurement/Ways.jsx';
import Body from '../Track your body/Body.jsx';
import Batteries from '../Batteries/Batteries.jsx';
import Easy from '../Easy to use/Easy.jsx';
import Featured from '../Featured/Featured.jsx';
import Buy from '../Buy Now/Buy.jsx';
import Footer from '../Footer/Footer.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import PopUp from '../SearchPopUp/PopUp';
import CartPopUp from '../CartPopUP/CartPopUp.jsx';

const Home = () => {
    return (
        <>
            <PopUp />
            <CartPopUp />
            <Header />
            <Thermometer />
            <Technology />
            <Ways />
            <Body />
            <Batteries />
            <Easy />
            <Reviews />
            <Featured />
            <Buy />
           <div className="container-fluids">
           <Footer />
           </div>
        </>
    )
}

export default Home
