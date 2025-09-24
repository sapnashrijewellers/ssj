import { Link } from "react-router-dom";

export default function ProductCard({ product, goldRate, gst }) {
  const price =
    product.weight * goldRate +
    product.makingCharges +
    (gst / 100) * (product.weight * goldRate + product.makingCharges);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        <div className="w-full flex items-center justify-center bg-gray-50 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-[100px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-3">
          <h2 className="font-semibold text-sm md:text-base line-clamp-1">{product.name}</h2>
          <p className="text-xs text-gray-500">{product.purity} {product.category}</p>
          <p className="mt-2 font-bold text-yellow-700 text-sm md:text-base">
            ₹ {price.toFixed(0)}
          </p>
        </div>
      </div>
    </Link>
  );
}
