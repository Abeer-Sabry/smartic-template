import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import addToCartAction from '../../../Redux/Cart/action';
import fetchDataAction from '../../../Redux/FetchProducts/action';
import Loader from '../../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';
import style from '../Products/Products.module.css'

const ProductsGridView = () => {
    const { products, loading } = useSelector(({ products }) => products);
    // const { text } = useSelector(({ Search }) => Search)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataAction())
    }, [dispatch])
    return (
        <div>
          
            <div className="row">
                {
                    loading ? <Loader /> :
                        products.map(product => (
                            <div className="col-md-3">
                                <ProductItem
                                    key={product._id}
                                    {...product}
                                />
                               <div className="text-center mb-5">
                               <button onClick={()=>dispatch(addToCartAction(product))} className={`${style.button}  mb-5 bg-color text-white px-3 py-1`}>Add To Cart</button>
                               </div>
                            </div>
                        ))
                    
                }
            </div>
        </div>
    )
}

export default ProductsGridView
