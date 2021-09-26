import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fetchDataAction from '../../../Redux/FetchProducts/action';
import Loader from '../../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';

const ProductsListView = () => {
    const { products, loading } = useSelector(({ products }) => products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataAction())
    }, [dispatch])
    return (
        <>
            {
                loading ? <Loader /> :
                    products.map(product => (
                        <div className="col-md-9">
                            <ProductItem
                                key={product._id}
                                {...product}
                            />
                        </div>
                    ))
            }
        </>
    )
}

export default ProductsListView
