import Banner from "@/components/home/Banner";
import BentoShowcase from "@/components/home/BentoShowcase";
import Categories from "@/components/home/Categories";
import PopularProducts from "@/components/home/PopularProducts";
import Shipping from "@/components/home/Shipping";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center bg-gray-50">
      <Categories />
      <div className="lg:p-10 flex justify-center">
        <div className="max-md:h-[250px] max-xl:h-[370px] border border-gray-100 rounded-lg shadow-lg overflow-hidden w-[90%] flex items-end">
          <Banner />
        </div>
      </div>
      <PopularProducts />
      <Shipping />
      <BentoShowcase />
    </section>
  );
}
