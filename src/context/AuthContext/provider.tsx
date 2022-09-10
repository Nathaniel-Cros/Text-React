import React from 'react';
import { AuthContext } from './index';
import { ChildrenProps } from '../../interfaces/childrenProps';
import {AuthReducer} from './reducer';
import {AuthC} from '../../interfaces/AuthC';

const INITIAL_STATE: AuthC = {
    isLogin: false,
    userInfo: null,
}

export const AuthProvider = ({children}:ChildrenProps) => {
    const [authState, dispatch] = React.useReducer(AuthReducer, INITIAL_STATE)

    React.useEffect(() => {
        const AuthStorage = localStorage.getItem('AuthStorage')
        console.log('AuthStorage',AuthStorage)
        if( AuthStorage && JSON.parse(AuthStorage).isLogin ) {
            const AuthS = JSON.parse(AuthStorage)
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
