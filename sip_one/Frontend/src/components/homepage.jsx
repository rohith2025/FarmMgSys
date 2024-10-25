import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './navabr';

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="homepage mt-16">
        {/* Hero Section */}
        <section className="hero bg-green-200 py-12 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-green-800">Welcome to CropCare</h1>
            <p className="text-lg text-green-600 mt-4">
              Discover the best crop care advisor!
            </p>
            <Link to="/services" className="mt-6 inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
              Explore Advisor
            </Link>
          </div>
        </section>

        {/* Crops Overview Section */}
        <section className="crops-overview py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center text-green-700">Popular Crops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              
              {/* Crop Item 1 */}
              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661963447711-27f892ffe292?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hlYXQlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Wheat" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Wheat</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Wheat is one of the most widely cultivated crops globally, providing a major food source.
                </p>
              </div>

              {/* Crop Item 2 */}
              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://farmpays.com/wp-content/uploads/2024/02/Rice-Farm-1-1024x576.jpg" 
                  alt="Rice" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Rice</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              {/* Crop Item 3 */}
              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPB5tFZju84sCMoEls0brcoMQZSwOfcbqQ&s" 
                  alt="Corn" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Corn</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Corn is a versatile crop used for food, livestock feed, and even biofuel production.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://t4.ftcdn.net/jpg/06/64/12/05/360_F_664120525_5QIjKKIrWwQkyauaDpxC9mSoitMOIQmR.jpg" 
                  alt="Carrot" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Carrot</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://media.istockphoto.com/id/657185044/photo/cotton-crop-in-full-bloom.jpg?s=612x612&w=0&k=20&c=ctDy1dFRXMvR_ydSan8V1CFQ9OUMrRhkqGJ7IYhTGpE=" 
                  alt="Cotton" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Cotton</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://i2.wp.com/entomologytoday.org/wp-content/uploads/2019/09/millet-field.jpg?fit=1000%2C667" 
                  alt="Millets" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Millets</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://www.agriculture.com/thmb/Kg7y8GzrNZk0pHpLRQmcdjrIIXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2841920SCN20resistant20soybeans-2-2000-12ec019a09f14439b507b75ea34b05dc.jpg" 
                  alt="Soya" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Soya</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://cdn11.bigcommerce.com/s-b9pwig4brj/product_images/uploaded_images/0-featured-closeup-of-sugarcane-growing-in-plantation.jpg" 
                  alt="Sugarcane" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Sugarcane</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://www.icrisat.org/assets/crops/groundnut-banner.jpg" 
                  alt="Groundnut" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Groundnut</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://www.himachalheadlines.com/wp-content/uploads/2024/01/IMG-20240123-WA0006.jpg" 
                  alt="Apple" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Apple</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://m.media-amazon.com/images/I/41UatgFuWmL._AC_UF1000,1000_QL80_.jpg" 
                  alt="Orange" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Orange</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

              <div className="crop-item bg-white shadow-md rounded-md p-4">
                <img 
                  src="https://agronoblog.com/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-16-16.20.23-A-realistic-close-up-image-of-three-freshly-harvested-potatoes-lying-on-the-soil-viewed-from-a-different-angle-showcasing-more-of-the-potato-field.--1024x585.webp" 
                  alt="Potato" 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-green-700">Potato</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Rice is a staple food for over half of the world's population and thrives in warm, wet environments.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <div className='mt-24'>
      <section className="cta bg-green-300 py-2 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-green-800">Join Our Farming Community</h2>
          <p className="text-lg text-green-700 mt-4">
            Get the latest updates on crop trends, farming techniques, and expert advice.
          </p>
        </div>
      </section>
      </div>
      </div>
    </>
  );
};

export default HomePage;