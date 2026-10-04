import React from 'react';
import Image from 'next/image';
import { CalendarPlus, Bookmark } from 'lucide-react';
import TodaysPlanButton from '@/components/exerciseButtons/TodaysPlanButton';
import SavedButton from '@/components/exerciseButtons/SavedButton';
import { notFound } from 'next/navigation';

// const data = {
//     id: 1,
//     name: "Barbell Bench Press",
//     image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
//     muscleGroups: [
//         "Chest",
//         "Arms"
//     ],
//     equipment: "Barbell, Bench",
//     difficulty: "Intermediate",
//     duration: 25,
//     caloriesBurned: 180,
//     sets: 4,
//     reps: "6-8",
//     rating: 4.8,
//     description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
//     instructions: [
//         "Lie on the bench with eyes under the bar and feet planted.",
//         "Unrack with locked elbows and lower the bar to mid-chest.",
//         "Press up in a slight arc until elbows lock without bouncing.",
//         "Keep shoulder blades pinched and a natural arch in the back."
//     ]
// };

export default async function ExerciseDetails({params}) {

    const { id } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (res.status === 404) {
        notFound();
    }
    if (!res.ok) {
        throw new Error(`Could not load exercise ${id}: ${res.status}`);
    }
    const data = await res.json();
    console.log(data, "data");

    // Helper array to easily map through the stats in the UI
    const stats = [
        { label: "Equipment", value: data.equipment },
        { label: "Difficulty", value: data.difficulty },
        { label: "Sets", value: data.sets },
        { label: "Reps", value: data.reps },
        { label: "Duration", value: `${data.duration} min` },
        { label: "Calories", value: `${data.caloriesBurned} kcal` },
        { label: "Rating", value: data.rating },
    ];

    return (
        
        <div className="flex min-h-screen items-center justify-center p-4 font-sans text-white sm:p-6">
            <div className="max-w-6xl w-full mx-auto">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">

                    {/* Left Column: Image */}
                    <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={data.image}
                            alt={data.name}
                            width={1200}
                            height={1200}
                            className="h-full min-h-64 w-full object-cover sm:min-h-100 lg:min-h-full"
                        />
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col py-2">

                        {/* Title & Description */}
                        <h1 className="mb-3 wrap-break-word text-3xl font-bold uppercase tracking-wide sm:text-4xl">
                            {data.name}
                        </h1>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            {data.description}
                        </p>

                        {/* Muscle Group Tags */}
                        <div className="mb-6">
                            {data.muscleGroups.map((group, index) => (
                                <span
                                    key={index}
                                    className="bg-[#C7F22A] text-black text-xs font-bold px-3 py-1.5 rounded-full inline-block mr-2 uppercase tracking-wide"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* Stats Box */}
                        <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl overflow-hidden mb-8 shadow-sm">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between px-5 py-3 ${index !== stats.length - 1 ? 'border-b border-[#2a2a2c]' : ''
                                        }`}
                                >
                                    <span className="uppercase text-gray-500 text-xs font-semibold tracking-wider">
                                        {stat.label}
                                    </span>
                                    <span className="max-w-[60%] wrap-break-word text-right text-sm font-medium text-white">
                                        {stat.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Instructions */}
                        <div className="mb-2">
                            <h3 className="uppercase font-bold text-sm tracking-widest mb-4">
                                Instructions
                            </h3>
                            <ol className="list-decimal pl-4 text-gray-400 space-y-3 text-sm marker:text-gray-500">
                                {data.instructions.map((step, index) => (
                                    <li key={index} className="pl-2 leading-relaxed">
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <TodaysPlanButton exerciseData={data}/> 

                            <SavedButton exerciseData={data}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

