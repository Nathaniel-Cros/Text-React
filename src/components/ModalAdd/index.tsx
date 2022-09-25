import React from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';

const ModalAdd = () => {
    const employeeContext = React.useContext(EmployeeContext)
    const [name, setName] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [date, setDate] = React.useState('1994/05/26')
    const [disabledSend, setDisabledSend] = React.useState(true)

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

    const closeModal = () => {
        setName('')
        setLastname('')
        setDate('')
        employeeContext.openAddModal(false)
    }

    const handleClickSend = async () => {
        console.log('handleClickSend', name, lastname, date)
        employeeContext.saveEmployees(name, lastname, date)
        closeModal()
    }

    React.useEffect( () => {
        if( name.length > 0 && lastname.length > 0 && date.length > 0 ) {
            setDisabledSend(false)
            return
        }
        setDisabledSend(true)
    },[name, lastname, date])

    if( !employeeContext.show ) return null;
    return (
        <>
            <section className='flex flex-col justify-center items-center w-screen h-screen bg-blue-800/50 fixed top-0 left-0'>
                <div className="flex flex-col justify-center items-center bg-white w-50 h-50 p-20 rounded gap-3">
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
                            onClick={closeModal}
                        >
                            Cancelar
                        </button>
                        <button
                            className={`p-4 ${disabledSend? 'bg-gray-600':'bg-blue-500'} rounded text-white`}
                            disabled={disabledSend}
                            onClick={handleClickSend}
                        >
                            Agragar
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ModalAdd