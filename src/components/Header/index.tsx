/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {AuthContext} from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';

const HeaderComponent:React.FC = () => {
    const navigation = useNavigate()
    const authContext = React.useContext(AuthContext);
    const { isLogin } = authContext

    const logoutClick = () => {
        authContext.Logout()
        navigation('/', { replace: true })
    }

    return (
        <Popover className='relative bg-white'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
                    <div className='flex justify-start lg:w-0 lg:flex-1'>
                        <a href='/'>
                            <span className='sr-only'>Your Company</span>
                            <img
                                className='h-8 w-auto sm:h-10'
                                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                                alt=''
                            />
                        </a>
                    </div>
                    <div className='-my-2 -mr-2 md:hidden'>
                        <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only'>Open menu</span>
                            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                    </div>
                    { isLogin &&
                        <>
                            <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
                                <a href='/employee' className='text-base font-medium text-gray-500 hover:text-gray-900'>
                                    Employee
                                </a>
                                <a href='/upload' className='text-base font-medium text-gray-500 hover:text-gray-900'>
                                    Upload
                                </a>
                            </Popover.Group>
                            <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
                                <button
                                    onClick={logoutClick}
                                    className='bg-red-500 p-2 rounded-lg text-white whitespace-nowrap text-base font-medium hover:text-gray-900'
                                >
                                    Cerrar sesion
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>

            <Transition
                as={Fragment}
                enter='duration-200 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                <Popover.Panel focus className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'>
                    <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='px-5 pt-5 pb-6'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <img
                                        className='h-8 w-auto'
                                        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                                        alt='Your Company'
                                    />
                                </div>
                                <div className='-mr-2'>
                                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                        <span className='sr-only'>Close menu</span>
                                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        {isLogin &&
                            <>
                                <div className='space-y-6 py-6 px-5'>
                                    <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                                        <a href='/employee'
                                           className='text-base font-medium text-gray-900 hover:text-gray-700'>
                                            Employee
                                        </a>

                                        <a href='/upload'
                                           className='text-base font-medium text-gray-900 hover:text-gray-700'>
                                            Upload
                                        </a>
                                    </div>
                                    <div>
                                        <p className='mt-6 text-center text-base font-medium text-gray-500'>
                                            <button onClick={logoutClick} className='w-full p-2 bg-red-500 rounded-lg text-white hover:text-indigo-500'>
                                                Cerrar Sesión
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default HeaderComponent
