import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Products/Products.module.css'
const ProductItem = product => {
    const { _id, category, name, image, price } = product
    return (
        <>
            <div className={`${style.main}   `} >
                <h6 className={`${style.heading}  text`}>{category}</h6>
                <Link to={`/products/${_id}`}>
                    <p className={style.paragraph}>{name}</p>
                    <img className={style.img} src={image} alt="" />
                </Link>
                <p>${price}    <del className={`${style.DeletedText}  deleted`}>$300</del> </p>
            </div>
        </>
    )
}

export default ProductItem
