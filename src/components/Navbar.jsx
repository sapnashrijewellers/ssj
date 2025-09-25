import { useState } from "react";
import { Link } from "react-router-dom";
import rates from "../data/rates.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRates] = useState(rates);

  return (
    <nav className="text-white p-3 shadow-md w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-2 items-start">

        {/* Left column: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Sapna Shri Jewellers Nagda | सपना श्री ज्वैलर्स, नागदा"
              className="h-24 w-auto"
            />
          </Link>
        </div>

        {/* Right column: Links + Rates */}
        <div className="flex flex-col justify-start w-full">
          {/* Top row: Links */}
          <div className="flex flex-wrap justify-end gap-4 mb-1">
            <Link className="hover:underline" to="/">होम</Link>
            <Link className="hover:underline" to="/category/gold">सोना</Link>
            <Link className="hover:underline" to="/category/silver">चाँदी</Link>
            <Link className="hover:underline" to="/category/हाल ही में आए हुए">हाल ही में आए हुए</Link>
          </div>

          {/* Bottom row: Live rates */}
          <div className="flex justify-end gap-4">
            <span className="flex items-center gap-1">
              <span className="animate-pulse w-3 h-3 bg-red-500 rounded-full inline-block"></span>
              <span>
                Gold: <span className="text-green-500">₹{currentRates["24KgoldRatePerGram"]}</span>
              </span>
            </span>
            <span>
              Silver: <span className="text-green-500">₹{currentRates.silverRatePerGram}</span>
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
}
