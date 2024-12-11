'use client'

import Link from "next/link";

interface IconButtonProps {
    icon: any;
    href: string;
}

const IconButton = ({ icon, href }: IconButtonProps) => {
    return <Link href={href}>
        <button className="p-2 rounded-default hover:bg-primary-darken duration-200 [&>*]:hover:stroke-sky-500 [&>*]:duration-200 [&>*]:size-7">
            {icon}
        </button>
    </Link>
}

export default IconButton;
