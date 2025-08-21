import React from "react";

interface CarCardProps {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  badge?: string;
  onViewDetails?: () => void;
}

export default function CarCard({
  title,
  subtitle,
  price,
  image,
  badge,
  onViewDetails,
}: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden group flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="font-semibold text-lg mb-1">{title}</div>
        <div className="text-gray-500 text-sm mb-2 flex-1">{subtitle}</div>
        <div className="font-bold text-blue-700 text-xl mb-3">{price}</div>
        <button
          onClick={onViewDetails}
          className="mt-auto text-blue-700 hover:underline text-sm font-medium self-start"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
