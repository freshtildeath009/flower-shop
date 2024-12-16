"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function OrderSummary() {
  const searchParams = useSearchParams();

  const orderDetails = {
    product: searchParams.get('product') || 'N/A',
    size: searchParams.get('size') || 'N/A',
    color: searchParams.get('color') || 'N/A',
    addons: JSON.parse(searchParams.get('addons') || '[]'),
    quantity: searchParams.get('quantity') || '1',
    total: searchParams.get('total') || '0.00',
    name: searchParams.get('name') || 'N/A',
    email: searchParams.get('email') || 'N/A',
    address: searchParams.get('address') || 'N/A',
    orderNumber: searchParams.get('orderNumber') || 'N/A',
    phone: searchParams.get('phone') || 'N/A',
  };

  // Save order to localStorage when component mounts
  useEffect(() => {
    // Get existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Check if order already exists
    const orderExists = existingOrders.some(
      (order: any) => order.orderNumber === orderDetails.orderNumber
    );

    // Only add the order if it doesn't already exist
    if (!orderExists) {
      // Create new order with timestamp and status
      const newOrder = {
        ...orderDetails,
        date: new Date().toLocaleDateString(),
        status: 'Processing'
      };
      
      // Add new order to the beginning of existing orders array
      const updatedOrders = [newOrder, ...existingOrders];
      
      // Save updated orders back to localStorage
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
    }
  }, [orderDetails.orderNumber]); // Add orderNumber as dependency

  return (
    <div className="min-h-screen bg-rose-100">
      {/* Add header */}
      <header className="bg-rose-900 shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Jacinto's FlowerShop Logo"
              className="h-12"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/components/molecules/UserHome" className="text-gray-300 hover:text-rose-500">Home</Link>
            <Link href="/components/molecules/shop" className="text-gray-300 hover:text-rose-500">Shop</Link>
            <Link href="/components/molecules/Contact" className="text-gray-300 hover:text-rose-500">Contact</Link>
            <Link href="/components/molecules/MyOrders" className="text-gray-300 hover:text-rose-500">My Orders</Link>
            <Link href="/components/molecules/Home" className="text-gray-300 hover:text-rose-500">Log Out</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          {/* Add success icon */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-rose-800 mb-2">Order Confirmation</h1>
            <p className="text-gray-600">Thank you for your order!</p>
            <p className="text-sm text-gray-500">Order #{orderDetails.orderNumber}</p>
          </div>

          <div className="border-t border-b py-4 mb-6">
            <h2 className="text-xl font-semibold text-rose-700 mb-4">Order Details</h2>
            <div className="space-y-3">
              {[
                { label: 'Product', value: orderDetails.product },
                { label: 'Color', value: orderDetails.color },
                { label: 'Size', value: orderDetails.size },
                { label: 'Quantity', value: orderDetails.quantity },
                { label: 'Add-ons', value: orderDetails.addons.join(', ') || 'None' },
              ].map((item) => (
                <div className="flex justify-between" key={item.label}>
                  <span className="text-gray-600">{item.label}:</span>
                  <span className="font-medium text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b pb-4 mb-6">
            <h2 className="text-xl font-semibold text-rose-700 mb-4">Shipping Information</h2>
            <div className="space-y-3">
              {[
                { label: 'Name', value: orderDetails.name },
                { label: 'Email', value: orderDetails.email },
                { label: 'Phone', value: orderDetails.phone }, 
                { label: 'Address', value: orderDetails.address },
              ].map((item) => (
                <div className="flex justify-between" key={item.label}>
                  <span className="text-gray-600">{item.label}:</span>
                  <span className="font-medium text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center text-xl font-bold text-rose-800">
              <span>Total:</span>
              <span>${orderDetails.total}</span>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-600">
              A confirmation email has been sent to <span className="font-semibold">{orderDetails.email}</span>.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/components/molecules/MyOrders"
                className="inline-block bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition-colors"
              >
                View My Orders
              </Link>
              <Link 
                href="/components/molecules/shop"
                className="inline-block bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add footer */}
      <footer className="bg-gray-100 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-rose-500">&copy; 2024 Jacinto's FlowerShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}