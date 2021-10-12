import axios from "axios";
import types from "./type";

const SingleProductAction = productId => async dispatch => {
  dispatch({
    type: types.FETCH_DETAILS_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `https://naga-electron.herokuapp.com/api/v1/products/${productId}`
    );
    const SingleProduct = data.product;
    console.log(data);
    dispatch({
      type: types.FETCH_DETAILS_SUCCESS,
      payload: SingleProduct,
    });


  } catch (err) {
    dispatch({
      type: types.FETCH_DETAILS_ERROR,
      payload: 'Not Found'
    })
  }
}
export default SingleProductAction



