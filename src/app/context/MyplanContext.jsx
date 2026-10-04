"use client";
import React, { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';

export const MyplanContext = createContext({});

const MyplanProvider = ({ children }) => {
    const [todaysPlan, setTodaysPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [doneWorkouts, setDoneWorkouts] = useState([]);
    const [active, setActive] = useState("today");
    const [sortby, setSortby] = useState("duration");

    const markAsDone = (planId) => {
        setDoneWorkouts((current) =>
            current.includes(planId) ? current : [...current, planId]
        );
    };

    return (
        <MyplanContext.Provider value={{
            sortby,
            setSortby,
            todaysPlan,
            setTodaysPlan,
            saved,
            setSaved,
            active,
            setActive,
            doneWorkouts,
            markAsDone,
        }}>
            {children}
            <ToastContainer position="top-right" autoClose={2500} theme="dark" />
        </MyplanContext.Provider>
    );
};

export default MyplanProvider;