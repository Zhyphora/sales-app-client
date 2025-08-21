import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar placeholder */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-700">CarSales</span>
          <nav>
            <a
              href="#features"
              className="mx-2 text-gray-700 hover:text-blue-700"
            >
              Fitur
            </a>
            <a
              href="#contact"
              className="mx-2 text-gray-700 hover:text-blue-700"
            >
              Kontak
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-200 text-center py-4 text-gray-600 text-sm">
        © {new Date().getFullYear()} CarSales. All rights reserved.
      </footer>
    </div>
  );
}
