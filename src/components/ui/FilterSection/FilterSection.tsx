'use client'

import { useState } from "react";

interface FilterSectionProps {
    title: string;
    children?: any;
    canOpen?: boolean;
}

const FilterSection = ({ title, children }: FilterSectionProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return <div
        onClick={() => { setOpen(!open) }}
        className="bg-blue-100"
    >
        <div className="flex justify-between items-center p-4 select-none text-sm font-bold">
            <p>{title.toUpperCase()}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 stroke-2 ${ open && 'rotate-180' }`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
        {
            open && <div className="p-4">
                {children}
            </div>
        }
    </div>
}

export default FilterSection;
