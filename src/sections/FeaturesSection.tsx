import React from "react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Kenapa Pilih Kami?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded shadow text-center">
            <span className="text-4xl mb-2 inline-block">🚗</span>
            <h3 className="font-semibold text-xl mb-2">
              Pilihan Mobil Lengkap
            </h3>
            <p>
              Berbagai merek & tipe mobil baru maupun bekas, sesuai kebutuhan
              Anda.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded shadow text-center">
            <span className="text-4xl mb-2 inline-block">💰</span>
            <h3 className="font-semibold text-xl mb-2">Harga Kompetitif</h3>
            <p>
              Penawaran harga terbaik & transparan, tanpa biaya tersembunyi.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded shadow text-center">
            <span className="text-4xl mb-2 inline-block">🤝</span>
            <h3 className="font-semibold text-xl mb-2">Layanan Profesional</h3>
            <p>Tim sales berpengalaman siap membantu proses pembelian Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
