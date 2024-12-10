import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

function UserHome() {
  return (
    <div className="bg-rose-200 min-h-screen">
      <header className="bg-rose-900 shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          {/* Replace the text with the logo image */}
          <Image 
            src="/images/png.png" 
            alt="Your Flower Shop Logo" 
            width={160}    // Increased size
            height={40}    // Maintaining aspect ratio
            className="h-14"  // Adjust height as needed
          />
          <nav className="hidden md:flex space-x-4">
            <Link href="/components/molecules/UserHome" className="text-gray-300 hover:text-blue-500">Home</Link>
            <Link href="/components/molecules/shop" className="text-gray-300 hover:text-blue-500">Shop</Link>
            <Link href="/components/molecules/Contact" className="text-gray-300 hover:text-blue-500">Contact</Link>
            <Link href="/components/molecules/MyOrders" className="text-gray-300 hover:text-blue-500">My Order</Link>
            <Link href="/components/molecules/Home" className="text-gray-300 hover:text-blue-500">Log Out</Link>

          </nav>
        </div>
      </header>

      <main className="container mx-auto py-16 px-6">
      <h2 className="text-pink-600 text-4xl font-bold mb-8 font-serif">
  Welcome to Jacinto's FlowerShop!
</h2>

        <p className="text-pink-500  text-lg mb-8  ">
          
          At Jacinto's FlowerShop, we believe in the power of flowers to transform moments, uplift spirits, and brighten any space.
          As a local, family-owned business, we pride ourselves on delivering only the freshest blooms and the most vibrant arrangements,
          crafted with love and attention to detail. Whether you're celebrating a milestone, sending a thoughtful gift, or simply adding beauty
          to your home, our team of talented florists is here to make your floral vision come to life. Step into our shop or browse online,
          and discover how a touch of nature can bring joy to your day!
        </p>
        <p className="text-pink-500 text-lg mb-8">Discover the beauty of nature, one bloom at a time!</p>
        <Link href="/components/molecules/shop">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
        </Link>

        <section className="mt-16 text-gray-700">
          <h2 className="text-3xl font-bold mb-8 text-pink-600 font-serif">Featuring:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card bg-white shadow-md">
              <figure className="relative">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeA5K-lrI_0Kqv4MuPFAi1okTPObyHYlmxEg&s" 
                  alt="Variety of Colors" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-pink-900">Variety of Flowers!</h3>
                <p className="text-pink-500">Our shop bursts with a vibrant array of flowers in every hue imaginable, 
                  from the soft pastels of lavender and blush pink to the bold reds, yellows, 
                  and purples dancing in the sunlight.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-white shadow-md">
              <figure className="relative">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlPADd86p0ka_JvCL45n8E58gJeIcsFHvEA&s" 
                  alt="Full Of Blossoms" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-pink-900">Full Of Blossoms!</h3>
                <p className="text-pink-500">Flowers reveal their intricate shapes and textures, 
                  each bloom radiating beauty and conveying a unique sense of joy and elegance.</p>
              </div>
            </div>

            {/* Card 3 - "Perfect For Any Occasions!" */}
            <div className="card bg-white shadow-md">
              <figure className="relative">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbAoeHpAVaZtPJ-6krufB0j6kZDcTjakgEQ&s" 
                  alt="Perfect For Any Occasions" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-pink-900 text-2xl font-semibold">Perfect For Any Occasions!</h3>
                <p className="text-pink-500 ">Our shop is full of blossoms, creating a vibrant, 
                  colorful space where flowers flourish—perfect for any occasion, whether it's a holiday or any season, 
                  bringing beauty and freshness to every moment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pink-500">&copy; 2024 Jacinto's FlowerShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default UserHome;
