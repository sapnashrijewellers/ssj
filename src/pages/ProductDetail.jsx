import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products.json";
import rates from "../data/rates.json";
import { getRatePerGram } from "../utils/calrate";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const [activeImage, setActiveImage] = useState(null);

  if (!product) return <p>Product not found</p>;

  const base = product.weight * getRatePerGram(product) + product.makingCharges;
  const gst = (rates.gstPercent / 100) * base;
  const final = base + gst;

  return (
    <div className="space-y-6 max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-2 w-full max-w-full">
      {/* Images */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="rounded-xl w-full max-w-full overflow-hidden"
          style={{ maxWidth: '95vw' }}
        >
          {product.images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full max-w-full">
                <img
                  src={img}
                  alt={product.name}
                  className="w-full h-[350px] object-contain rounded-xl mx-auto cursor-pointer"
                  onClick={() => setActiveImage(img)}
                />
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>

      {/* Details */}
      <div className="p-2 w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.purity} | {product.category}</p>
        <p><b>वज़न:</b> {product.weight} g</p>
        <p><b>आभूषण बनाने का शुल्क:</b> ₹{product.makingCharges}</p>
        <p><b>GST:</b> {rates.gstPercent}%</p>
        <p className="text-xl font-bold text-yellow-700 mt-3">कीमत: ₹{final.toFixed(0)}</p>

        <ul className="mt-4 list-disc list-inside">
          {product.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>

      {/* Fullscreen image modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="zoomed"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
