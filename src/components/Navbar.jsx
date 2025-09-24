import { Link } from "react-router-dom";
import rates from "../data/rates.json";

export default function Navbar() {
  return (
    <nav className="text-white p-3 shadow-md sticky top-0 z-50 w-full">
      <div className="mx-auto grid grid-cols-2 items-center gap-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Column 1: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="./src/assets/logo.png"
              alt="Sapna Shri Jewellers Nagda सपना श्री ज्वैलर्स, नागदा"
              className="h-24 w-auto"
            />
          </Link>
        </div>

        {/* Column 2: Rates and Links */}
        <div className="flex flex-col gap-1 text-sm">
          <div>सोने के भाव (Gold Rate 24K): ₹{rates["24KgoldRatePerGram"].toLocaleString()}</div>
          <div>चाँदी के भाव (Silver Rate 92.5): ₹{rates["silverRatePerGram"].toLocaleString()}</div>
          <div className="flex gap-4 text-base flex-wrap">
            <Link className="hover:underline" to="/">होम</Link>
            <Link className="hover:underline" to="/category/gold">सोना</Link>
            <Link className="hover:underline" to="/category/silver">चाँदी</Link>
            <Link className="hover:underline" to="/category/हाल ही में आए हुए">हाल ही में आए हुए</Link>
            <Link className="hover:underline" to="/category/गोल्ड प्लेटेड">गोल्ड प्लेटेड</Link>
            <Link className="hover:underline" to="/category/इमिटेशन नेकलेस">इमिटेशन नेकलेस</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
