import React from "react";
import { NavLink } from "react-router-dom";
import footStyle from "./Footer.module.css";
const Footer = () => {
    return (
        <div>
            <div className="section">
                <div
                    className={`${footStyle.border}    p-0 pb-5  m-0 d-flex  justify-content-content  col-md-12`}
                >
                    <div className="col-md-3 m-0 p-0">
                        <img
                            className="w-50 color mb-3 "
                            src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/09/logo.svg"
                            alt=""
                        />
                        <div className="d-flex align-items-baseline mb-2">
                            <span className={`${footStyle.size}  mr-3 `}>
                                <i className="fas fa-phone-alt"></i>
                            </span>
                            <h4 className={`${footStyle.headings}   color`}>
                                (84) - 1800 33355
                            </h4>
                        </div>
                        <p>184 Mayfield St. Hopewell Junction,NY 12533 </p>
                    </div>
                    <div className="col-md-3 m-0">
                        <h6>Useful Links</h6>
                        <ul>
                            <li>
                                <NavLink className={`${footStyle.color}  `} to="">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${footStyle.color} `} to="">
                                    News
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${footStyle.color}  `} to="">
                                    Partners
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 m-0 p-0">
                        <ul className="mt-4">
                            <li>
                                <NavLink className={`${footStyle.color}  `} to="">
                                    Delivery and payment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${footStyle.color} `} to="">
                                    Terms of sale
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${footStyle.color}  `} to="">
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 m-0 p-0">
                        <h6>Follow Us.</h6>
                        <div className={`${footStyle.icons}    d-flex`}>
                            <li>
                                <NavLink className={`${footStyle.color}    mr-2`} to="">
                                    <span className={`${footStyle.style}    `}>
                                        <i className="fab fa-facebook"></i>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${footStyle.color}    mr-2`} to="">
                                    <span className={`${footStyle.style}    `}>
                                        <i className="fab fa-youtube"></i>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${footStyle.color}   mr-2`} to="">
                                    <span className={`${footStyle.style}    `}>
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={`${footStyle.color}    `} to="">
                                    <span className={`${footStyle.style}    `}>
                                        <i className="fab fa-instagram-square"></i>
                                    </span>
                                </NavLink>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
