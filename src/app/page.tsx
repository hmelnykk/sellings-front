import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTemplate from '@/components/sections/SectionTemplate'

export default function Home() {
  return (
    <>
      <SectionTemplate title={
        <p className='text-center font-bold text-4xl'>
          <span className='py-2 px-4 bg-[#92bd1c] text-white rounded-default mr-2'>ДЛЯ СЕБЕ</span>
          ЧИ НА ПОДАРУНОК
        </p>
      }>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionTemplate>

      <SectionTemplate title={
        <p className='text-center font-bold text-4xl'>
          ВИБЕРИ ПОДАРУНОК
          <span className='py-2 px-4 bg-blue-500 text-white rounded-default ml-2'>ДЛЯ КОХАНОЇ</span>
        </p>
      }>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionTemplate>
      <SectionTemplate title={
        <p className='text-center font-bold text-4xl leading-10'>
          ПОДАРУНОК, ЯКИЙ
          <span className='inline-block py-2 px-4 bg-[#92bd1c] text-white rounded-default m-2'>СПОДОБАЄТЬСЯ КОЖНОМУ</span>
        </p>
      }>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionTemplate>
    </>
  );
}
