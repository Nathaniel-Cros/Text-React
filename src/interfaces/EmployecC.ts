import { Employee } from './ResponseEmployees';

export interface EmployeeC {
    employees: Employee[]
    employeesFiltered: Employee[]
    pagination: number
    maxPages: number
    searchFilter: boolean
    getEmployees: () => void
    filteredEmployees: (allEmployees: Employee[], init: number, end: number) => void
    searchEmployees: (allEmployees: Employee[], search: string) => void
}
