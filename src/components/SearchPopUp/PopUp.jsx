import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopUphStyle from './PopUp.module.css'
import PopUpAction from '../../Redux/Popup/actions'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'

const PopUp = () => {
    Aos.init({
        duration: 250
    })
    const { popup } = useSelector(({ popup }) => popup)
    const dispatch = useDispatch()
    return (
        <>
            {popup ? <div data-aos="zoom-in" className="popUpWhite">
                <div className=" pt-4"><NavLink onClick={() => dispatch(PopUpAction())} to="#"><span className={PopUphStyle.close}><i className="far fa-times-circle"></i></span></NavLink></div>
                <div className="col-md-5 mt-5">
                    <div className="position-relative">  <input type="text" className="input form-control p-4" placeholder="Search Products" /></div>
                    <span className={PopUphStyle.icon}> <i className="fas fa-search"></i></span>
                </div>
            </div> : ''}
        </>
    )
}

export default PopUp
