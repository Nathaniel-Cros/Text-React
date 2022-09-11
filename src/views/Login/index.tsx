import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'
import {Remember} from '../../interfaces/Remember';

const HomeLoginView = () => {
    const navigation = useNavigate()
    const authContext = React.useContext(AuthContext)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [remember, setRemember] = React.useState(false)

    React.useEffect(() => {
        if( authContext.isLogin ) {
            navigation('/employee',{ replace: true })
        }
        // eslint-disable-next-line
    }, [authContext])
    React.useEffect(() => {
        const remember = localStorage.getItem('remember')
        if( remember && JSON.parse(remember).remember ) {
            const data:Remember = JSON.parse(remember)
            setRemember(data.remember)
            setEmail(data.data.email)
            setPassword(data.data.password)
        }
    },[])

    const handleChangeEmail = (e:any) => {
        setEmail(e.value)
    }
    const handleChangePassword = (e:any) => {
        setPassword(e.value)
    }
    const handleChangeRemember = (e:any) => {
        setRemember(e.checked)
    }
    const clickLogin = () => {
        authContext.Login({ username:'Nathaniel', email:'osc@natha.com'})
    }

    return (
        <section className='w-full min-h-[80vh] flex flex-row justify-center items-center'>
            <>
                <div className='flex min-h-full min-w-[50%] items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='w-full max-w-md space-y-8'>
                        <div>
                            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                                Login
                            </h2>
                        </div>
                        <form className='mt-8 space-y-6' action='#' method='POST'>
                            <input type='hidden' name='remember' defaultValue='true' />
                            <div className='-space-y-px rounded-md shadow-sm'>
                                <div>
                                    <label htmlFor='email-address' className='sr-only'>
                                        Email address
                                    </label>
                                    <input
                                        id='email-address'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        required
                                        className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                        placeholder='Email address'
                                        value={email}
                                        onChange={handleChangeEmail}
                                        onPaste={(e)=>{e.preventDefault();}}
                                        onCopy={(e)=>{e.preventDefault();}}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='password' className='sr-only'>
                                        Password
                                    </label>
                                    <input
                                        id='password'
                                        name='password'
                                        type='password'
                                        autoComplete='current-password'
                                        required
                                        className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                        placeholder='Password'
                                        value={password}
                                        onChange={handleChangePassword}
                                        onPaste={(e)=>{e.preventDefault();}}
                                        onCopy={(e)=>{e.preventDefault();}}
                                    />
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <input
                                        id='remember-me'
                                        name='remember-me'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        checked={remember}
                                        onChange={handleChangeRemember}
                                    />
                                    <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    type='button'
                                    className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                    onClick={clickLogin}
                                >
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                      <LockClosedIcon className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400' aria-hidden='true' />
                                    </span>
                                    Iniciar de sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </section>
    )
}

export default HomeLoginView
