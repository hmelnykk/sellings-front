'use client'

import Link from "next/link";
import React from "react";

interface IconButtonProps {
    icon: React.ReactNode;
    href: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}

const IconButton = ({ icon, href, disabled, className, onClick }: IconButtonProps) => {
    return <Link href={href} className={className}>
        <button
            disabled={disabled}
            className={`p-2 rounded-default
                ${disabled ? ''
                    : 'hover:bg-primary-darken duration-200 [&>*]:hover:stroke-sky-500 [&>*]:duration-200 [&>*]:size-6'}
            `}
            onClick={onClick}
        >
            {icon}
        </button>
    </Link>
}

export default IconButton;
