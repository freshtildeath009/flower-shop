import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-8 text-center">
        <h1 className="text-5xl font-bold">Blossom Flower Shop</h1>
        <p className="mt-4 text-lg">Fresh flowers delivered to your door</p>
      </header>

      {/* Main Section */}
      <main className="py-12 px-4 sm:px-8 lg:px-16">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Our Featured Bouquets</h2>
          <p className="text-gray-600">Hand-picked, seasonal flowers perfect for any occasion</p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Flower Item 1 */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/rose-bouquet.jpg"
              alt="Rose Bouquet"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Rose Bouquet</h3>
              <p className="text-gray-600 mt-2">$49.99</p>
            </div>
          </div>

          {/* Flower Item 2 */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/tulip-bouquet.jpg"
              alt="Tulip Bouquet"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Tulip Bouquet</h3>
              <p className="text-gray-600 mt-2">$39.99</p>
            </div>
          </div>

          {/* Flower Item 3 */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/daisy-bouquet.jpg"
              alt="Daisy Bouquet"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Daisy Bouquet</h3>
              <p className="text-gray-600 mt-2">$29.99</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-green-600 text-white py-8 text-center">
        <p className="text-lg">© 2024 Blossom Flower Shop - All Rights Reserved</p>
        <p className="mt-2">123 Flower Street, Bloom City</p>
        <p className="mt-1">Contact us: (123) 456-7890</p>
      </footer>
    </div>
  );
}
