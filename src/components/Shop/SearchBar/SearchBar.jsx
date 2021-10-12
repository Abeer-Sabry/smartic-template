import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchDataAction from '../../../Redux/FetchProducts/action'
import searchProductAction from '../../../Redux/Search/action'

const SearchBar = () => {
    const dispatch = useDispatch()
    const { text } = useSelector(({ Search }) => Search)
    const onChange = (e) => {
        dispatch(searchProductAction(e.target.value))
    
    }
    const submit = (e) => {
        e.preventDefault();
        dispatch(fetchDataAction(text))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input onChange={onChange} className="col-md-7 bg-transparent px-4 py-1" type="text" placeholder="search" />
                {/* <input onChange={(e) => dispatch(searchProductAction(e.target.value))} className="col-md-7 bg-transparent px-4 py-1" type="text" placeholder="search" /> */}
            </form>
        </div>
    )
}

export default SearchBar
