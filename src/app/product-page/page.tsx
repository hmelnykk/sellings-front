import ProductCard from "@/components/ProductCard/ProductCard";
import FilterSection from "@/components/ui/FilterSection/FilterSection";
import Pagination from "@/components/ui/Pagination/Pagination";
import ProductPath from "@/components/ui/ProductPath/ProductPath";

const testPath = [
    {
        name: '11',
        href: '',
    },
    {
        name: '22',
        href: '',
    },
    {
        name: '33',
        href: '',
    },
];

export default function Home() {
    return (
        <>
            <ProductPath path={testPath} />
            <div className="flex gap-4">
                <div className="min-w-[250px] space-y-2">
                    <FilterSection title="Name">
                        content
                    </FilterSection>
                    <FilterSection title="alsnc">
                        content 2
                    </FilterSection>
                </div>
                <div className="flex-grow">
                    <h1 className="text-2xl font-bold">{'Category Name'.toUpperCase()}</h1>
                    <div className="my-4 py-4 px-8 flex gap-4 font-bold bg-white border border-slate-100">
                        <p>filter</p>
                        <p>filter</p>
                        <p>filter</p>
                        <p>filter</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="my-4">
                        <button className="mx-auto rounded-full bg-[#2c80e5] border border-2 border-[#2c80e5]
                            py-4 px-8 flex items-center gap-2 text-white font-bold text-[12px] shadow-md
                            duration-500 hover:bg-white hover:text-[#2c80e5] hover:px-10 hover:shadow-none
                        ">
                            ЗАВАНТАЖИТИ БІЛЬШЕ
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                    <Pagination pages={84} />
                </div>
            </div>
        </>
    );
}
