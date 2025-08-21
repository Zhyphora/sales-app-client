import React from "react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Hubungi Kami
        </h2>
        <form className="bg-white p-8 rounded shadow-md space-y-6">
          <input
            type="text"
            placeholder="Nama"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Nomor Telepon"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            placeholder="Pesan"
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded hover:bg-blue-800 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
