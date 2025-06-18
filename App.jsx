import React, { useState } from 'react';
import Card from './components/Card';


function App() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-orange-600 my-6">
        Today's Special
      </h1>

      <div className="bg-orange-50 shadow-lg rounded-xl p-6 max-w-md mx-auto mb-6">
        <ul className="space-y-2 text-lg text-gray-800 list-disc list-inside">
          <li>Matar Paneer</li>
          <li>Mo:Mos</li>
          <li>Aloo Gobi</li>
          <li>Paneer Butter Masala</li>
        </ul>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
          onClick={() => setShowCard(true)}
        >
          Show All Recipes
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
          onClick={() => setShowCard(false)}
        >
          Hide All Recipes
        </button>
      </div>

      {showCard && <Card />}
    </>
  );
}

export default App;
