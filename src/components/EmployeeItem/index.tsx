import React from 'react';
import { Employee } from '../../interfaces/ResponseEmployees'

interface PropsEmployeeItem{
    employee: Employee
}

const EmployeeItem = ({employee}: PropsEmployeeItem) => {
    return (
        <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Trabajador {employee.id}</h3>
            </div>
            <div className='border-t border-gray-200'>
                <dl>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>Nombre(s)</dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{employee.name}</dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>Apellido(s)</dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{employee.last_name}</dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>Cumpleaños</dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{
                            new Intl.DateTimeFormat("es-MX", {
                                dateStyle: "short",
                            }).format(new Date(employee.birthday))
                        }</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default EmployeeItem
