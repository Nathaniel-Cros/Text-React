export interface ResponseEmployees {
    success: boolean
    data: DataEmployees
}

export interface DataEmployees {
    employees: Employee[]
}

export interface Employee {
    id: number
    name: string
    last_name: string
    birthday: number
}
