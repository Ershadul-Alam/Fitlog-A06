"use client";
import React, { useContext } from 'react';
import EmptyStateContainer from './EmptyStateContainer';
import { MyplanContext } from '@/app/context/MyplanContext';
import HorizontalExerciseCard from './HorizontalExerciseCard';

const CardContainer = () => {

        const { saved, todaysPlan, active, setActive } = useContext(MyplanContext);
    return (
        <div>
            {todaysPlan.length === 0 ? (
                <EmptyStateContainer />
            ) : active === "today" ? (
                todaysPlan.map(plan => <HorizontalExerciseCard key={plan.id} plan={plan}/>)
                
            ) : saved.map(plan => <HorizontalExerciseCard key={plan.id} plan={plan}/>)}
        </div>
    );
};

export default CardContainer;