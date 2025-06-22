import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-center p-8">
      <h1 className="text-4xl font-bold text-purple-700">Priyanka Sharma</h1>
      <p className="mt-2 text-lg">Welcome to my astrology website ✨</p>

      {/* Zodiac signs floating circle */}
      <div className="mt-10">
        <ZodiacCircle />
      </div>

      {/* Crystal Ball Icon as Link */}
      <div className="mt-6">
        <a
          href="/astro-details.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:scale-110 transition-transform duration-300 inline-block"
        >
          🔮
        </a>
      </div>
    </div>
  );
}

export default App;
