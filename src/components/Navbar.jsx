import { useState } from "react";
import { Link } from "react-router-dom";
import rates from "../data/rates.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white p-3 shadow-md w-full bg-gray-800">
      <div className="mx-auto flex justify-between items-center max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Sapna Shri Jewellers Nagda | सपना श्री ज्वैलर्स, नागदा"
            className="h-24 w-auto"
          />
        </Link>

        {/* Hamburger button - mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`flex-col sm:flex-row sm:flex gap-4 ${isOpen ? "flex" : "hidden"} sm:flex`}>
          <Link className="hover:underline" to="/">होम</Link>
          <Link className="hover:underline" to="/category/gold">सोना</Link>
          <Link className="hover:underline" to="/category/silver">चाँदी</Link>
          <Link className="hover:underline" to="/category/हाल ही में आए हुए">हाल ही में आए हुए</Link>
          <Link className="hover:underline" to="/category/गोल्ड प्लेटेड">गोल्ड प्लेटेड</Link>
          <Link className="hover:underline" to="/category/इमिटेशन नेकलेस">इमिटेशन नेकलेस</Link>
        </div>
      </div>
    </nav>
  );
}
