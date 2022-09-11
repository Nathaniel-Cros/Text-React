import React from 'react';
import { EmployeeContext } from './index';
import { ChildrenProps } from '../../interfaces/childrenProps';
import {EmployeeReducer} from './reducer';
import {EmployeeC} from '../../interfaces/EmployecC';
import GetEmployees from '../../Services/getEmployees';
import {Employee, ResponseEmployees} from "../../interfaces/ResponseEmployees";

const INITIAL_STATE: EmployeeC = {
    employees: [],
    employeesFiltered: [],
    pagination: 1,
    maxPages: 0,
    searchFilter: false,
    getEmployees: ()=>{},
    filteredEmployees: (allEmployees:Employee[], init: number, end:number)=>{},
    searchEmployees: (allEmployees:Employee[], search: string)=>{}
}

export const EmployeeProvider = ({children}:ChildrenProps) => {

    const getEmployees = async () => {
        const Employees:ResponseEmployees = await GetEmployees()

        if( Employees.success ) {
            let MaxPages = parseInt(`${Employees.data.employees.length/10}`)
            MaxPages = (MaxPages*10) < Employees.data.employees.length? MaxPages+1:MaxPages;
            dispatch({type: 'getEmployees', payload: Employees.data.employees})
            dispatch({type: 'maxPages', payload: MaxPages})
            await filteredEmployees(Employees.data.employees, 0, 10)
        }
    }

    const filteredEmployees = async (allEmployees:Employee[], init:number, end:number) => {
        const employeeFilter = allEmployees.slice(init, end)
        dispatch({type: 'filteringEmployees', payload: employeeFilter})
        dispatch({type: 'pagination', payload: end/10})
    }

    const searchEmployees = async (allEmployees:Employee[], search:string) => {
        try {
            dispatch({type: 'searchActive', payload: search.length > 0})
            if (search.length > 0) {
                const employeeSearch = allEmployees.filter((employee) => employee.name.toLowerCase().includes(search.toLowerCase()) ||
                    employee.last_name.toLowerCase().includes(search.toLowerCase()))
                dispatch({type: 'filteringEmployees', payload: employeeSearch})
                return
            }
            filteredEmployees(allEmployees, 1, 10)
        } catch (e) {
            console.log(e)
        }
    }

    const [employeeState, dispatch] = React.useReducer(EmployeeReducer, {
        ...INITIAL_STATE,
        getEmployees,
        filteredEmployees,
        searchEmployees,
    })

    React.useEffect(() => {
        getEmployees()
        // eslint-disable-next-line
    },[])

    return (
        <EmployeeContext.Provider value={{
            ...employeeState,
            getEmployees,
            filteredEmployees,
            searchEmployees,
        }}>
            {children}
        </EmployeeContext.Provider>
    )
}
