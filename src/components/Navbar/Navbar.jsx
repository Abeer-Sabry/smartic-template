import React from 'react'
import { NavLink } from 'react-router-dom'
// import NavStyle from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import PopUpAction from '../../Redux/Popup/actions'
import CartButton from '../CartButton/CartButton'
import { userLogOut } from '../../Redux/User/action'
const Navbar = () => {
  const { isLogginIn, userInfo } = useSelector(({ user }) => user)
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
              <NavLink className="nav-link mr-4  " to="/home">Home  </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  mr-4" to="/Shop">Shop </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link mr-4" to="/contact">Contact</NavLink>

            </li>

          </ul>
          <ul className="navbar-nav ml-auto">
            {isLogginIn ?
              <li className="nav-item Drop">
                <NavLink className="anchor mr-3 " to="/userlogin">{userInfo.name}</NavLink>
                <ul className="dropdown">
                  <li><NavLink onClick={() => dispatch(userLogOut())} className="Dropanchor mr-3 " to="/userlogin">Logout</NavLink></li>
                </ul>
              </li>
              :
              <>
                <li className="nav-item">
                  <NavLink className="anchor" to="/userlogin">Login / </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="anchor mr-3" to="/userregister">Register</NavLink>
                </li>

              </>
            }
            <li className="nav-item">
              <NavLink onClick={() => dispatch(PopUpAction())} className="icons mr-3" to="#"><i className="fas fa-search-location"></i></NavLink>
            </li>
            <CartButton />
            <li className="nav-item">
              <NavLink className="icons " to="#"><i className="fas fa-grip-lines"></i></NavLink>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
