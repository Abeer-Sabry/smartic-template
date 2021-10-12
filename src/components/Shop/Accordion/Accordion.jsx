import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Accordion.module.css'
const Accordion = () => {
    return (
        <>
            
            <h4 className="text-left border-bottom pb-3 mb-3">Categories</h4>
            <div className={`${style.main}    accordion`} id="accordionExample">
                <div className={`${style.card} border-bottom pb-1 mb-2 `}>
                    <div className="" id="headingOne">
                        <h2 className="mb-1">
                            <div className="d-flex jsutify-content-between">
                                <button className="color bg-transparent border-none  btn-block text-left  " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accessories
                                </button>
                                <span className={`${style.arrow}  color  d-inline-block  ml-1`}><i className="fas fa-angle-down"></i></span>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="">
                            <ul>
                                <li>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Cameras</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Software</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Phones & PDAs </NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text mb-3`} to="/">MP3 Players</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} border-bottom pb-1 mb-2  `}>
                    <div className="" id="headingTwo">
                        <h2 className="mb-1 ">
                            <div className="d-flex jsutify-content-between">
                                <button className=" color bg-transparent border-none  btn-block text-left  " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    All in One
                                </button>
                                <span className={`${style.arrow}  color d-inline-block  ml-1`}><i className="fas fa-angle-down"></i></span>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="">
                            <ul>
                                <li>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Cameras</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Software</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Phones & PDAs </NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text mb-3`} to="/">MP3 Players</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} border-bottom pb-1 mb-2  `}>
                    <div className="" id="headingThree">
                        <h2 className="mb-1">
                            <div className="d-flex jsutify-content-between">
                                <button className=" color bg-transparent border-none  btn-block text-left  " type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Gadgets
                                </button>
                                <span className={`${style.arrow}   color  d-inline-block  ml-1`}><i className="fas fa-angle-down"></i></span>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="">
                            <ul>
                                <li>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Cameras</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Software</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Phones & PDAs </NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text mb-3`} to="/">MP3 Players</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} border-bottom pb-1 mb-2  `}>
                    <div className="" id="headingFour">
                        <h2 className="mb-1">
                            <div className="d-flex jsutify-content-between">
                                <button className="color bg-transparent border-none  btn-block text-left  " type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Gaming
                                </button>
                                <span className={`${style.arrow}  color  d-inline-block  ml-1`}><i className="fas fa-angle-down"></i></span>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div className="">
                            <ul>
                                <li>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Cameras</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Software</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Phones & PDAs </NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text mb-3`} to="/">MP3 Players</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} border-bottom pb-1 mb-2  `}>
                    <div className="" id="headingFive">
                        <h2 className="mb-1">
                            <div className="d-flex jsutify-content-between">
                                <button className=" color bg-transparent border-none  btn-block text-left  " type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Others
                                </button>
                                <span className={`${style.arrow}  color  d-inline-block  ml-1`}><i className="fas fa-angle-down"></i></span>
                            </div>
                        </h2>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div className="">
                            <ul>
                                <li>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Cameras</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Software</NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text`} to="/">Phones & PDAs </NavLink>
                                    <NavLink className={`${style.links}  d-block text-left text mb-3`} to="/">MP3 Players</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} border-bottom pb-1 mb-2  `}>
                    <div className="" id="headingSix">
                        <h2 className="mb-1">
                            <button className=" color bg-transparent border-none btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                MAC Computer  
                            </button>
                        </h2>
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default Accordion
