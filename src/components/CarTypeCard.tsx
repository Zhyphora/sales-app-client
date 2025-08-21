import React from "react";

interface CarTypeCardProps {
  type: string;
  count: number;
  image: string;
}

export default function CarTypeCard({ type, count, image }: CarTypeCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow group cursor-pointer relative">
      <img
        src={image}
        alt={type}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
      <div className="absolute bottom-4 left-4 text-white z-10">
        <div className="text-lg font-semibold drop-shadow">{type}</div>
        <div className="text-sm drop-shadow">{count} Cars</div>
      </div>
    </div>
  );
}
