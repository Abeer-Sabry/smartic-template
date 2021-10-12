import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchDataAction from '../../../Redux/FetchProducts/action'
import Loader from '../../Loader/Loader'
import ProductItem from '../ProductItem/ProductItem'

const Products = () => {
  const { products, loading } = useSelector(({ products }) => products);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDataAction())
  }, [dispatch])
  // console.log(products);
  return (
    <>
      <div className="row">
        {
          loading ? <Loader /> :
            products.map(product => (
              <div className="col-md-3">
                <ProductItem
                  key={product._id}
                  {...product}
                />
              </div>
            ))
        }
      </div>
    </>
  )
}



export default Products;
