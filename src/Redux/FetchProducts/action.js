import Types from "./type"
import axios from "axios"
const fetchDataAction = (params) => async (dispatch) => {
    dispatch({
        type: Types.FETCH_DATA_REQUEST
    })
    // Query params
    // [lte] => less than or equal
    // [gte] => greater than or equal
    try {
        const products = await axios.get(`https://naga-electron.herokuapp.com/api/v1/products`, { params })
        const allproducts = products.data.products
        dispatch({
            type: Types.FETCH_DATA_SUCCESS,
            payload: allproducts
        })
    } catch (err) {
        dispatch({
            type: Types.FETCH_DATA_ERRORR,
            payload: 'Data Not Found'
        })
    }
}

export default fetchDataAction