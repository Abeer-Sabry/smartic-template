import React from 'react';
// import style from './LatestProducts.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';


const LatestProducts = () => {
    const { products } = useSelector(({ products }) => products);

    return (
        <>
            <OwlCarousel className='owl-theme' loop margin={10}
             navText={true}
             items='1'
             >
                <div className='item'>
                    {products.map(product => (
                        <div key={product.id}>
                            <img src={product.image} alt="" />
                        </div>
                    ))}
                </div>

            </OwlCarousel>
        </>
    )
}

export default LatestProducts
