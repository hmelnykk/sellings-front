'use client'

import { useState } from "react";

const categories = [
    'Смартфони та телефони',
    'Енергозабезпечення',
    'Gaming, ПК та комплектуючі',
    'Ноутбуки і планшети',
    'Смарт-годинники і гаджети',
    'Навушники та аудіотехніка',
    'Телевізори та мультимедіа',
    'Побутова техніка',
    'Краса і здоров\'я',
    'Для дому і саду',
    'Друк і офіс',
    'Інструменти та автотовари'
];

interface HeroSidebarProps {
    onChange: (value: number) => void;
}

const HeroSidebar = ({ onChange }: HeroSidebarProps) => {
    return  <div className="bg-white p-2 pr-0 border-r">
        {
            categories.map((el, idx) => (
                <div
                    key={idx}
                    className={`p-2 select-none duration-100 hover:bg-slate-50 hover:text-blue-500`}
                    onMouseEnter={() => {onChange(idx)}}
                >
                    {el}
                </div>
            ))
        }
    </div>
}

export default HeroSidebar;
