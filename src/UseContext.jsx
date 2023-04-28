import React from 'react'
import AppContext from './AppContext'
import { useState } from 'react'
import { useEffect } from 'react';

const UseContext = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        setIsLogin(false);
    }, [])
    return (
        <AppContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </AppContext.Provider>
    )
}

export default UseContext
