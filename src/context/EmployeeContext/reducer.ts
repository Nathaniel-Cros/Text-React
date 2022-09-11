import { Employee } from '../../interfaces/ResponseEmployees';
import {EmployeeC} from '../../interfaces/EmployecC';

type EmployeeActions =
    | { type: 'getEmployees', payload: Employee[] }

export const EmployeeReducer = (state: EmployeeC, action: EmployeeActions): EmployeeC => {
    switch (action.type) {
        case 'getEmployees':
            return {
                ...state,
                employees: [...action.payload]
            };
        default:
            return state;
    }
}
