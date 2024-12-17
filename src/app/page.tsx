import ProductCard from '@/components/ProductCard/ProductCard';
import HeroSection from '@/components/sections/HeroSection';
import SectionTemplate from '@/components/sections/SectionTemplate';

interface SectionTitleProps {
  filledText: string;
  emptyText: string;
  reverseOrder?: boolean;
  sectionTitleClassName?: string;
}

const SectionTitle = ({ filledText, emptyText, reverseOrder = false, sectionTitleClassName }: SectionTitleProps) => {
  const pClassName = 'text-center font-bold text-4xl text-wrap max-sm:text-2xl';

  return reverseOrder ?
    <p className={pClassName}>
      {emptyText.toUpperCase()}
      <span className={`inline-block py-2 px-4 bg-[#92bd1c] text-white rounded-default mr-2 ${sectionTitleClassName}`}>
        {filledText.toUpperCase()}
      </span>
    </p>
    :
    <p className={pClassName}>
      <span className={`inline-block py-2 px-4 bg-[#92bd1c] text-white rounded-default mr-2 ${sectionTitleClassName}`}>
        {filledText.toUpperCase()}
      </span>
      {emptyText.toUpperCase()}
    </p>
}

const StoreReviewStats = ({ number, description }: { number: string; description: string }) => {
  return <div>
    <p className='text-amber-500 text-7xl font-bold mb-6 max-sm:text-4xl'>{number}</p>
    <p>{description}</p>
  </div>
}

const StoreReviewStatsSection = () => {
  return <section className='mt-8'>
    <SectionTitle filledText='ВІДГУКИ' emptyText='ПРО МАГАЗИН' />
    <div className="mt-8 grid grid-cols-4 max-lg:grid-cols-2 gap-[50px]">
      <StoreReviewStats number='100%' description='Відгуків є справжніми і проходять лише перевірку на цензуру' />
      <StoreReviewStats number='91%' description='Клієнтів рекомендують нас і надалі планують здійснювати у нас покупки' />
      <StoreReviewStats number='8851' description='Відгуків та оцінок залишено нашими клієнтами' />
      <StoreReviewStats number='4,57 / 5' description='У нас відмінний індекс надійності' />
    </div>
  </section>
}

const StoreReview = ({ property, value }: { property: string; value: number }) => {
  return <div className="flex justify-between gap-10">
    <p>{property}</p>
    <div className='flex items-center'>
      {
        Array.from({ length: 5 }).map((_, idx) => (
          <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-amber-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        ))
      }
      <p className='ml-2'>{value} <span className='font-normal text-sm'>/ 5</span></p>
    </div>
  </div>
}

const StoreReviews = () => {
  return <section className='p-8 bg-white shadow-md rounded-default text-lg font-bold'>
    <StoreReview property='Надійність' value={4.57} />
    <StoreReview property='Сайт' value={4.61} />
    <StoreReview property='Доставка' value={4.56} />
    <StoreReview property='Товар' value={4.59} />
    <StoreReview property='Сервіс' value={4.54} />
  </section>
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionTemplate title={
        <SectionTitle filledText='ДЛЯ СЕБЕ' emptyText='ЧИ НА ПОДАРУНОК' />
      } >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionTemplate>

      <SectionTemplate title={
        <SectionTitle filledText='ДЛЯ КОХАНОЇ' emptyText='ВИБЕРИ ПОДАРУНОК' reverseOrder={true} />
      }>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionTemplate>
      <SectionTemplate title={
        <SectionTitle filledText='СПОДОБАЄТЬСЯ КОЖНОМУ' emptyText='ПОДАРУНОК, ЯКИЙ' reverseOrder={true} />
      }>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionTemplate>

      <StoreReviewStatsSection />

      <div className="container mt-8 mx-auto flex justify-between gap-10 max-md:flex-col">
        <StoreReviews />
      </div>
    </>
  );
}
