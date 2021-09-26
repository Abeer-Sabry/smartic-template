import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartPopUpAction from '../../Redux/CartPopUp/action'
import style from './CartPopUp.module.css'
import Aos from 'aos'

const CartPopUp = () => {
    Aos.init({
        duration:2000
    });
    const { show } = useSelector(({ show }) => show)
    const dispatch = useDispatch()
    return (
        <div>
            {show ? <div className="popUpBlack">
                <div data-aos="fade-left" className={`${style.direction}     d-flex bg-white px-3 py-3 position-relative`}>
                    <div className="d-flex ">
                        <h3 className="mr-4">Shopping cart</h3>
                        <NavLink onClick={() => dispatch(CartPopUpAction())} to="#"> <span className={`${style.close}  d-inline-block  mt-1`}>close  <i className="fas fa-times"></i></span></NavLink>
                    </div>
                    <div className={style.border}></div>
                    <p className="mt-5">No Products In The Cart</p>
                </div>
            </div> : ""}
        </div>
    )
}

export default CartPopUp
