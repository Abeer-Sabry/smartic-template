import React, { useEffect } from 'react'
import style from './SimilarProducts.module.css'
import { useSelector, useDispatch } from 'react-redux'
import fetchDataAction from '../../../Redux/FetchProducts/action'

const SimilarProducts = () => {
    const { products } = useSelector(({ products }) => products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataAction())
    }, [dispatch])
    return (
        <div>
            <h5>Similar Products</h5>
            <div className="main">
                {
                    products.slice(6, 10).map(product => (
                        <div className={`${style.main}    row align-items-center`}>
                            <div className="col-md-5">
                                <img className="w-100" src={product.image} alt="" />
                            </div>
                            <div className="col-md-7">
                                <h6 className={style.heading}>{product.brand}</h6>
                                <div className="d-flex ">
                                    <div className={style.mainIcon}>
                                        <span className={`${style.icons}  stars`}><i className="fas fa-star"></i></span>
                                        <span className={`${style.icons}  stars`}><i className="fas fa-star"></i></span>
                                        <span className={`${style.icons}  stars`}><i className="fas fa-star"></i></span>
                                        <span className={`${style.icons}  stars`}><i className="fas fa-star"></i></span>
                                    </div>
                                    <div className="col-md-3"><i className="fas fa-cart-arrow-down"></i></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SimilarProducts
