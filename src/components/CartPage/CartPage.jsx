import React from 'react'
import style from './CartPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '../DeleteIcon/DeleteIcon'
import DecrementButton from '../Shop/DecrementButton/DecrementButton'
import IncrementButton from '../Shop/IncrementButton/IncrementButton'
import { clearCartAction } from '../../Redux/Cart/action'
import { NavLink } from 'react-router-dom'

const CartPage = () => {
    const { CartItems } = useSelector(({ cart }) => cart)
    const dispatch = useDispatch()
    return (
        <>
            <div className="container-fluids pt-5 ">
                <div className="d-flex  justify-content-between">
                    {CartItems?.length === 0 ? <h3 className="text-center">CART IS EMPTY</h3> :

                        <div className="w-75 ">

                            <table className={`${style.border}    table mb-5`}>
                                <thead >
                                    <tr >
                                        <th scope="col">Product</th>
                                        <th className="text-center" scope="col">Price</th>
                                        <th className="text-center" scope="col">Quantity</th>
                                        <th className="text-center" scope="col">Item Total</th>
                                        <th className="text-center" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="mt-5">
                                    {CartItems.map(product => (
                                        <tr key={product.id}>

                                            <th scope="row">
                                                <div className="d-flex align-items-center" >
                                                    <div>
                                                        <img width="120px" src={product.image} alt="" />
                                                    </div>
                                                    <div>
                                                        <p className={` m-0 text`}>{product.category}</p>
                                                        <p className="">{product.name}</p>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="text-center">
                                                ${product.price}
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                    <DecrementButton product={product} />
                                                    {product.qty}
                                                    <IncrementButton product={product} />
                                                </div>
                                            </td>

                                            <td className="text-center">${product.qty * product.price}</td>
                                            <td className="text-center"><DeleteIcon product={product} /></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>


                        </div>}
                    <div className="w-25 ml-4">
                        <div className={`${style.height}  text-center mb-3  bg-secondary`}>
                            <button className=" bg-success text-white p-2">TOTAL PRICE :${CartItems.reduce((x, y) => x + y.qty * y.price, 0)}</button>
                            <h1>hii</h1>
                            <button className=" bg-info p-2  "><NavLink className="text-white" to="/shop">continue shoping</NavLink></button>
                        </div>
                        <div className="  ">
                            <button className="btn btn-danger" onClick={() => dispatch(clearCartAction())} > Claer Cart</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CartPage
