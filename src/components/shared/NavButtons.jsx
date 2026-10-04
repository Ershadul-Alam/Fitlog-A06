'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavButtons = () => {


const pathname = usePathname();

    return (
        <div className="flex items-center gap-1">
            {/* Workouts Link */}
                    <Link
                        href="/"
                        className={`whitespace-nowrap rounded-full px-1 py-1 text-[10px] font-medium transition-colors duration-200 sm:px-4 sm:py-1.5 sm:text-base ${pathname === "/"
                                ? "bg-[#1f2812] text-[#caff00]" // Active state styling
                                : "bg-transparent text-gray-400 hover:text-gray-300" // Inactive state styling
                            }`}
                    >
                        Workouts
                    </Link>

                    {/* My Plan Link */}
                    <Link
                        href="/my-plan"
                        className={`whitespace-nowrap rounded-full px-1 py-1 text-[10px] font-medium transition-colors duration-200 sm:px-4 sm:py-1.5 sm:text-base ${pathname === "/my-plan"
                                ? "bg-[#1f2812] text-[#caff00]"
                                : "bg-transparent text-[#8b929d] hover:text-gray-300"
                            }`}
                    >
                        My Plan
                    </Link>
        </div>
    );
};

export default NavButtons;