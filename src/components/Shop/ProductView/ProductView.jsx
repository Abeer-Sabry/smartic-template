import React from 'react'
import { useSelector } from 'react-redux'
import ProductsGridView from '../ProductsGridView/ProductsGridView'
import ProductsListView from '../ProductsListView/ProductsListView'

const ProductView = () => {
    const { gridView } = useSelector(({ view }) => view)
    

    return (
        <>
            {
                gridView ? <ProductsGridView /> : <ProductsListView />
            }
        </>
    )
}

export default ProductView
