"use client";
import React, { useContext } from 'react';
import EmptyStateContainer from './EmptyStateContainer';
import { MyplanContext } from '@/app/context/MyplanContext';
import HorizontalExerciseCard from './HorizontalExerciseCard';

const CardContainer = () => {

    const { saved, todaysPlan, active, setActive } = useContext(MyplanContext);

    const plans = active === "today" ? todaysPlan : saved;
    return (
        <div>
            {plans.length === 0 ? (
                <EmptyStateContainer />
            ) : (
                plans.map(plan => (
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