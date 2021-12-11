import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQtyAction } from '../../../Redux/Cart/action'
import style from '../SingleProductDetails/SingleProduct.module.css'
const DecrementButton = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <>
            <span onClick={() => dispatch(decreaseQtyAction(product))} className={style.Number}><i className="fas fa-minus"></i></span>
        </>
    )
}

export default DecrementButton
