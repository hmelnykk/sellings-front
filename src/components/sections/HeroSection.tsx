'use client'

import { useState } from "react";
import HeroSidebar from "../HeroSection__Sidebar/HeroSidebar";

const HeroSection = () => {
    const [selectedState, setSelectedState] = useState<number>();

    return <main className="container mx-auto flex">
        <HeroSidebar onChange={(value) => {setSelectedState(value)}} />
        <div className="flex-grow">{selectedState}</div>
    </main>
}

export default HeroSection;
