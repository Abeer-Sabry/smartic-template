import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchDataAction from '../../../Redux/FetchProducts/action'
import style from './CategoryProducts.module.css'
const CategoryProducts = () => {
    const { products } = useSelector(({ products }) => products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDataAction())
    }, [dispatch])
    return (
        <>
            <h5>Category Products</h5>
            {products.slice(0,4).map(product => (
                <div className='row position-relative '>
                    <div className={`${style.main}    col-md-4`}>
                        <img className={style.img} src={product.image} alt="" />
                    </div>
                    <div className="col-md-4">
                        <h6 className={`${style.heading}   color`}>{product.category}</h6>
                        <p className={`${style.paragraph}  text`}>{product.name}</p>
                        <p  className={`${style.price} deleted`}>${product.price}  <del>$300</del> </p>
                    </div>
                
                </div>
            ))}
                <div className={style.border} ></div>
        </>
    )
}

export default CategoryProducts
