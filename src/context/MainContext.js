import React, { useState } from 'react';

export const MainContext = React.createContext(null);

export const MainProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <MainContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
            { children }
        </MainContext.Provider>
    )
}