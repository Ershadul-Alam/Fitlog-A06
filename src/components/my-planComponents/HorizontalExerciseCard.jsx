'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import { Clock, Flame, Star, Check } from 'lucide-react';
import Link from 'next/link';
import HorizontalExerciseCardDismissIcon from './HorizontalExerciseCardDismissIcon';
import { MyplanContext } from '@/app/context/MyplanContext';
import { toast } from 'react-toastify';

export default function HorizontalExerciseCard({plan, today}) {
    const { doneWorkouts, markAsDone } = useContext(MyplanContext);
    const isWorkoutDone = today && doneWorkouts.includes(plan.id);

    return (
        <div className="text-white mt-4 mb-1 flex items-center justify-center font-sans">
            <div className="flex w-full max-w-272 items-center justify-between gap-2 rounded-2xl border border-[#27282e] bg-[#16171b] p-2 shadow-xl transition-all hover:border-[#383a42] sm:gap-4 sm:p-3 sm:pr-4 md:gap-6">
                <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4 md:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-800 sm:h-16 sm:w-30">
                        <Image
                            src={plan.image}
                            alt={plan.name}
                            width={120}
                            height={64}
                            className="size-full object-cover"
                        />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col text-left">
                        <h3 className="mb-0.5 wrap-break-word text-xs font-black uppercase leading-tight tracking-wide text-white sm:text-lg sm:tracking-wider md:text-xl">
                            {plan.name}
                        </h3>
                        <p className="mb-1.5 wrap-break-word text-[10px] font-medium leading-tight text-gray-400 sm:mb-2.5 sm:text-sm">
                            {plan.equipment}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-4 md:gap-5">
                            <div className="flex items-center gap-1">
                                <Clock size={13} className="shrink-0 text-[#d9f90f] sm:size-4" />
                                <span className="text-[10px] font-medium text-gray-300 sm:text-sm">{plan.duration}</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Flame size={13} className="shrink-0 text-[#d9f90f] sm:size-4" />
                                <span className="text-[10px] font-medium text-gray-300 sm:text-sm">{plan.caloriesBurned}</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Star size={13} className="shrink-0 text-[#d9f90f] sm:size-4" />
                                <span className="text-[10px] font-medium text-gray-300 sm:text-sm">{plan.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-24 shrink-0 flex-col items-stretch justify-center gap-1 sm:w-auto sm:flex-row sm:items-center sm:gap-2 md:gap-3">
                    <Link href={`/exercise/${plan.id}`}>
                        <button className="w-full whitespace-normal rounded-full border border-gray-600 bg-transparent px-1 py-1.5 text-center text-[10px] font-semibold leading-tight text-gray-200 transition-all hover:border-gray-400 hover:bg-[#27282e] sm:w-auto sm:whitespace-nowrap sm:px-3 sm:py-2.5 sm:text-sm md:px-5">
                            View Details
                        </button>
                    </Link>

                    {today ? (
                        <button
                            disabled={isWorkoutDone}
                            onClick={() => {
                                markAsDone(plan.id);
                                toast.success('Workout marked as done');
                            }}
                            className={`flex w-full flex-row items-center justify-center gap-1 whitespace-nowrap rounded-full px-1 py-1.5 text-center text-[9px] font-bold leading-tight sm:w-auto sm:gap-2 sm:px-3 sm:py-2.5 sm:text-sm md:px-5 ${
                                isWorkoutDone
                                    ? 'bg-[#2d2f32] text-[#dfe5b0] cursor-not-allowed'
                                    : 'bg-[#d9f90f] hover:bg-[#c2e00d] text-black'
                            }`}
                        >
                            <Check size={12} strokeWidth={2.5} className="shrink-0 sm:size-4.5" />
                            <span>{isWorkoutDone ? 'Workout Done' : 'Mark as Done'}</span>
                        </button>
                    ) : ''}

                    {today ? (
                        !isWorkoutDone && <HorizontalExerciseCardDismissIcon today={today} plan={plan} />
                    ) : (
                        <HorizontalExerciseCardDismissIcon today={today} plan={plan} />
                    )}
                </div>
            </div>
        </div>
    );
}