import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-center p-8">
      {/* 🔮 Header */}
      <h1 className="text-4xl font-bold text-purple-700">Priyanka Sharma</h1>
      <p className="mt-2 text-lg">Welcome to my astrology website ✨</p>

      {/* 🪐 ZodiacCircle Component (optional) */}
      {/* <div className="mt-10">
        <ZodiacCircle />
      </div> */}

      {/* 🔮 Crystal Ball "Jar" Button */}
      <div className="mt-10">
        <a
          href="/astro-details.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-6xl transition-transform transform hover:scale-110"
          title="Click to reveal astrology details"
        >
          🔮
        </a>
        <p className="mt-2 text-sm text-gray-500">Click the crystal ball</p>
      </div>
    </div>
  );
}

export default App;
