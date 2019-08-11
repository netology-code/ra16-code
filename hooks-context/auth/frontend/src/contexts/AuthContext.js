import {createContext} from 'react';

const AuthContext = createContext({
    token: null,
    profile: null
});

export default AuthContext;