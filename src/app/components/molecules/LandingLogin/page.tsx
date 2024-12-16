import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function LandingLogin() {
  return (
    <div className="bg-rose-200 min-h-screen">
      <Head>
        <title>Login - Jacinto's FlowerShop</title>
        <meta name="description" content="Login to Jacinto's FlowerShop to access your account and shop for fresh blooms." />
      </Head>

      {/* Header */}
      <header className="bg-rose-900 shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <img 
            src="/images/png.png" 
            alt="Jacinto's FlowerShop Logo" 
            width={160}    // Increased size
            height={40}
            className="h-14"  // Adjust height as needed
          />
          <nav className="hidden md:flex space-x-4">
          <Link href="/components/molecules/Home" className="text-gray-300 hover:text-blue-500">Home</Link>
            <Link href="/components/molecules/LandingContact" className="text-gray-300 hover:text-blue-500">Contact</Link>
            <Link href="/components/molecules/LandingLogin" className="text-gray-300 hover:text-blue-500">Login</Link>
          </nav>
        </div>
      </header>

      {/* Login Form */}
      <main className="container mx-auto py-16 px-6">
        {/* Login Heading */}
        <h2 className="text-pink-600 text-3xl font-serif font-bold mb-6 text-center">Login to Your Account</h2>

        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-pink-500 font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-pink-500 font-bold mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account? <Link href="/components/molecules/LandingSignUp" className="text-pink-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pink-500">&copy; 2024 Jacinto's FlowerShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingLogin;
