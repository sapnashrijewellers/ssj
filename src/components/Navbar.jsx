import { useState } from "react";
import { Link } from "react-router-dom";
import rates from "../data/rates.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRates] = useState(rates);

  return (
    <nav className="text-white p-3 shadow-md w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-start">

        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Sapna Shri Jewellers Nagda | सपना श्री ज्वैलर्स, नागदा"
              className="h-24 w-auto"
            />
          </Link>
        </div>

        {/* Right: Menu + Rates */}
        <div className="flex flex-col justify-between w-full sm:w-auto ml-4">
          {/* Top row: Menu links */}
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
                सोना: <span className="text-green-500">₹{currentRates["24KgoldRatePerGram"]}</span>
              </span>
            </span>
            <span>
              चाँदी: <span className="text-green-500">₹{currentRates.silverRatePerGram}</span>
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
}
