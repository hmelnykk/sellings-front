'use client'

import { useState } from "react";

interface ContextMenuProps {
    title: string | any;
    children?: any;
}

const ContextMenu = ({ title, children }: ContextMenuProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const openContextMenu = open && children;

    return <div
        onMouseEnter={() => {
            setOpen(true);
        }}
        onMouseLeave={() => {
            setOpen(false);
        }}
        className="relative z-[64]"
    >
        <div className="flex gap-2 items-center">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
        {
            openContextMenu && <div className="absolute -translate-x-8 -translate-y-6 bg-white w-[120%] rounded-default shadow-md p-2">
                {children}
            </div>
        }
    </div>
}

export default ContextMenu;
