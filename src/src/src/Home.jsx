import React from "react";
import { CalendarDays, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-purple-700">
          Priyanka Sharma Astrology
        </h1>
        <p className="text-lg mt-2 text-gray-600 italic">
          Guiding you through the stars ✨
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="rounded-2xl shadow-md bg-white p-6">
          <h2 className="text-2xl font-semibold text-purple-600">
            About Priyanka
          </h2>
          <p className="mt-2 text-gray-700">
            Priyanka Sharma is a seasoned astrologer with over a decade of
            experience in Vedic and Western astrology. Her readings blend
            ancient wisdom with modern insights to help you make clear and
            confident decisions.
          </p>
        </div>

        <div className="rounded-2xl shadow-md bg-white p-6">
          <h2 className="text-2xl font-semibold text-purple-600">
            Astrology Services
          </h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Birth Chart Analysis</li>
            <li>Kundli Matching</li>
            <li>Career & Finance Guidance</li>
            <li>Love & Relationship Advice</li>
            <li>Tarot Readings</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-md bg-white p-6 col-span-2 text-center">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Book a Consultation
          </h2>
          <p className="text-gray-700 mb-4">
            Get personalized readings and guidance.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-2 rounded-full inline-flex items-center">
            <CalendarDays className="w-5 h-5 mr-2" />
            Book Now
          </button>
        </div>

        <div className="rounded-2xl shadow-md bg-white p-6 col-span-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Contact
          </h2>
          <p className="text-gray-700 mb-2 flex items-center">
            <Phone className="w-4 h-4 mr-2" /> +1 (123) 456‑7890
          </p>
          <p className="text-gray-700 flex items-center">
            <Mail className="w-4 h-4 mr-2" /> contact@priyankasharmaastrology.com
          </p>
        </div>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Priyanka Sharma Astrology. All rights
        reserved.
      </footer>
    </div>
  );
}
