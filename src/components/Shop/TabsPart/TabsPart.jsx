import React from 'react'
import { useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import style from './TabsPart.module.css'
const TabsPart = () => {
    const { product } = useSelector(({ product }) => product)
    return (
        <>
            <div className="">
                <div className="">
                    <div className={`${style.list}    list-group`} id="list-tab" role="tablist">
                        <a className={`${style.anchor}   list-group-item-action active `} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Product Description</a>
                        <a className={`${style.anchor}   list-group-item-action `}id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Specification</a>
                        <a className={`${style.anchor}   list-group-item-action `} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Reviews</a>
                        <a className={`${style.anchor}   list-group-item-action `} id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                    </div>
                </div>
                <div className="">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">{product.description}</div>
                        <div className="tab-pane fade col-md-10 m-0 p-0" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="row">Color</th>
                                        <td >Black</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Brand</th>
                                        <td >Dell</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"></div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TabsPart
