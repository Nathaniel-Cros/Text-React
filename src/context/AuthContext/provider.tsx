import React from 'react';
import { AuthContext } from './index';
import { ChildrenProps } from '../../interfaces/childrenProps';
import {AuthReducer} from './reducer';
import {AuthC, UserInfo} from '../../interfaces/AuthC';

const INITIAL_STATE: AuthC = {
    isLogin: false,
    userInfo: null,
    Login: () => {},
    Logout: () => {},
}

export const AuthProvider = ({children}:ChildrenProps) => {
    const Login = (userInfo:UserInfo) => {
        localStorage.setItem('AuthStorage', JSON.stringify({isLogin:true, userInfo}))
        dispatch({type: 'login', payload: {...INITIAL_STATE, isLogin: true}})
        dispatch({type: 'userInfo', payload: userInfo})
    }

    const Logout = () => {
        localStorage.removeItem('AuthStorage')
        dispatch({type: 'logout', payload: {...INITIAL_STATE}})
        dispatch({type: 'userInfo', payload: null})
    }

    const [authState, dispatch] = React.useReducer(AuthReducer, {...INITIAL_STATE, Login, Logout})

    React.useEffect(() => {
        const AuthStorage = localStorage.getItem('AuthStorage')
        if( AuthStorage && JSON.parse(AuthStorage).isLogin ) {
            const AuthS = JSON.parse(AuthStorage)
            //console.log('AuthStorage',AuthS)
            dispatch({type: 'login', payload: {...INITIAL_STATE, isLogin: true}})
            dispatch({type: 'userInfo', payload: AuthS.userInfo})
        }
    }, [])

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    )
}
