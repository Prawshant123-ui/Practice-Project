import React from 'react';
function Card() {
  const handleOrder = (dishName) => {
    alert(` ${dishName}: Ordered Successfully!!`);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        
        {/* Matar Paneer */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-3">Matar Paneer</h2>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.2i6dC5sT__MUzQYOLCKanAHaFj?r=0&rs=1&pid=ImgDetMain"
            alt="Matar Paneer"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
              onClick={() => handleOrder('Matar Paneer')}
              
            >
              Order Now!!
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
            >
              See Recipe
            </button>
          </div>
        </div>

        {/* Mo:Mo */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-3">Mo:Mo</h2>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP._tgM80_g7K1ymkC1gpvxZAHaE8?r=0&rs=1&pid=ImgDetMain"
            alt="Mo:Mo"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
              onClick={() => handleOrder('Mo:Mo')}
            >
              Order Now!!
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
            >
              See Recipe
            </button>
          </div>
        </div>

        {/* Aloo Gobi */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-3">Aloo Gobi</h2>
          </div>
          <img
            src="https://th.bing.com/th/id/R.f98eb2e0ef0c963f091e69812fcff347?rik=WjTDj1FnEAg46w&riu=http%3a%2f%2fwww.archanaskitchen.com%2fimages%2farchanaskitchen%2f0-Archanas-Kitchen-Recipes%2f2017%2f26-may%2fAloo_Gobi_Sabzi_Recipe-4.jpg&ehk=4DePZbxYExD%2fdUU0gXB0oSK2P%2bygBE5wDVwhDHtisrA%3d&risl=&pid=ImgRaw&r=0"
            alt="Aloo Gobi"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
              onClick={() => handleOrder('Aloo Gobi')}
            >
              Order Now!!
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
            >
              See Recipe
            </button>
          </div>
        </div>

        {/* Paneer Butter Masala */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-3">Paneer Butter Masala</h2>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.3fROpInSzgY--B1msdJITQHaHa?r=0&rs=1&pid=ImgDetMain"
            alt="Paneer Butter Masala"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
              onClick={() => handleOrder('Paneer Butter Masala')}
            >
              Order Now!!
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
            >
              See Recipe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
