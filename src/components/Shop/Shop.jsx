import React from "react";
import style from "./Shop.module.css";
import Ad from "./Ad/Ad";
import Products from "./Products/Products";
import LatestProducts from "./LatestProductsCarousel/LatestProducts";
import Accordion from "./Accordion/Accordion";
import Footer from "../Footer/Footer";

const Shop = () => {
  return (
    <>
      <div className={style.background}>
        <div className="container-fluids ">
          <h1>shop</h1>
          <div className="row">
            <div className={`${style.main}  col-md-3`}>
              <Accordion />
              <Ad />
              <LatestProducts />
            </div>
            <div className="col-md-9">
              <Products />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
