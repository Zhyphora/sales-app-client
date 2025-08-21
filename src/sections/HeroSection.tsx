import React from "react";

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20"
      id="hero"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Temukan Mobil Impian Anda
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Dapatkan penawaran terbaik untuk mobil baru & bekas, hanya di
          CarSales.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded shadow hover:bg-blue-100 transition"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}
