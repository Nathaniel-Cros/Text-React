import React from 'react';
import EmployeeList from '../../components/EmployeeList'
import Pagination from '../../components/Pagination';
import SearchInput from '../../components/SearchInput';
import FavButtonAdd from '../../components/FavButtonAdd';
import ModalPortal from '../../components/ModalPortal';
import ModalAdd from '../../components/ModalAdd';


const EmployeesView = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center'>
            <h1 className='pt-2 text-2xl my-2'>Trabajadores</h1>
            <SearchInput/>
            <EmployeeList/>
            <Pagination/>
            <ModalPortal>
                <ModalAdd/>
            </ModalPortal>
            <FavButtonAdd/>
        </section>
    )
}

export default EmployeesView
