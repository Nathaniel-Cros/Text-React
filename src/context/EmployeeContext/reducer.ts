import { Employee } from '../../interfaces/ResponseEmployees';
import {EmployeeC} from '../../interfaces/EmployecC';

type EmployeeActions =
    | { type: 'getEmployees', payload: Employee[] }
    | { type: 'pagination', payload: number }
    | { type: 'maxPages', payload: number }
    | { type: 'filteringEmployees', payload: Employee[] }
    | { type: 'searchActive', payload: boolean }

export const EmployeeReducer = (state: EmployeeC, action: EmployeeActions): EmployeeC => {
    switch (action.type) {
        case 'getEmployees':
            return {
                ...state,
                employees: [...action.payload]
            };
        case 'pagination':
            return {
                ...state,
                pagination: action.payload
            }
        case 'maxPages':
            return {
                ...state,
                maxPages: action.payload
            }
        case 'filteringEmployees':
            return {
                ...state,
                employeesFiltered: [...action.payload]
            }
        case 'searchActive':
            return {
                ...state,
                searchFilter: action.payload
            }
        default:
            return state;
    }
}
