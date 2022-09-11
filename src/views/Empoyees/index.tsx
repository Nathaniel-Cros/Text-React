import React from 'react';
import EmployeeList from '../../components/EmployeeList'
import {EmployeeContext} from '../../context/EmployeeContext';

const EmployeesView = () => {
    const employeeContext = React.useContext(EmployeeContext)
    React.useEffect(() => {
        employeeContext.getEmployees()
        // eslint-disable-next-line
    },[])
    return (
        <section className="w-full flex flex-col justify-center items-center">
            <h1 className="pt-2 text-2xl">Trabajadores</h1>
            <EmployeeList/>
        </section>
    )
}

export default EmployeesView
