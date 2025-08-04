// components/FooterSection.tsx (or .jsx)
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import prtechlogo from "../assets/images/logo-prtech.png"

function Footer() {

  return (
    <footer className="bg-[#121212] text-white py-10">
      <div className="text-center mb-10">
        <img
          src={prtechlogo} // Replace with actual logo path
          alt="PR Tech Logo"
          className="mx-auto w-52 mb-2"
        />  
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-10">
        <div>
          <div className="flex justify-center mb-2">
            <div className="bg-orange-500 p-3 rounded-md">
              <FaPhoneAlt size={20} />
            </div>
          </div>
          <h3 className="text-orange-500 font-semibold text-lg mb-1">Call Us</h3>
          <p className="text-gray-400">+91 8668769915 / 7744990187</p>
        </div>

        <div>
          <div className="flex justify-center mb-2">
            <div className="bg-orange-500 p-3 rounded-md">
              <FaEnvelope size={20} />
            </div>
          </div>
          <h3 className="text-orange-500 font-semibold text-lg mb-1">Email Us</h3>
          <p className="text-gray-400">prtechnetwork@gmail.com</p>
        </div>

        <div>
          <div className="flex justify-center mb-2">
            <div className="bg-orange-500 p-3 rounded-md">
              <FaMapMarkerAlt size={20} />
            </div>
          </div>
          <h3 className="text-orange-500 font-semibold text-lg mb-1">Location</h3>
          <p className="text-gray-400">
            Prem Nagar, Itwari Road Nagpur - 440002
          </p>
        </div>
      </div>

      <hr className="border-gray-700" />

      <p className="text-center text-gray-400 text-sm mt-4">
        © PR Tech 2025. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;