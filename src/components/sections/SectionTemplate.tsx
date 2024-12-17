import React from "react";

interface SectionTemplateProps {
    title: string | React.ReactNode;
    children?: React.ReactNode;
}

const MoreButton = ({ }: { href?: string }) => {
    return <button className="rounded-full bg-[#2c80e5] border border-2 border-[#2c80e5]
        py-2 px-4 flex items-center gap-2 text-white font-bold text-[12px] shadow-md
        duration-500 hover:bg-white hover:text-[#2c80e5] hover:px-5 hover:shadow-none
    ">
        БІЛЬШЕ
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </button>
}

const SectionTemplate = ({ title, children }: SectionTemplateProps) => {
    return (
        <section className="container mx-auto mt-12">
            <h2 className="grid grid-cols-5">
                <div />
                <div className="col-span-3">
                    {title}
                </div>
                <div className="flex justify-end items-center max-md:hidden">
                    <MoreButton />
                </div>
            </h2>
            <div className="mt-8 grid grid-cols-6 md:max-xl:grid-cols-4 sm:max-md:grid-cols-2 max-sm:hidden gap-4">
                {children}
                <div className="md:hidden col-span-2">
                    <MoreButton />
                </div>
            </div>
            <div className="sm:hidden mt-8 px-4 flex w-full">
                <div className="w-1 flex-grow flex gap-4 overflow-x-scroll [&>*]:min-w-[48%] [&>*]:shadow-none">
                    {children}
                    <div className="rounded-default p-2 bg-blue-500 text-white flex justify-center items-center">
                        <div className="flex items-center">
                            <p className="text-2xl font-bold">БІЛЬШЕ</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTemplate;

