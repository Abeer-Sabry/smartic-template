import React, { useEffect } from 'react';
// import style from './LatestProducts.module.css'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchDataAction from '../../../Redux/FetchProducts/action';
// import ProductItem from '../ProductItem/ProductItem';
import style from './LatestProducts.module.css'


const LatestProducts = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(({ products }) => products);

  const items = products.map(({ _id, category, name, image, price }) => (
    <div key={_id}>
      <h6 className={`${style.heading}  text`}>{category}</h6>
      <Link to={`/products/${_id}`}>
        <p className={style.paragraph}>{name}</p>
        <img className={style.img} src={image} alt="" />
      </Link>
      <p>
        ${price} <del className={`${style.DeletedText}  deleted`}>$300</del>{" "}
      </p>
    </div>
  ))

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);
  return (
    <>
      <AliceCarousel items={items}
        disableDotsControls
        disableButtonsControls
        autoPlay
        animationDuration={1500}
      />
    </>
  )
}


export default LatestProducts;
