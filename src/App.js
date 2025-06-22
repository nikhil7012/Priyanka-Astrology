import React from "react";
function App() {
  return (
    <div className="min-h-screen bg-white text-center p-8">
      <h1 className="text-4xl font-bold text-purple-700">Priyanka Sharma</h1>
      <p className="mt-2 text-lg">Welcome to my astrology website ✨</p>

      {/* Crystal Ball Icon as Button */}
      <div className="mt-6">
       <button
  onClick={() => window.open("/astro-details.html", "_blank")}
  className="text-4xl hover:scale-110 transition-transform duration-300"
>
  🔮
</button>
      </div>
    </div>
  );
}

export default App;
