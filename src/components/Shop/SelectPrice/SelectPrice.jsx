import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchDataAction from '../../../Redux/FetchProducts/action'
import PriceFilterAction from '../../../Redux/PriceFilter/action'
import './SelectPrice.module.css'
// import * as React from 'react';
// import {Form} from 'react-bootstrap'
const SelectPrice = () => {
    const { sort } = useSelector(({ priceFilter }) => priceFilter);
    const [price, setPrice] = useState("price")
    const dispatch = useDispatch()
    // const change = (e) => {
    //     dispatch(PriceFilterAction(e.target.value))
    //     dispatch(fetchDataAction({price}))
    // }
    return (
        <>
            {/* <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select> */}
            <select value={price} onChange={(e) => {
                setPrice(e.target.value)
                dispatch(fetchDataAction({ sort: price }))
            }} className="form-select m-0 " aria-label="Default select example">
                <option selected disabled>sort by price </option>
                <option value="price">Price-Low to High</option>
                <option value="-price">Price-High to Low</option>
            </select>
        </>
    )
}

export default SelectPrice
