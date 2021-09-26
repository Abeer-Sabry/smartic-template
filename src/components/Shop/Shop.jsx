import React from 'react'
import style from './Shop.module.css'
import Ad from './Ad/Ad'
import Products from './Products/Products'
import LatestProducts from './LatestProductsCarousel/LatestProducts'
import Accordion from './Accordion/Accordion'
import { NavLink } from 'react-router-dom'
import Direction from './Direction/Direction'
import SelectPrice from './SelectPrice/SelectPrice'
import ProductView from './ProductView/ProductView'


const Shop = () => {
    return (
        <>
            <div className={style.background}>
                <div className='container-fluids '>
                    <div className={`${style.mainBar} row justify-content-between`}>
                        <h2 className="col-md-3 p-0 mb-5">main products</h2>
                        <div className="col-md-7 p-0">
                            <input className="col-md-7 bg-transparent px-4 py-1" type="text" placeholder="search" />
                        </div>
                    </div>
                    <div className="path mb-3 p-0 ">
                        <ul>
                            <li>
                                <NavLink className={`${style.links}  text mr-1`} to="/home">Home   <span className={`${style.arrow} ml-1`}><i className="fas fa-chevron-right"></i></span> </NavLink>
                                <NavLink className={`${style.links}  text`} to="/shop">Shop</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="row justify-content-between">
                        <div className={`${style.main}     col-md-3`}>
                            <Accordion />
                            <Ad />
                            <LatestProducts />
                        </div>
                        <div className="col-md-9">
                            <h4>Products</h4>
                            <div className={`${style.box}  d-flex justify-content-between`}>
                                <div className="col-md-3">
                                    <Direction />
                                </div>
                                <div className="col-md-3">
                                    <SelectPrice />
                                </div>
                            </div>
                            {/* <Products /> */}
                            <ProductView/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
