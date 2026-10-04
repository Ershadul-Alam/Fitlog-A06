"use client";

import { MyplanContext } from "@/app/context/MyplanContext";
import { useContext } from "react";

const Sortby = () => {

    const { sortby, setSortby } = useContext(MyplanContext);



    return (
        <select 
        value={sortby}
        onChange={(e)=> setSortby(e.target.value)}
        defaultValue="Pick a color" 
        className="select w-full appearance-none sm:w-auto">
                <option disabled={true}>Sort By</option>
                <option value={"duration"}>Duration</option>
                <option value={"sets"}>Sets</option>
                <option value={"calories"}>Calories</option>
            </select>
    );
};

export default Sortby;