"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Order {
  orderNumber: string;
  product: string;
  size: string;
  color: string;
  addons: string[];
  quantity: string;
  total: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  status: string;
}

export default function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  // Simulate fetching orders from localStorage on component mount
  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  return (
    <div className="min-h-screen bg-rose-50">
      <header className="bg-rose-900 shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/images/png.png"
              alt="Jacinto's FlowerShop Logo"
              width={160}    // Increased size
              height={40} 
              className="h-14"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/components/molecules/UserHome" className="text-gray-300 hover:text-rose-500">Home</Link>
            <Link href="/components/molecules/shop" className="text-gray-300 hover:text-rose-500">Shop</Link>
            <Link href="/components/molecules/Contact" className="text-gray-300 hover:text-rose-500">Contact</Link>
            <Link href="/components/molecules/Home" className="text-gray-300 hover:text-rose-500">Log Out</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-rose-800 mb-8 text-center">My Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
            <Link
              href="/components/molecules/shop"
              className="inline-block bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.orderNumber}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-rose-700">
                      Order #{order.orderNumber}
                    </h2>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {order.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Order Details</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">Product: <span className="font-medium">{order.product}</span></p>
                      <p className="text-gray-600">Size: <span className="font-medium">{order.size}</span></p>
                      <p className="text-gray-600">Color: <span className="font-medium">{order.color}</span></p>
                      <p className="text-gray-600">Quantity: <span className="font-medium">{order.quantity}</span></p>
                      {order.addons.length > 0 && (
                        <p className="text-gray-600">
                          Add-ons: <span className="font-medium">{order.addons.join(', ')}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Shipping Information</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">Name: <span className="font-medium">{order.name}</span></p>
                      <p className="text-gray-600">Email: <span className="font-medium">{order.email}</span></p>
                      <p className="text-gray-600">Phone: <span className="font-medium">{order.phone}</span></p>
                      <p className="text-gray-600">Address: <span className="font-medium">{order.address}</span></p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="text-xl font-bold text-rose-700">${order.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="bg-gray-100 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-rose-500">&copy; 2024 Jacinto's FlowerShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}