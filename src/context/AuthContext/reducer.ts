import { AuthC, UserInfo } from '../../interfaces/AuthC'

type AuthActions =
    | { type: 'login', payload: AuthC }
    | { type: 'logout', payload: AuthC }
    | { type: 'userInfo', payload: UserInfo | null }

export const AuthReducer = (state: AuthC, action: AuthActions): AuthC => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isLogin: true
            };
        case 'logout':
            return {
                ...state,
                isLogin: false
            }
        case 'userInfo':
            return{
                ...state,
                userInfo: action.payload
            }
        default:
            return state;
    }
}
