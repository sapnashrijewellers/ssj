// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import rates from "../data/rates.json";
import { getRatePerGram } from "../utils/calrate";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  if (!product) return <p>Product not found</p>;

  const base = product.weight * getRatePerGram(product) + product.makingCharges;
  const gst = (rates.gstPercent / 100) * base;
  const final = base + gst;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        {/* Image carousel (basic version) */}
        {product.images.map((img, i) => (
          <img key={i} src={img} alt={product.name} className="w-full rounded-xl mb-2" />
        ))}
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.purity} | {product.category}</p>

        <p><b>वज़न:</b> {product.weight} g</p>
        <p><b>आभूषण बनाने का शुल्क:</b> ₹{product.makingCharges}</p>
        <p><b>GST:</b> {rates.gstPercent}%</p>
        <p className="text-xl font-bold text-yellow-700 mt-3">कीमत: ₹{final.toFixed(0)}</p>

        <ul className="mt-4 list-disc list-inside text-gray-700">
          {product.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>
    </div>
  );
}
