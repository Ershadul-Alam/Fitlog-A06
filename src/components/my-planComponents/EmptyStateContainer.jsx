import Link from 'next/link';
import React from 'react';

const EmptyStateContainer = () => {
    return (
        <div className="w-full mt-6 rounded-2xl border border-dashed border-zinc-800 bg-[#0d0f12] px-6 py-16">
            <div className="flex min-h-[260px] flex-col items-center justify-center text-center">

                {/* Heading */}
                <h2 className="text-2xl font-black tracking-wide text-white">
                    NOTHING HERE YET
                </h2>

                {/* Description */}
                <p className="mt-2 text-base text-zinc-400">
                    Browse the library and add a lift to get today moving.
                </p>

                {/* Button */}
                <Link href={"/"}>
                <button
                    className="
            mt-8
            rounded-full
            bg-lime-400
            px-8
            py-3
            font-semibold
            text-black
            shadow-[0_10px_25px_rgba(163,230,53,0.15)]
            transition
            hover:bg-lime-300
            hover:shadow-[0_10px_30px_rgba(163,230,53,0.25)]
          "
                >
                    Go to workouts
                </button>
                </Link>
            </div>
        </div>
    );
};

export default EmptyStateContainer;