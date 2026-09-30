"use client";
import React, { createContext, useState } from 'react';

export const MyplanContext = createContext({});

const MyplanProvider = ({ children }) => {
    const [todaysPlan, setTodaysPlan] = useState([]);
    const [saved, setSaved] = useState([]);
        const [active, setActive] = useState("today");

    return (
        <MyplanContext.Provider value={{ todaysPlan, setTodaysPlan, saved, setSaved, active, setActive}}>
            {children}
        </MyplanContext.Provider>
    );
};

export { MyplanContext };
export default MyplanProvider;