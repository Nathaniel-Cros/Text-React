import React from 'react';
import {EmployeeContext} from '../../context/EmployeeContext';
import EmployeeItem from '../EmployeeItem';

const EmployeeList = () => {
    const employeeContext = React.useContext(EmployeeContext)
    const { employeesFiltered } = employeeContext
    return (
        <div className='w-full p-4 flex flex-col gap-4'>
            { employeesFiltered.length > 0 &&
                employeesFiltered.map( (employee, index) => (
                    <EmployeeItem key={`employeeItem-${index}`} employee={employee}/>
                ))
            }
        </div>
    )
}

export default EmployeeList
