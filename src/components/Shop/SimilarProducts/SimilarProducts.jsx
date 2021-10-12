import React from 'react'
import style from './SimilarProducts.module.css'
import { useSelector} from 'react-redux'


const SimilarProducts = () => {
    const { products } = useSelector(({ products }) => products)
    return (
        <div>
            <h6 className="color">Similar Products</h6>
            <div className={`${style.mainBorder}  `}>
                {
                    products.slice(6, 10).map(product => (
                        <div className={`${style.main}   d-flex  align-items-center`}>
                            <div className="col-md-3 m-0 p-0 mr-3">
                                <img className="w-100 m-0 p-0" src={product.image} alt="" />
                            </div>
                            <div className="col-md-8  m-0 p-0">
                                <h6 className={style.heading}>{product.brand}</h6>
                                <div className="d-flex   justify-content-between">
                                    <div className={style.mainIcon}>
                                        <span className={`${style.icons}  stars`}><i className="fas fa-star"></i></span>
                                        <span className={`${style.icons}  stars`}><i className="fas fa-star"></i></span>
                                        <span className={`${style.icons}  stars`}><i className="fas fa-star"></i></span>
                                        <span className={`${style.icons}  stars`}><i className="fas fa-star"></i></span>
                                    </div>
                                    <div className=" m-0 p-0"><i className="fas fa-cart-arrow-down"></i></div>
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
