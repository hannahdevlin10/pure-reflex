import React, { useState } from 'react';

export const MainContext = React.createContext(null);

export const MainProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activePage, setActivePage] = useState('');

    return (
        <MainContext.Provider value={{ isDrawerOpen, setIsDrawerOpen, activePage, setActivePage }}>
            { children }
        </MainContext.Provider>
    )
}