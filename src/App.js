import Navbar from './components/Navbar/Navbar.jsx';
import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import SingleProduct from './components/Shop/SingleProductDetails/SingleProduct'
import CartPage from './components/CartPage/CartPage.jsx';
import UserLogin from './components/UserLogin/UserLogin.jsx';
import UserRegister from './components/UserRegister/UserRegister.jsx';
import Contact from './components/Contact/Contact.jsx';
import { useSelector } from 'react-redux'
import FormikContainer from './components/Forms/FormikContainer.jsx';
// import jwt_decode from 'jwt-decode'
// import { useEffect } from 'react';


const App = () => {
  const { userInfo } = useSelector(({ user }) => user)
  // const token = userInfo.token
  // const decoded = jwt_decode(token);
  // console.log(decoded.id)

  // useEffect(() => {
  //   const decoded = jwt_decode(token);
  //   if (!decoded.id) {
  //     console.log("HHHH")
  //   }

  // }, [token])
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/cartpage" component={CartPage} />
        <Route exact path="/userlogin" render={() => userInfo?.token ? <Redirect to="/home" /> : <UserLogin />} />
        <Route exact path="/userregister" render={() => userInfo?.token ? <Redirect to="/home" /> : <UserRegister />} />
        <Redirect exact from="/" to="/home" />
        <FormikContainer />
      </Switch >



    </div>
  );
};

export default App;
