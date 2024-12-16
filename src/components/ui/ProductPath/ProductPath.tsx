'use client'

const pathItem = {
    name: '',
    href: '',
}

interface PathItem {
    name: string;
    href: string;
}

interface ProductPathProps {
    path: PathItem[];
}

const ProductPath = ({ path }: ProductPathProps) => {

    return <nav className="flex gap-2 p-2 font-bold text-[12px] mb-4">
        {
            Array.from({ length: path.length }).map((_, idx) => {
                return <span key={idx} className="flex gap-2 items-center">
                    <a href={path[idx].href} className="text-primary">{path[idx].name.toUpperCase()}</a>
                    {
                        idx < path.length - 1 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    }
                </span>
            })
        }
    </nav>
}

export default ProductPath;
