import Navbar from './components/Navbar/Navbar.jsx';
import { Switch, Route} from 'react-router';
import './App.css';
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import SingleProduct from './components/Shop/SingleProductDetails/SingleProduct'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/Shop" component={Shop} />
        <Route path="/products/:productId" component={SingleProduct} />
         
      </Switch >
    </div>
  );
}

export default App;
