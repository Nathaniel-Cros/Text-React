import React from 'react';
import {EmployeeContext} from '../../context/EmployeeContext';

const SearchInput = () => {

    const employeeC = React.useContext(EmployeeContext)
    const [searchValue, setSearchValue] = React.useState('')

    const handleChangeSearch = (e:any) => {
        setSearchValue(e.target.value)
        employeeC.searchEmployees(employeeC.employees, e.target.value)
    }

    const clickClearSearch = () => {
        setSearchValue('')
        employeeC.searchEmployees(employeeC.employees, "")
    }

    return (
        <section className='w-full flex flex-row justify-between items-center'>
            <input
                type='text'
                name='search'
                id='searchInput'
                className='block w-10/12 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                placeholder='Search'
                value={searchValue}
                onChange={(e) => {
                    handleChangeSearch(e)
                }}
            />
            <button
                onClick={clickClearSearch}
                className='bg-blue-500 w-2/10 text-white p-2 rounded-md'
            >
                Limpiar busqueda
            </button>
        </section>
    )
}

export default SearchInput
