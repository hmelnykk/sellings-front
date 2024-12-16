'use client'

import Image from "next/image";
import testImg from "@/assets/images/Marshall-Major-V-40-Black-01-600x600.webp"
import { useState } from "react";

interface ProductCardProps {}

const ProductCard = () => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const rating = 4;

    return <div
            onMouseEnter={() => {setIsFocus(true)}}
            onMouseLeave={() => {setIsFocus(false)}}
            className="relative rounded-default bg-white shadow-md p-2 space-y-1 duration-100 hover:scale-[1.03]"
        >
        <div className="absolute w-[90%] flex justify-end">
            <div className="space-y-2">
                <div className="p-2 rounded-full bg-black border outline outline-transparent duration-300 hover:outline-gray-500" />
                <div className="p-2 rounded-full bg-white border outline outline-transparent duration-300 hover:outline-gray-300" />
                <div className="p-2 rounded-full bg-pink-300 border outline outline-transparent duration-300 hover:outline-pink-500" />
            </div>
        </div>
        <Image
            alt="product-img"
            src={testImg}
            className="w-full mx-auto mb-4"
        />
        <p className="bg-[#ea7a57] rounded-default w-fit text-[10px] text-white font-bold px-1 py-[1px]">- 2500 ₴</p>
        <p>Накладні навушники Marshall Major V Black (1006832)</p>
        <div className="flex gap-2 items-end">
            <p className="text-[#ed9200] font-bold text-xl">1488 ₴</p>
            <p className="text-sm text-gray-400 font-bold line-through">3988 ₴</p>
        </div>
        <div className="flex gap-2 text-gray-400">
            <button className={`flex border duration-200 shadow-md border-gray-300 rounded-default p-2
                ${isFocus ? 'rounded-full bg-blue-500 border-blue-500 text-white flex-grow justify-center gap-2' : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                {
                    isFocus && <p className="text-sm font-bold">Купити</p>
                }
            </button>
            <button className="border duration-200 hover:shadow-md hover:border-gray-300 rounded-default p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </button>
            <button className="border duration-200 hover:shadow-md hover:border-gray-300 rounded-default p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
            </button>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-[10px] font-bold text-blue-500">КЕШБЕК 14.88 ₴</p>
            <div className="flex items-center">
                {
                    Array.from({ length: rating }).map((_, idx) => (
                        <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-amber-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                    ))
                }
                {
                    Array.from({ length: 5 - rating }).map((_, idx) => (
                        <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-gray-400">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                    ))
                }
            </div>
        </div>
    </div>
}

export default ProductCard;
