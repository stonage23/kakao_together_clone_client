import React, { createContext, useContext, useState } from 'react';

const LoginStateContext = createContext();

/**
 * @typedef {Object} LoginContextType
 * @property {boolean} isLoggedIn - 로그인 상태
 * @property {Function} login - 로그인 함수
 * @property {Function} logout - 로그아웃 함수
 */
const LoginStateProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /**
     * @description 이 함수는 사용자가 로그인할 때 호출됩니다.
     */
    const login = () => setIsLoggedIn(true);

    /**
     * @description 이 함수는 사용자가 로그아웃할 때 호출됩니다.
     */
    const logout = () => setIsLoggedIn(false);


    
    return (
        <LoginStateContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </LoginStateContext.Provider>
    );
};

/**
 * @description 로그인 상태와 로그인/로그아웃 함수를 제공하는 훅
 * @returns {LoginContextType} 로그인 상태와 로그인/로그아웃 함수
 */
const useLoginState = () => useContext(LoginStateContext);

export { LoginStateProvider, useLoginState };
