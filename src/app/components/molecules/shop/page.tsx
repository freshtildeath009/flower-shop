import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function shop() {
  const products = [
    {
      id: 1,
      name: "Rose Bouquet",
      description: "A beautiful bouquet of fresh roses.",
      price: "$25.00",
      image: "/images/rose1.png",
      buyLink: "/components/molecules/RoseProductCheckout", // Example link for Roses
    },
    {
      id: 2,
      name: "Tulip Bundle",
      description: "A bundle of vibrant tulips to brighten up any space.",
      price: "$20.00",
      image: "/images/tulips.png",
      buyLink: "/components/molecules/TulipProductCheckout", // Example link for Tulips
    },
    {
      id: 3,
      name: "Sunflower Stand",
      description: "A tall arrangement of cheerful sunflowers.",
      price: "$25.00",
      image: "/images/sun.png",
      buyLink: "/components/molecules/SunflowerProductCheckout", // Example link for Sunflowers
    },
    {
      id: 4,
      name: "Orchid Pot",
      description: "Exquisite orchids in a decorative pot.",
      price: "$19.00",
      image: "/images/orchids.png",
      buyLink: "/components/molecules/OrchidProductCheckout", // Example link for Orchids
    },
    {
      id: 5,
      name: "Lilies",
      description: "A delicate arrangement of fragrant lilies.",
      price: "$25.00",
      image: "/images/lily.png",
      buyLink: "/components/molecules/LilyProductCheckout", // Example link for Lilies
    },
    {
      id: 6,
      name: "Daisy Mix",
      description: "A mix of colorful daisies perfect for any occasion.",
      price: "$20.00",
      image: "/images/daisy.png",
      buyLink: "/components/molecules/DaisyProductCheckout", // Example link for Daisies
    },
    {
      id: 7,
      name: "Carnation Delight",
      description: "A delightful bouquet of carnations.",
      price: "$25.00",
      image: "/images/car.png",
      buyLink: "/components/molecules/CarnationProductCheckout", // Example link for Carnations
    },
    {
      id: 8,
      name: "Lavender",
      description: "Elegant lavender blooms in a decorative display.",
      price: "$20.00",
      image: "/images/lav.png", // Make sure this image path is correct
      buyLink: "/components/molecules/LavenderProductCheckout", // Example link for Lavender
    },
    {
      id: 9,
      name: "Kadupul Flower",
      description: "Rare and mystical Kadupul flower, known for its fleeting beauty and exquisite fragrance.",
      price: "$35.00",
      image: "/images/kad.png",
      buyLink: "/components/molecules/KadupulProductCheckout", // Example link for Kadupul
    },
  ];

  return (
    <div className="bg-rose-200 min-h-screen">
      <Head>
        <title>Jacinto's FlowerShop</title>
        <meta name="description" content="Discover beautiful flowers at Jacinto's FlowerShop!" />
      </Head>

      {/* Header Section */}
      <header className="bg-rose-900 shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <img
            src="/images/png.png"
            alt="Your Flower Shop Logo"
            width={160}    // Increased size
            height={40}
            className="h-14"
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

      {/* Product Section */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-pink-600 text-4xl font-bold mb-6 text-center font-serif">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover mb-4 rounded transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                />
                <h2 className="text-pink-900 text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-pink-500">{product.description}</p>
                <p className="text-gray-800 font-semibold mb-4">{product.price}</p>

                {/* Buy Now Button */}
                <Link href={product.buyLink}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pink-500">&copy; 2024 Jacinto's FlowerShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default shop;
