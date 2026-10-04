"use client";
import React, { useContext } from 'react';
import EmptyStateContainer from './EmptyStateContainer';
import { MyplanContext } from '@/app/context/MyplanContext';
import HorizontalExerciseCard from './HorizontalExerciseCard';

const CardContainer = () => {

    const { saved, todaysPlan, active, sortby } = useContext(MyplanContext);

    const plans = active === "today" ? todaysPlan : saved;
    const sortField = {
        duration: "duration",
        sets: "sets",
        calories: "caloriesBurned",
    }[sortby];

    const sortedPlans = [...plans].sort(
        (first, second) => first[sortField] - second[sortField]
    );


    return (
        <div>
            {plans.length === 0 ? (
                <EmptyStateContainer />
            ) : (
                sortedPlans.map(plan => (
                    <HorizontalExerciseCard
                        key={plan.id}
                        plan={plan}
                        today={active === "today"}
                    />
                ))
            )}
        </div>
    );
};

export default CardContainer;