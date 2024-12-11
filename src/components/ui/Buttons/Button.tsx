'use client'

interface ButtonProps {
    name: string;
    className?: string;
}

const Button = ({ name, className }: ButtonProps) => {
    return <button className={`p-3 text-primary rounded-default bg-primary-darken ${className}`}>
        {name}
    </button>
}

export default Button;
