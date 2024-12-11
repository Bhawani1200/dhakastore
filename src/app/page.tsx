import CategoryList from "@/components/CategoryList";

import NewProducts from "@/components/NewProducts";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
        <h1 className="text-2xl text-black">Featured Product</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl text-black px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
        <h1 className="text-2xl text-black">New Product</h1>
        <NewProducts />
      </div>
    </div>
  );
}
