import React from "react";
import CarTypeCard from "../components/CarTypeCard";

const carTypes = [
  { type: "SUV", count: 3, image: "/assets/suv.jpg" },
  { type: "Sedan", count: 7, image: "/assets/sedan.jpg" },
  { type: "Hatchback", count: 1, image: "/assets/hatchback.jpg" },
  { type: "Hybrid", count: 0, image: "/assets/hybrid.jpg" },
  { type: "Convertible", count: 3, image: "/assets/convertible.jpg" },
];

export default function BrowseByTypeSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Browse by Type</h2>
          <a
            href="#"
            className="text-blue-700 hover:underline text-sm font-medium"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {carTypes.map((car) => (
            <CarTypeCard key={car.type} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
}
