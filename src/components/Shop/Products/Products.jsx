import React from 'react'
import style from './Products.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchDataAction from '../../../Redux/FetchProducts/action'
import { Link } from 'react-router-dom'
import Loader from '../../Loader/Loader'

const Products = () => {
    const { products, loading } = useSelector(({ products }) => products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataAction())
    }, [dispatch])
    console.log(products);
    return (
        <>
            <div className="row">
                {
                    loading ? <Loader /> :
                        products.map(product => (
                            <div key={product.id} className={`${style.main}   col-md-3 `} >
                                <h6 className={`${style.heading}  text`}>{product.category}</h6>
                                <p className={style.paragraph}>{product.name}</p>
                                <Link to={`/products/${product.id}`}>
                                    <img className={style.img} src={product.image} alt="" />
                                </Link>
                                <p>${product.price}    <del className={`${style.DeletedText}  deleted`}>$300</del> </p>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default Products
