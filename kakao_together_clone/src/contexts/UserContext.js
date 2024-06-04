import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();

/**
 * @typedef {Object} UserContext
 * @property {Object} user - 로그인한 유저 정보
 * @property {string} user.id - 유저 고유 코드
 * @property {string} user.nickname - 로그인 아이디
 * @property {Function} login - 로그인 함수
 * @property {Function} logout - 로그아웃 함수
 */
const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    /**
     * @description 이 함수는 사용자가 로그인할 때 호출됩니다.
     */
    const login = (userData) => {
        const fetchUserData = async () => {
            const userData = await fetchUserFromAPI(); // Replace this with your actual API call
            if (userData) {
                setUser(userData);
            }
        };
    
        fetchUserData();
        // Optionally save to localStorage or cookie
    };

    /**
     * @description 이 함수는 사용자가 로그아웃할 때 호출됩니다.
     */
    const logout = () => {
        setUser(null);
        // Optionally remove from localStorage or cookie
    };


    
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

/**
 * @description 로그인 상태와 로그인/로그아웃 함수를 제공하는 훅
 * @returns {UserContext} 로그인 상태와 로그인/로그아웃 함수
 */
const useUserContext = () => useContext(UserContext);

// TODO 유저 정보 불러오는 API 및 함수 작성
const fetchUserFromAPI = async () => {
    // Simulate an API call to fetch user data
    return {
        id: "1",
        nickname: "yusg9603",
    };
};

export { UserContext, useUserContext, UserProvider };
