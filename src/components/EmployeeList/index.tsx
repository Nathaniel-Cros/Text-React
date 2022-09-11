import React from 'react';
import {EmployeeContext} from '../../context/EmployeeContext';
import EmployeeItem from '../EmployeeItem';

const EmployeeList = () => {
    const employeeContext = React.useContext(EmployeeContext)
    const { employees } = employeeContext
    return (
        <div className='w-full p-4 flex flex-col gap-4'>
            { employees.length > 0 &&
                employees.map( (employee, index) => (
                    <EmployeeItem key={`employeeItem-${index}`} employee={employee}/>
                ))
            }
        </div>
    )
}

export default EmployeeList
