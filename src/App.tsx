import React from 'react';
import HeaderComponent from './components/Header';
import {AuthProvider} from './context/AuthContext/provider';
import {EmployeeProvider} from './context/EmployeeContext/provider';
import {
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './views/ProtectedRoutes';
import HomeLoginView from './views/Login';
import EmployeesView from './views/Empoyees';
import UploadView from './views/Upload';

function App() {
    return (
    <AuthProvider>
        <HeaderComponent />
        <EmployeeProvider>
            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                <Routes>
                    <Route
                        path='/'
                        element={<HomeLoginView/>}
                    />
                <Route element={<ProtectedRoutes/>}>
                    <Route
                        path='/employee'
                        element={<EmployeesView/>}
                    />
                    <Route
                        path='/upload'
                        element={<UploadView/>}
                    />
                </Route>
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </div>
        </EmployeeProvider>
    </AuthProvider>
    );
}

export default App;
