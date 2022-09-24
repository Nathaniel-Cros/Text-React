import React from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';

const ModalAdd = () => {
    const employeeContext = React.useContext(EmployeeContext)
    const [name, setName] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [date, setDate] = React.useState('1994/05/26')

    const handleChange = ( e:any ) => {
        switch ( e.target.name ) {
            case 'name':
                setName( e.target.value )
                break;
            case 'lastname':
                setLastname( e.target.value )
                break;
            case 'date':
                setDate( e.target.value )
                break;
        }
    }

    if( !employeeContext.show ) return null;
    return (
        <>
            <section className='flex flex-col justify-center items-center w-screen h-screen bg-blue-800/50 fixed top-0 left-0'>
                <form className="flex flex-col justify-center items-center bg-white w-50 h-50 p-20 rounded gap-3">
                    <h1 className='text-2xl mb-2 font-bold'>
                        Agregar nuevo empleado
                    </h1>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='name'
                        >
                            Nombre
                        </label>
                        <input
                            className='rounded'
                            maxLength={30}
                            id='name'
                            name='name'
                            type='text'
                            value={name}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='lastname'
                        >
                            Apellido
                        </label>
                        <input
                            className='rounded'
                            maxLength={30}
                            id='lastname'
                            name='lastname'
                            type='text'
                            value={lastname}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='name'
                        >
                            Fecha de nacimiento
                        </label>
                        <input
                            className='rounded'
                            id='date'
                            name='date'
                            type='date'
                            value={date}
                            onChange={(e) => { handleChange(e) }}
                        />
                    </div>
                    <div className='flex flex-row gap-3'>
                        <button
                            className='p-4 bg-red-500 rounded text-white'
                            onClick={() => {
                                setName('')
                                setLastname('')
                                setDate('')
                                employeeContext.openAddModal(false)
                            }}
                        >
                            Cancelar
                        </button>
                        <button
                            className='p-4 bg-blue-500 rounded text-white'
                        >
                            Agragar
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default ModalAdd