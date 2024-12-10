import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function LandingContact() {
  return (
    <div className="bg-rose-200 min-h-screen">
      <Head>
        <title>Contact - Jacinto's FlowerShop</title>
        <meta name="description" content="Contact Jacinto's FlowerShop for inquiries, orders, or assistance with your floral needs." />
      </Head>

      {/* Header */}
      <header className="bg-rose-900 shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <img 
            src="/images/png.png" 
            alt="Jacinto's FlowerShop Logo" 
            width={160}    // Increased size
            height={40}
            className="h-14"
          />
          <nav className="hidden md:flex space-x-4">
          <Link  href="/components/molecules/Home" className="text-gray-300 hover:text-blue-500"> Home</Link>

           <Link  href="/components/molecules/LandingContact" className="text-gray-300 hover:text-blue-500"> Contact </Link>
           <Link  href="/components/molecules/UserHome" className="text-gray-300 hover:text-blue-500"> Login </Link>
          </nav>
        </div>
      </header>

      {/* Contact Form */}
      <main className="container mx-auto py-16 px-6">
        <h2 className="text-pink-600 text-4xl font-bold mb-6 text-center font-serif">Get in Touch</h2>
        
        <p className="block text-pink-500 text-lg mb-8 text-center ">
          We'd love to hear from you! Whether you have a question, need assistance, or want to share your feedback, 
          please fill out the form below or use the contact information provided.
        </p>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-pink-500 font-bold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              />
            </div>
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
            <div className="mb-4">
              <label htmlFor="message" className="block text-pink-500 font-bold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Write your message" 
                rows={5} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300" 
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <section className="mt-16 text-center">
          <h3 className="text-pink-600 text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-pink-500 text-lg">
            📍 ACLC, Northpoint Business Center, Mandaue<br />
            📞 (123) 456-7890 <br />
            📧 prettyflowershopjacinto@gmail.com
          </p>
        </section>
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

export default LandingContact;
