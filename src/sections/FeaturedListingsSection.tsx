import React from "react";
import CarCard from "../components/CarCard";

const featuredCars = [
  {
    title: "Toyota Camry New",
    subtitle: "3.5 QS Power/Fulls Momentum Sdr AWD...",
    price: "$40,000",
    image: "/assets/camry.jpg",
    badge: "Great Price",
  },
  {
    title: "T-Cross – 2023",
    subtitle: "4D QS Power/Fulls Momentum Sdr AWD...",
    price: "$15,000",
    image: "/assets/tcross.jpg",
  },
  {
    title: "C-Class – 2023",
    subtitle: "4D QS Power/Fulls Momentum Sdr AWD...",
    price: "$160,000",
    image: "/assets/cclass.jpg",
  },
  {
    title: "New GLC – 2023",
    subtitle: "4D QS Power/Fulls Momentum Sdr AWD...",
    price: "$95,000",
    image: "/assets/glc.jpg",
    badge: "Low Mileage",
  },
];

export default function FeaturedListingsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Listings</h2>
          <a
            href="#"
            className="text-blue-700 hover:underline text-sm font-medium"
          >
            View All
          </a>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {featuredCars.map((car, idx) => (
            <div key={idx} className="min-w-[260px] w-64 flex-shrink-0">
              <CarCard {...car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
