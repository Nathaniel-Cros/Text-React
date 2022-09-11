import React from 'react';
import { EmployeeContext } from './index';
import { ChildrenProps } from '../../interfaces/childrenProps';
import {EmployeeReducer} from './reducer';
import {EmployeeC} from '../../interfaces/EmployecC';
import GetEmployees from '../../Services/getEmployees';
import {ResponseEmployees} from "../../interfaces/ResponseEmployees";

const INITIAL_STATE: EmployeeC = {
    employees: [],
    getEmployees: ()=>{},
}

export const EmployeeProvider = ({children}:ChildrenProps) => {

    const getEmployees = async () => {
        const Employees:ResponseEmployees = await GetEmployees()
        if( Employees.success ) {
            dispatch({type: 'getEmployees', payload: Employees.data.employees})
        }
    }

    const [employeeState, dispatch] = React.useReducer(EmployeeReducer, {...INITIAL_STATE, getEmployees})

    /*React.useEffect(() => {
        const AuthStorage = localStorage.getItem('AuthStorage')
        if( AuthStorage && JSON.parse(AuthStorage).isLogin ) {
            const AuthS = JSON.parse(AuthStorage)
            //console.log('AuthStorage',AuthS)
            dispatch({type: 'login', payload: {...INITIAL_STATE, isLogin: true}})
            dispatch({type: 'userInfo', payload: AuthS.userInfo})
        }
    }, [])*/

    return (
        <EmployeeContext.Provider value={{
            ...employeeState,
            getEmployees
        }}>
            {children}
        </EmployeeContext.Provider>
    )
}
