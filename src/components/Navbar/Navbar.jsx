import React from 'react'
import { NavLink } from 'react-router-dom'
import NavStyle from './Navbar.module.css'
import { useDispatch } from 'react-redux'
import PopUpAction from '../../Redux/Popup/actions'
import CartPopUpAction from '../../Redux/CartPopUp/action'
const Navbar = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <nav className=" px-5 navbar navbar-expand-lg navbar-light bg-transparent py-4 ">
                <NavLink className="navbar-brand mr-5" to="#">Smartic</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link mr-4  " to="#">Home  <span className="plus"><i className="fas fa-plus"></i> </span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  mr-4" to="#">Shop <span className="plus"><i className="fas fa-plus"></i></span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link mr-4" to="#" id="navbarDropdown" data-toggle="dropdown"  >
                                Pages <span className="plus"><i className="fas fa-plus"></i></span>
                            </NavLink>
                            <div className="dropdown-menu" >
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Action</NavLink>
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Another action</NavLink>
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Something else here</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown ">
                            <NavLink className="nav-link mr-4 " to="#" id="navbarDropdown" data-toggle="dropdown"  >
                                Blog <span className="plus"><i className="fas fa-plus"></i></span>
                            </NavLink>
                            <div className="dropdown-menu" >
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Action</NavLink>
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Another action</NavLink>
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Something else here</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link mr-4" to="#" id="navbarDropdown" data-toggle="dropdown"  >
                                Contact <span className="plus"><i className="fas fa-plus"></i></span>
                            </NavLink>
                            <div className="dropdown-menu " >
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Action</NavLink>
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Another action</NavLink>
                                <NavLink className={`${NavStyle.dropstyle}  dropdown-item`} to="#">Something else here</NavLink>
                            </div>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="anchor" to="#">Login / </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="anchor mr-3" to="#">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => dispatch(PopUpAction())} className="icons mr-3" to="#"><i className="fas fa-search-location"></i></NavLink>
                        </li>
                        <li className="nav-item  position-relative">
                            <NavLink onClick={() => dispatch(CartPopUpAction())} className="icons mr-3" to="#">
                                <i className="fas fa-cart-arrow-down"></i>
                                <span className={`${NavStyle.CartBadge}   `}>0</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="icons " to="#"><i className="fas fa-grip-lines"></i></NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
