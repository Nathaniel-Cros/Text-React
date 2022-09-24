import React from 'react';
import {EmployeeContext} from '../../context/EmployeeContext';

const FavButtonAdd = () => {

    const employeeContext = React.useContext(EmployeeContext)

    const handleOnclick = (e: React.MouseEvent) => {
        console.log('handleOnclick FavButtonAdd', e)
        employeeContext.openAddModal(true)
    }

    return (
        <>
            <div className="fixed bottom-10 right-10">
                <button
                    onClick={(e) => (handleOnclick(e))}
                    className="flex items-center justify-center rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-14 h-14"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default FavButtonAdd