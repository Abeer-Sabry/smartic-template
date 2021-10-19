import { useState } from 'react'
import { useDispatch} from 'react-redux'
import fetchDataAction from '../../../Redux/FetchProducts/action'
// import PriceFilterAction from '../../../Redux/PriceFilter/action'
import './SelectPrice.module.css'
// import * as React from 'react';
// import { Button } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'
const SelectPrice = () => {
    // const { sort } = useSelector(({ priceFilter }) => priceFilter);
    const [price, setPrice] = useState("price")
    const dispatch = useDispatch()
    // const change = (e) => {
    //     dispatch(PriceFilterAction(e.target.value))
    //     dispatch(fetchDataAction({price}))
    // }
    return (
        <>

            <select select value={price} onChange={(e) => {
                setPrice(e.target.value)
                dispatch(fetchDataAction({ sort: price }))
            }} className="form-select m-0 " aria-label="Default select example" >
                <option selected disabled>sort by price </option>
                <option value="-price">Price-Low to High</option>
                <option value="price">Price-High to Low</option>
            </select >
        </>
    )
}

export default SelectPrice
