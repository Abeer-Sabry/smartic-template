import React, { useEffect } from 'react'
import style from './SingleProduct.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import SingleProductAction from '../../../Redux/SingleProductDetails/action'
import Loader from '../../Loader/Loader'
import CategoryProducts from '../CategoryProducts/CategoryProducts'
import SimilarProducts from '../SimilarProducts/SimilarProducts'
import TopSeller from '../TopSeller/TopSeller'
import ImageGallery from 'react-image-gallery'
import TabsPart from '../TabsPart/TabsPart'

const SingleProduct = () => {
    const { productId } = useParams()
    const { product, loading } = useSelector(({ product }) => product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(SingleProductAction(productId))
    }, [dispatch, productId])

    return (
        <>
            <div className="container-fluids">
                <div className="row m-0">
                    {
                        loading ? <Loader /> :
                            <div key={product._id} className="col-md-9 m-0 p-0">
                                <div className="d-flex mb-5 m-0 p-0">
                                <div className="col-md-5">
                                    <ImageGallery autoPlay items={product?.images ? product.images : []} />
                                </div>
                                <div className="col-md-7">
                                    <button className={style.FirstButton}>{product.category}</button>
                                    <h3 className={style.heading}>{product.name}</h3>
                                    <div className="d-flex">
                                        <p className={`${style.styleparagraph}  `}>{product.brand}</p>
                                        <span className={`${style.stars}  stars `}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <p className={style.paragraph}>{product.description}</p>
                                    <div className="d-flex align-items-baseline">
                                        <h6 className={style.size}>Size</h6>
                                        <div>
                                            <span className={style.sizeIcons}>S</span>
                                            <span className={style.sizeIcons}>M</span>
                                            <span className={style.sizeIcons}>L</span>
                                            <span className={style.sizeIcons}>XL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline">
                                        <h6 className={style.qtyHeading}>QTY</h6>
                                        <span className={style.Number}><i className="fas fa-minus"></i></span>
                                        <span className={style.qtyNumber}>0</span>
                                        <span className={style.Number}><i className="fas fa-plus"></i></span>
                                    </div>
                                    <div className="d-flex">
                                        <button className={style.CartButton}>Add To Cart</button>
                                        <button className={style.favrButton}><i class="fas fa-heart"></i> Add to Favorite</button>
                                    </div>
                                </div>
                            </div>
                                <TabsPart />
                            </div>
                    }
                    <div className="col-md-3  p-0 m-0">
                        <div className="mb-5">
                            <CategoryProducts />
                        </div>
                        <SimilarProducts />
                    </div>
                    <div className="col-md-9 m-0 p-0">
                       
                    </div>
                </div>


                <TopSeller />
            </div>
        </>
    )
}

export default SingleProduct
