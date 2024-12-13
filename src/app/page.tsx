import ProductCard from '@/components/ProductCard/ProductCard';
import HeroSection from '@/components/sections/HeroSection';
import SectionTemplate from '@/components/sections/SectionTemplate'

export default function Home() {
  return (
    <>
      <HeroSection />
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

      <SectionTemplate title={
        <p className='text-center font-bold text-4xl leading-10'>
          <span className='inline-block py-2 px-4 bg-blue-500 text-white rounded-default m-2'>ВІДГУКИ</span>
          ПРО МАГАЗИН
        </p>
      }>
        <div className="col-span-6 grid grid-cols-4 gap-[50px]">
          <div>
            <p className='text-amber-500 text-7xl font-bold mb-6'>100%</p>
            <p>Відгуків є справжніми і проходять лише перевірку на цензуру</p>
          </div>
          <div>
            <p className='text-amber-500 text-7xl font-bold mb-6'>91%</p>
            <p>Клієнтів рекомендують нас і надалі планують здійснювати у нас покупки</p>
          </div>
          <div>
            <p className='text-amber-500 text-7xl font-bold mb-6'>8851</p>
            <p>Відгуків та оцінок залишено нашими клієнтами</p>
          </div>
          <div>
            <div className='flex justify-between mb-6'>
              <div className='flex'>
                {
                  Array.from({ length: 5 }).map((el, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-amber-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))
                }
              </div>
              <div className='flex items-end'>
                <p className='text-amber-500 text-7xl font-bold'>4,57</p>
                <p className='text-black text-4xl font-bold'>/5</p>
              </div>
            </div>

            <p>Відгуків та оцінок залишено нашими клієнтами</p>
          </div>
        </div>
      </SectionTemplate>

      <div className="container mx-auto flex justify-between gap-10">
        <div className="col-span-3 p-8 bg-white shadow-md rounded-default">

        </div>
        <div className='p-8 bg-white shadow-md rounded-default text-lg font-bold'>
          <div className="flex gap-10 justify-between">
            <p>Надійність</p>
              <div className='flex items-center'>
                {
                  Array.from({ length: 5 }).map((el, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-amber-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))
                }
                <p className='ml-2'>4.57 <span className='font-normal text-sm'>/ 5</span></p>
              </div>
          </div>
          <div className="flex gap-10 justify-between">
            <p>Сайт</p>
              <div className='flex items-center'>
                {
                  Array.from({ length: 5 }).map((el, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-amber-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))
                }
                <p className='ml-2'>4.61 <span className='font-normal text-sm'>/ 5</span></p>
              </div>
          </div>
          <div className="flex gap-10 justify-between">
            <p>Доставка</p>
              <div className='flex items-center'>
                {
                  Array.from({ length: 5 }).map((el, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-amber-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))
                }
                <p className='ml-2'>4.56 <span className='font-normal text-sm'>/ 5</span></p>
              </div>
          </div>
          <div className="flex gap-10 justify-between">
            <p>Товар</p>
              <div className='flex items-center'>
                {
                  Array.from({ length: 5 }).map((el, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-amber-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))
                }
                <p className='ml-2'>4.59 <span className='font-normal text-sm'>/ 5</span></p>
              </div>
          </div>
          <div className="flex gap-10 justify-between">
            <p>Сервіс</p>
              <div className='flex items-center'>
                {
                  Array.from({ length: 5 }).map((el, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-amber-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))
                }
                <p className='ml-2'>4.55 <span className='font-normal text-sm'>/ 5</span></p>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}
