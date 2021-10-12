import axios from "axios";
import usertypes from "./UserTypes";

// USER_REGISTER_ACTION
const userRegisterAction = (values) => async (dispatch) => {
    // console.log('new', values)
    dispatch({
        type: usertypes.USER_REGISTER_REQUEST
    })
    try {
        // const res = await axios.post('https://route-egypt-api.herokuapp.com/signup', values)
        const res = await axios.post(' https://naga-electron.herokuapp.com/api/v1/users/signup ', values)
        console.log(res)
        dispatch({
            type: usertypes.USER_REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: usertypes.USER_REGISTER_ERROR,
            payload: err.message
        })
    }
}
export default userRegisterAction

// USER_LOGIN_ACTION
export const userLoginAction = (values) => async (dispatch) => {
    dispatch({
        type: usertypes.USER_LOGIN_REQUEST
    })

    try {
        const { data } = await axios.post('https://naga-electron.herokuapp.com/api/v1/users/login',values)
        // const { data } = await axios.post('https://route-egypt-api.herokuapp.com/signin', userLogin)
        dispatch({
            type: usertypes.USER_LOGIN_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: usertypes.USER_LOGIN_ERROR,
            payload: err.message
        })
    }
}
// USER_LOGOUT_ACTION
export const userLogOut = () => ({
    type: usertypes.USER_LOGOUT,
})