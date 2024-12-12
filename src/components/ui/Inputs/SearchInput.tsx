'use client'

import Link from "next/link";
import { useState } from "react";

interface SearchInputProps {
    id: string;
    className?: string;
    onChange?: (value: string) => void;
}

const SearchInput = ({ id, className, onChange }: SearchInputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    return <div className="flex-grow">
        <div onClick={() => {
            setIsFocus(true);
        }} className={`relative bg-white flex items-center gap-4 py-3 px-4 ${isFocus ? 'rounded-t-default' : 'rounded-default'}`}>
            <input
                id={id}
                type="text"
                placeholder="Пошук"
                className="flex-grow outline-none"
                onFocus={() => {
                    setIsFocus(true);
                }}
                onBlur={() => {
                    setIsFocus(false);
                }}
            />

            {
                isFocus && 
                <svg onClick={(e) => {
                    e.stopPropagation();
                    setIsFocus(false);
                }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            }

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary stroke-[3px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
        {
            isFocus && <div className="absolute z-[64] shadow-lg w-1/2 bg-white flex gap-4 p-4 rounded-b-default border-t">
                <div className="text-gray-400">
                    <p className="text-[12px] mb-4">Популярні категорії</p>
                    <ul className="[&>*]:mb-2">
                        <li
                            className="text-sm font-bold hover:underline"
                        >
                            <Link href=''>Смартфони</Link>
                        </li>
                        <li
                            className="text-sm font-bold hover:underline"
                        >
                            <Link href=''>Ноутбуки</Link>
                        </li>
                        <li
                            className="text-sm font-bold hover:underline"
                        >
                            <Link href=''>Ігрові приставки</Link>
                        </li>
                        <li
                            className="text-sm font-bold hover:underline"
                        >
                            <Link href=''>Додаткові акумулятори</Link>
                        </li>
                        <li
                            className="text-sm font-bold hover:underline"
                        >
                            <Link href=''>Грилі</Link>
                        </li>
                        <li
                            className="text-sm font-bold hover:underline"
                        >
                            <Link href=''>Бездротові навушники</Link>
                        </li>
                    </ul>
                </div>

                <div className="border-l" />

                <div className="text-gray-400 flex-grow">
                    <p className="text-[12px] mb-4">Популярні товари</p>

                    <div className="space-y-4">
                        <div className="flex select-none gap-2 w-full rounded-default border border-white duration-200 hover:border-slate-200 p-2">
                            <div className="">img</div>
                            <div>
                                <p className="text-black">Product Name</p>
                                <div className="flex gap-2">
                                    <p className="font-bold text-rose-600">1488$</p>
                                    <p className="font-bold text-black line-through">3000$</p>
                                    <p className="text-sky-600">cashback</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex select-none gap-2 w-full rounded-default border border-white duration-200 hover:border-slate-200 p-2">
                            <div className="">img</div>
                            <div>
                                <p className="text-black">Product Name</p>
                                <div className="flex gap-2">
                                    <p className="font-bold text-rose-600">1488$</p>
                                    <p className="font-bold text-black line-through">3000$</p>
                                    <p className="text-sky-600">cashback</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex select-none gap-2 w-full rounded-default border border-white duration-200 hover:border-slate-200 p-2">
                            <div className="">img</div>
                            <div>
                                <p className="text-black">Product Name</p>
                                <div className="flex gap-2">
                                    <p className="font-bold text-rose-600">1488$</p>
                                    <p className="font-bold text-black line-through">3000$</p>
                                    <p className="text-sky-600">cashback</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
}

export default SearchInput;
