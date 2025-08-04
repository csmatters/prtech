import React from 'react'

import amlaamrut from "../assets/images/amlaamrut-300x146.png";
import ecogurjan from "../assets/images/eco-gurjan-300x140.png";
import inara from "../assets/images/inara-300x134.png";
import GauravKothari from "../assets/images/Gaurav-Kothari.png";
import utsav from "../assets/images/utsav-300x139.png";
import patric from "../assets/images/patric-300x137.png";
import ngpnews from "../assets/images/ngp-news-300X195.png";
import beyondDestination from "../assets/images/beyond-destination-logo-300x188.png"
import gurudev from "../assets/images/gurudev-300x177.png";
import microparklogistics from "../assets/images/micropark-logo-300x45.png";
import globalGateway from "../assets/images/global-gateway.png";
import wellfedbaby from "../assets/images/main-logo-removebg-prev.png";
import pexxi from "../assets/images/L-4.png";

function Clients() {
  const clientLogos = [
    amlaamrut, ecogurjan, inara, GauravKothari, utsav, patric, ngpnews, beyondDestination, gurudev, microparklogistics, globalGateway, wellfedbaby,
    pexxi
  ];

  return ( 
      <section className="bg-gray-900 my-14 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 text-gray-200">
            Our Clients
          </h2>
          <p className="text-sm sm:text-base text-center mb-10 text-gray-300 max-w-2xl mx-auto">
            We have worked with renowned names across industries. Our clients come from diverse backgrounds and sectors.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 bg-white flex items-center justify-center h-24 sm:h-28 w-full shadow-md rounded-md transition-transform hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`client-logo-${index}`}
                  className="h-12 sm:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Clients;
