import React from 'react'
import style from '../SingleProductDetails/SingleProduct.module.css'
import ImageGallery from 'react-image-gallery'
import DecrementButton from '../DecrementButton/DecrementButton'
import IncrementButton from '../IncrementButton/IncrementButton'
import { useDispatch, useSelector } from 'react-redux'
import addToCartAction from '../../../Redux/Cart/action'
import modalAction from '../../../Redux/Modal/action'


const Modal = ({ product }) => {
    const dispatch = useDispatch()
    const { show } = useSelector(({ modal }) => modal)
    // const { _id, category, name, image, price } = product

    return (
        <>
            {
                show ? <div key={product._id}>
                    <div onClick={() => dispatch(modalAction())} className="modalBackground">
                        <div className="d-flex mb-5 m-0 modalPopup justify-content-between align-items-center">
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
                                    < DecrementButton product={product} />
                                    <span className={style.qtyNumber}>0</span>
                                    <IncrementButton product={product} />
                                </div>
                                <div className="d-flex">
                                    <button onClick={() => dispatch(addToCartAction(product))} className={style.CartButton}>Add To Cart</button>
                                    <button className={style.favrButton}><i class="fas fa-heart"></i> Add to Favorite</button>
                                </div>
                            </div>
                            <span className="closing"><i className="fas fa-times"></i></span>
                        </div>
                    </div>
                </div> : ''


            }
        </>
    )
}

export default Modal
