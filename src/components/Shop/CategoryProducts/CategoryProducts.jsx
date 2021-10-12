
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
      <h6 className="color">Category Products</h6>
      {products.slice(0, 4).map(product => (
        <div className='d-flex   position-relative '>
          <div className={`${style.main}    col-md-3 m-0 mr-2 p-0`}>
            <img className={style.img} src={product.image} alt="" />
          </div>
          <div className="col-md-7 m-0 p-0">
            <h6 className={`${style.heading}   color`}>{product.category}</h6>
            <p className={`${style.paragraph}  text`}>{product.name}</p>
            <p className={`${style.price} `}>${product.price}  <del className='deleted'>$300</del> </p>
          </div>

        </div>
      ))}
      <div className={style.border} ></div>
    </>
  )
}

export default CategoryProducts;
