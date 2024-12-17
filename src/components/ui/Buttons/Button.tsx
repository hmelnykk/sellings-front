'use client'

import React from "react";

interface ButtonProps {
    name: string;
    className?: string;
    icon?: React.ReactNode;
}

const Button = ({ name, className, icon }: ButtonProps) => {
    return <button className={`p-3 text-primary rounded-default duration-200 bg-primary-darken border ${className}`}>
        {icon}
        {name}
    </button>
}

export default Button;
