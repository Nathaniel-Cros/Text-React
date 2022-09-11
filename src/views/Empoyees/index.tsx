import React from 'react';
import EmployeeList from '../../components/EmployeeList'
import Pagination from '../../components/Pagination';

const EmployeesView = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center'>
            <h1 className='pt-2 text-2xl'>Trabajadores</h1>
            <EmployeeList/>
            <Pagination/>
        </section>
    )
}

export default EmployeesView
