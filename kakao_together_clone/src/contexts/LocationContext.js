import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * @typedef {Object} Location
 * @property {string} pathname - 현재 URL 경로
 * @property {string} search - URL 쿼리 스트링
 */

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {

    const location = useLocation();
    const pathname = location.pathname;
    const search = location.search;

    return (
    <LocationContext.Provider value={{location, pathname, search}}>
        {children}
    </LocationContext.Provider>
    );
};

/**
 * useLocationContext 훅
 * @returns {Location} 현재 URL에 대한 Location 객체
 */
export const useLocationContext = () => useContext(LocationContext);
