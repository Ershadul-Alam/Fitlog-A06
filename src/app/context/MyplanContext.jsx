"use client";
import React, { createContext, useState } from 'react';

export const MyplanContext = createContext({});

const MyplanProvider = ({ children }) => {
    const [todaysPlan, setTodaysPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    return (
        <MyplanContext.Provider value={{ todaysPlan, setTodaysPlan, saved, setSaved }}>
            {children}
        </MyplanContext.Provider>
    );
};

export { MyplanContext };
export default MyplanProvider;