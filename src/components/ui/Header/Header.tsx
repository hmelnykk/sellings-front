'use client'

import Image from "next/image";
import Button from "../Buttons/Button";
import IconButton from "../Buttons/IconButton";
import ContextMenu from "../ContextMenu/ContextMenu";
import SearchInput from "../Inputs/SearchInput";

import logoImg from '@/assets/images/logo.png'

const Header = () => {
    return (
        <div className="bg-primary relative">
            <header className="container mx-auto flex p-4 items-center justify-between ">
                <div className="flex items-center gap-4">
                    <Image
                        alt="logo"
                        src={logoImg}
                        width={60}
                    />

                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>
                            <ContextMenu title={<p>+38 <span className="font-bold">066 123 45 67</span></p>}>
                                <div>
                                    <p className="text-[12px] text-slate-400">Інтернет-магазин</p>
                                    <div className="[&>*]:my-1 [&>*]:duration-200">
                                        <p className="hover:text-sky-600">+38 <span className="font-bold">066 123 45 67</span></p>
                                        <p className="hover:text-sky-600">+38 <span className="font-bold">066 123 45 67</span></p>
                                        <p className="hover:text-sky-600">+38 <span className="font-bold">066 123 45 67</span></p>
                                    </div>
                                    <p className="text-[12px]">з 09:00 до 21:00 щоденно</p>
                                    <p className="text-[12px] text-slate-400 mt-2">Сервісний центр</p>
                                    <div className="[&>*]:my-1 [&>*]:duration-200">
                                        <p className="hover:text-sky-600">+38 <span className="font-bold">066 123 45 67</span></p>
                                    </div>
                                    <p className="text-[12px]">з 09:00 до 21:00 щоденно</p>
                                </div>
                            </ContextMenu>
                            <p className="text-[12px]">з 09:00 до 21:00 щоденно</p>
                        </div>
                    </div>
                </div>

                <nav>
                    <ul className="flex gap-4 text-sm">
                        <li className="hover:text-sky-600">Блог</li>
                        <li className="hover:text-sky-600">Магазини</li>
                        <li className="hover:text-sky-600">Доставка та оплата</li>
                    </ul>
                </nav>

                <div>
                    <ul className="flex gap-4">
                        <li>

                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="underline text-sm duration-200 hover:text-sky-600">Львів</p>
                    </div>

                    <div className="bg-primary-darken rounded-default p-2 flex gap-1 items-center [&>*]:duration-200 [&>*]:hover:stroke-sky-500 [&>*]:hover:text-sky-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-sky-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className="text-sm select-none">Увійти</p>
                    </div>
                </div>
            </header>

            <div className="container relative mx-auto flex gap-4 p-4">
                <Button
                    name="Catalog"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    }
                    className="min-w-72 hover:border-sky-600 flex items-center justify-center gap-2"
                />
                <SearchInput id="search-input" className="flex-grow"/>
                <div className="flex gap-2 items-center">
                    <IconButton icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    } href="/" />
                    <IconButton icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    } href="/" />
                    <IconButton icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    } href="/" />
                    <IconButton icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    } href="/" />
                </div>
            </div>
        </div>
    );
}

export default Header;
