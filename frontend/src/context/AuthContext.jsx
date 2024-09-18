import { createContext, useState, useContext, useEffect } from "react";
import axios from '../api/axios';
import Cookie from 'js-cookie';
import { set } from "react-hook-form";

export const AuthContext = createContext();

export const useAuth = () => {
    const cotext = useContext(AuthContext);
    if (!cotext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return cotext;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

    const signup = async (data) => {
        try {
            const res = await axios.post('/signup', data)
            setUser(res.data);
            setIsAuth(true);

            return res.data;
        }
        catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }

            return setErrors([error.response.data.message]);
        }
    }

    const signin = async (data) => {
        try {
            const res = await axios.post('/signin', data)
            setUser(res.data);
            setIsAuth(true);

            return res.data;
        }
        catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }

            return setErrors([error.response.data.message]);
        }
    };

    useEffect(() => {
        if (Cookie.get('token')) {
            axios.get('/profile')
                .then(res => {
                    setUser(res.data);
                    setIsAuth(true);
                })
                .catch(error => {
                    setUser(null);
                    setIsAuth(false);
                });
        }
    }, []);


    return <AuthContext.Provider
        value={{ user, isAuth, errors, signup, signin }}>
        {children}
    </AuthContext.Provider>;
}