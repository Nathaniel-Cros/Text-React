import { Employee } from './ResponseEmployees';

export interface EmployeeC {
    employees: Employee[]
    employeesFiltered: Employee[]
    pagination: number
    maxPages: number
    searchFilter: boolean
    show: boolean
    getEmployees: () => void
    filteredEmployees: (allEmployees: Employee[], init: number, end: number) => void
    searchEmployees: (allEmployees: Employee[], search: string) => void
    openAddModal: (show: boolean) => void
    saveEmployees: (name: string, last_name: string, birthday: string) => void
}
