import usertypes from "./UserTypes";

const initialState = {
    userInfo: {},
    loading: false,
    err: {},
    isLogginIn: false
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // USER_REGISTER
        case usertypes.USER_REGISTER_REQUEST:
            return {
                ...state,
                userInfo: {},
                loading: true,
                err: {}
            }
        case usertypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                loading: false,
                err: {},
                isLogginIn: true

            }
        case usertypes.USER_REGISTER_ERROR:
            return {
                ...state,
                userInfo: {},
                loading: false,
                err: action.payload,
            }
        // USER_LOGIN
        case usertypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                userInfo: {},
                loading: true,
                err: {}
            }
        case usertypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                loading: false,
                err: {},
                isLogginIn: true

            }
        case usertypes.USER_LOGIN_ERROR:
            return {
                ...state,
                userInfo: {},
                loading: false,
                err: action.payload
            }
        // USER_LOGOUT
        case usertypes.USER_LOGOUT:
            return {
                ...state,
                userInfo: {},
                isLogginIn: false

            }
        case usertypes.CLEAR_TOKEN:
            return {
                ...state,
                userInfo: {},
                isLogginIn: false

            }



        default:
            return state
    }

}

export default userReducer