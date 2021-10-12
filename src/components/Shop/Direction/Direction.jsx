import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Direction.module.css'
import ProductGridAction, { ProductListAction } from '../../../Redux/ProductView/action'
const Direction = () => {
  const { gridView } = useSelector(({ view }) => view)
  const dispatch = useDispatch()
  return (
    <>
      <span className={`${gridView ? 'color' : 'text2'}  mr-2`}>
        <i onClick={() => dispatch(ProductGridAction())} className="fas fa-th"></i>
      </span>
      <span className={!gridView ? 'color' : 'text2'}>
        <i onClick={() => dispatch(ProductListAction())} className="fas fa-list"></i>
      </span>
    </>
  )
}

export default Direction
