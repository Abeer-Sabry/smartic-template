import { Switch, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import SingleProduct from "./components/Shop/SingleProductDetails/SingleProduct";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/products/:productId" component={SingleProduct} />
      </Switch>
    </div>
  );
};

export default App;
