"use client";

import { MyplanContext } from "@/app/context/MyplanContext";
import { useContext, useState } from "react";

export default function PlanToggle() {

        const { active, setActive } = useContext(MyplanContext);

    return (
        <div className="flex w-fit mt-10 rounded-xl border border-zinc-800 bg-[#14171d] p-1">
            {/* Today's Plan */}
            <button
                onClick={() => setActive("today")}
                className={`rounded-lg px-4 py-1.5 text-base transition-all ${active === "today"
                        ? "bg-[#20242c] font-semibold text-white shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
            >
                {`Today's Plan`}
            </button>

            {/* Saved */}
            <button
                onClick={() => setActive("saved")}
                className={`rounded-lg px-5 py-1.5 text-base transition-all ${active === "saved"
                        ? "bg-[#20242c] font-semibold text-white shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
            >
                Saved
            </button>
        </div>
    );
}