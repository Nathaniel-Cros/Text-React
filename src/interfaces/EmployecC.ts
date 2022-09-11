import { Employee } from './ResponseEmployees';

export interface EmployeeC {
    employees: Employee[]
    getEmployees: () => void
}
