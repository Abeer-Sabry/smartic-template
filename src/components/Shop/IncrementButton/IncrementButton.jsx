import React from 'react'
import { useDispatch } from 'react-redux'
import addToCartAction from '../../../Redux/Cart/action'
import style from '../SingleProductDetails/SingleProduct.module.css'
const IncrementButton = ({product}) => {
    const dispatch = useDispatch()
    return (
        <>
             <span onClick={()=>dispatch(addToCartAction(product))} className={style.Number}><i className="fas fa-plus"></i></span>
        </>
    )
}

export default IncrementButton
