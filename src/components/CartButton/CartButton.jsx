import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import CartPopUpAction from '../../Redux/CartPopUp/action'
import NavStyle from '../Navbar/Navbar.module.css'
const CartButton = () => {
    // const dispatch = useDispatch()
    const { CartItems } = useSelector(({ cart }) => cart)
    return (
        <>
            <li className="nav-item  position-relative">
                <NavLink className="icons mr-3" to="/cartpage">
                    <i className="fas fa-cart-arrow-down"></i>
                    <span className={`${NavStyle.CartBadge}   `}>{CartItems?.length}</span>
                </NavLink>
                {/* <NavLink onClick={() => dispatch(CartPopUpAction())} className="icons mr-3" to="#">
                    <i className="fas fa-cart-arrow-down"></i>
                    <span className={`${NavStyle.CartBadge}   `}>{CartItems?.length}</span>
                </NavLink> */}
            </li>
        </>
    )
}

export default CartButton
