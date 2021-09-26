import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fetchDataAction from '../../../Redux/FetchProducts/action';
import Loader from '../../Loader/Loader';
import ProductItem from '../ProductItem/ProductItem';

const ProductsGridView = () => {
    const { products, loading } = useSelector(({ products }) => products);
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
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default ProductsGridView
