import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCartAction } from '../../Redux/Cart/action'

const DeleteIcon=({product})=> {
    const dispatch = useDispatch()
    return (
        <>
            <span className="text-danger" onClick={()=>dispatch(removeFromCartAction(product))}>
            <i className=" fas fa-trash-alt"></i>
            </span>
        </>
    )
}

export default DeleteIcon
