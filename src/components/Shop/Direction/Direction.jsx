import React from 'react'
import { useDispatch } from 'react-redux'
import './Direction.module.css'
import ProductGridAction, { ProductListAction } from '../../../Redux/ProductView/action'
const Direction = () => {
  const dispatch = useDispatch()
  return (
    <>
      <span className="mr-2">
        <i onClick={() => dispatch(ProductGridAction())} className="fas fa-grip-horizontal"></i>
      </span>
      <span>
        <i onClick={() => dispatch(ProductListAction())} className="fas fa-th"></i>
      </span>
    </>
  )
}

export default Direction
