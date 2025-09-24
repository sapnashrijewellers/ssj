import products from "../data/products.json";
import rates from "../data/rates.json";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const handpicked = products.filter(p => p.handpicked);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold">✨ आपके लिए चुना गया...</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {handpicked.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            goldRate={rates["24KgoldRatePerGram"]}
            gst={rates.gstPercent}
          />
        ))}
      </div>
    </div>
  );
}
