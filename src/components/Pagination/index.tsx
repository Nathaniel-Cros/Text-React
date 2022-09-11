import React from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Pagination = () => {
    const EmployeesC = React.useContext(EmployeeContext)
    const { employees, pagination, maxPages } = EmployeesC
    const [ initElement, setInitElement ] = React.useState(1)
    const [ endElement, setEndElement ] = React.useState(10)

    const changePagination = ( next:boolean ) => {
        const end = next? (pagination*10)+10:(pagination*10)-10
        setInitElement(end-9)
        setEndElement(end > employees.length? employees.length:end )
        console.log('Change Pagination', end, employees.length, end > employees.length? employees.length:end)
        EmployeesC.filteredEmployees( employees, end-10, end )
    }

    return (
        <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
            <div className='flex flex-1 justify-between sm:hidden'>
                <button
                    disabled={pagination === 0}
                    className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                >
                    Previous
                </button>
                <button
                    disabled={pagination === maxPages}
                    className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                >
                    Next
                </button>
            </div>
            <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
                <div>
                    <p className='text-sm text-gray-700'>
                        Del <span className='font-medium'>{initElement}</span> al <span className='font-medium'>{endElement}</span> de{' '}
                        <span className='font-medium'>{employees.length}</span> empleados
                    </p>
                </div>
                <div>
                    <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
                        <button
                            disabled={pagination === 1}
                            className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                            onClick={()=>{changePagination(false)}}
                        >
                            <span className='sr-only'>Previous</span>
                            <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
                        </button>
                        <button
                            disabled={pagination === maxPages}
                            className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                            onClick={()=>{changePagination(true)}}
                        >
                            <span className='sr-only'>Next</span>
                            <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination
