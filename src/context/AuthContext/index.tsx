import React from 'react';
import {AuthC} from '../../interfaces/AuthC';

export const AuthContext = React.createContext<AuthC>({} as AuthC)
