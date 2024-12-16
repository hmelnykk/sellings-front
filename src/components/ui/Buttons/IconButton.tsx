'use client'

import Link from "next/link";

interface IconButtonProps {
    icon: any;
    href: string;
    disabled?: boolean;
    onClick?: any;
}

const IconButton = ({ icon, href, disabled, onClick }: IconButtonProps) => {
    return <Link href={href}>
        <button
            disabled={disabled}
            className={`p-2 rounded-default
                ${disabled ? ''
                    : 'hover:bg-primary-darken duration-200 [&>*]:hover:stroke-sky-500 [&>*]:duration-200 [&>*]:size-6'}`
            }
            onClick={onClick}
        >
            {icon}
        </button>
    </Link>
}

export default IconButton;
