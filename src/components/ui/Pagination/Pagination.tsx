'use client'

import { useState } from "react";
import IconButton from "../Buttons/IconButton";

const Pagination = ({ pages }: { pages: number }) => {
    const [activePage, setActivePage] = useState<number>(1);
    const visiblePages = activePage <= 3 ?
        [
            1, 2, 3, 4, pages
        ]
        :
        [
            activePage - 2, activePage - 1, activePage, activePage + 1
        ]

    return <div className="flex w-fit mx-auto gap-4">
        <IconButton
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            }
            href=""
            disabled={activePage === 1}
            onClick={() => {setActivePage(activePage - 1)}}
        />

        <div className="flex-grow grid grid-cols-6 gap-4 text-sm font-bold">
            {
                visiblePages.slice(0, 4).map((el, idx) => (
                    <>
                        <button
                            key={idx}
                            className={`
                                rounded-default p-2 duration-100 hover:text-primary hover:bg-primary
                                ${el === activePage && 'text-primary bg-primary'}
                            `}
                            onClick={() => {setActivePage(el)}}
                        >
                            {el}
                        </button>
                    </>
                ))
            }
            <div className="rounded-default p-2 text-gray-400">
                ...
            </div>

            <button
                onClick={() => {setActivePage(pages)}}
                className={`
                    rounded-default p-2 duration-100 hover:text-primary hover:bg-primary
                    ${pages === activePage && 'text-primary bg-primary'}
                `}
            >
                {pages}
            </button>
        </div>

        <IconButton
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            }
            href=""
            disabled={activePage === pages}
            onClick={() => {setActivePage(activePage + 1)}}
        />
    </div>
}

export default Pagination;
