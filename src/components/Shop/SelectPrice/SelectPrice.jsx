import React from 'react'
import './SelectPrice.module.css'
const SelectPrice = () => {
    return (
        <>
            <select className="form-select m-0 " aria-label="Default select example">
                <option selected>sort by price </option>
                <option value="1">Price-Low to High</option>
                <option value="2">Price-High to Low</option>
            </select>

        </>
    )
}

export default SelectPrice
