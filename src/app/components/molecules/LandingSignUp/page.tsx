'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

function LandingSignUp() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
    gender: '',
    status: '',
    citizenship: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Add CSRF token handling for Laravel
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sanctum/csrf-cookie`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        }
      });
      console.log('CSRF cookie fetched');
      console.log('API URL:', `${process.env.NEXT_PUBLIC_API_URL}/api/register`);


      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          console.log('Registration successful');

        }
        alert('Registration successful!');
        router.push('/components/molecules/Login');
      } else {
        // Handle validation errors or other error messages from Laravel
        const errorMessage = data.message || Object.values(data.errors || {}).flat().join('\n');
        console.error('Registration failed:', errorMessage);

        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-rose-200 min-h-screen">
      <Head>
        <title>Sign Up - Jacinto's FlowerShop</title>
        <meta name="description" content="Create an account to join Jacinto's FlowerShop and start shopping for fresh blooms." />
      </Head>

      {/* Header */}
      <header className="bg-rose-900 shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link href="/">
            <img 
              src="/images/png.png" 
              alt="Jacinto's FlowerShop Logo" 
              width={160}    // Increased size
            height={40}
              className="h-14"
            />
          </Link>
          <nav className="hidden md:flex space-x-4">
          <Link href="/components/molecules/Home" className="text-gray-300 hover:text-blue-500">Home</Link>
            <Link href="/components/molecules/LandingContact" className="text-gray-300 hover:text-blue-500">Contact</Link>
            <Link href="/components/molecules/LandingLogin" className="text-gray-300 hover:text-blue-500">Login</Link>
          </nav>
        </div>
      </header>

      {/* Sign Up Form */}
      <main className="container mx-auto py-16 px-6">
        <h2 className="text-pink-600 text-3xl font-bold font-serif mb-6 text-center">Create A New Account</h2>

        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-pink-500 font-bold mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <label htmlFor="age" className="block text-pink-500 font-bold mb-2">Age</label>
              <input 
                type="text" 
                id="age" 
                name="age" 
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter your age" 
                pattern="\d*"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-pink-500 font-bold mb-2">Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>

{/* Add this phone number field after the address field */}
<div className="mb-4">
  <label htmlFor="phone" className="block text-pink-500 font-bold mb-2">Phone Number</label>
  <input 
    type="tel" 
    id="phone" 
    name="phone" 
    value={formData.phone}
    onChange={handleInputChange}
    placeholder="Enter your phone number" 
    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
    required 
  />
</div>


            {/* Gender */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-pink-500 font-bold mb-2">Gender</label>
              <select 
                id="gender" 
                name="gender" 
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Marital Status */}
            <div className="mb-4">
              <label htmlFor="status" className="block text-pink-500 font-bold mb-2">Marital Status</label>
              <select 
                id="status" 
                name="status" 
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required
              >
                <option value="">Select your status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="widow">Widow</option>
              </select>
            </div>

            {/* Citizenship */}
            <div className="mb-4">
              <label htmlFor="citizenship" className="block text-pink-500 font-bold mb-2">Citizenship</label>
              <input 
                type="text" 
                id="citizenship" 
                name="citizenship" 
                value={formData.citizenship}
                onChange={handleInputChange}
                placeholder="Enter your citizenship" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-pink-500 font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-pink-500 font-bold mb-2">Create Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          {/* Link to Login */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account? {' '}
            <Link href="/components/molecules/LandingLogin" className="text-pink-600 hover:underline">
              Login
            </Link>
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

export default LandingSignUp;