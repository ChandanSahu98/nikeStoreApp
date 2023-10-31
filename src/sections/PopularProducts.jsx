import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> GUITARS <span className="text-coral-red"> American Vintage II </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
        Built to original specs, American Vintage II recreates our iconic Fender electric guitar and bass models from the ’50s, ’60s and ’70s – legendary classics that have transcended genre and generation to inspire the greatest artists of all time.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
