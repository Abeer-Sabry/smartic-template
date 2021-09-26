import React, { useEffect } from 'react'
import './TopSeller.module.css'
import { useDispatch, useSelector } from 'react-redux'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import fetchDataAction from '../../../Redux/FetchProducts/action';
const TopSeller = () => {
    const { products } = useSelector(({ products }) => products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataAction())
    }, [dispatch])
    console.log(products);
    return (
        <>
            <h2>Top Seller Products</h2>
            {/* <AliceCarousel mouseTracking items={products} /> */}


        </>
    )
}

export default TopSeller
