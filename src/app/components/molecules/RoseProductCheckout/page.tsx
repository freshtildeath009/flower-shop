"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ProductData, FormData, SelectedOptions } from "./types";

export default function RoseProductCheckout() {
  const router = useRouter();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "", // Add phone field
    address: "",
    errors: {
      name: "",
      email: "",
      phone: "", // Add phone error field
      address: ""
    }
  });

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    size: "Small (12 stems)",
    addons: [],
    color: "Red"
  });

  const [selectedRose, setSelectedRose] = useState<ProductData>({
    id: 1,
    name: "Rose Bouquet",
    type: `${selectedOptions.color} Roses`,
    description: "A beautiful bouquet of fresh roses.",
    basePrice: 25,
    quantity: 1,
    imageUrl: "/images/red-roses-bouquet.jpg",
    options: {
      colors: ["Red", "Pink", "White", "Yellow"],
      sizes: [
        { name: "Small (12 stems)", price: 25 },
        { name: "Medium (24 stems)", price: 45 },
        { name: "Large (36 stems)", price: 65 }
      ],
      addons: [
        { name: "Vase", price: 15 },
        { name: "Greeting Card", price: 5 },
        { name: "Chocolate Box", price: 12 },
        { name: "Gift Wrapping", price: 8 }
      ]
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "email":
        return !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
          ? "Please enter a valid email address"
          : "";
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case "address":
        return value.length < 5 ? "Please enter a valid address" : "";
      case "phone":
      return !value.match(/^\+?[\d\s-]{10,}$/)
        ? "Please enter a valid phone number"
        : "";
    default:
      return "";
        
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: error
      }
    }));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(prev => ({
      ...prev,
      size: e.target.value
    }));
  };

  const handleAddonChange = (addon: { name: string; price: number }) => {
    setSelectedOptions(prev => {
      const newAddons = prev.addons.includes(addon.name)
        ? prev.addons.filter(item => item !== addon.name)
        : [...prev.addons, addon.name];
      return { ...prev, addons: newAddons };
    });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(prev => ({
      ...prev,
      color: e.target.value
    }));
    setSelectedRose(prev => ({
      ...prev,
      type: `${e.target.value} Roses`
    }));
  };

  const handleQuantityChange = (delta: number) => {
    setSelectedRose(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta)
    }));
  };

  const calculateTotal = (): number => {
    const selectedSizePrice = selectedRose.options.sizes.find(
      size => size.name === selectedOptions.size
    )?.price || 0;

    const addonsTotal = selectedOptions.addons.reduce((total, addonName) => {
      const addon = selectedRose.options.addons.find(a => a.name === addonName);
      return total + (addon?.price || 0);
    }, 0);

    return (selectedSizePrice + addonsTotal) * selectedRose.quantity;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setOrderError(null);

    const hasErrors = Object.values(formData.errors).some(error => error);
    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const total = calculateTotal();
      
       // Create the query string properly
       const queryParams = new URLSearchParams({
        product: selectedRose.name,
        size: selectedOptions.size,
        color: selectedOptions.color,
        addons: JSON.stringify(selectedOptions.addons),
        quantity: selectedRose.quantity.toString(),
        total: total.toFixed(2),
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase()
      }).toString();

      // Use router.push with the full path
      router.push(`/components/molecules/OrderSummary?${queryParams}`);
    } catch (error) {
      setOrderError("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-rose-200 min-h-screen">
      <Head>
        <title>Rose Bouquet - Jacinto's FlowerShop</title>
        <meta name="description" content="Order beautiful premium rose bouquets from Jacinto's FlowerShop" />
      </Head>

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
          <Link href="/components/molecules/UserHome" className="text-gray-300 hover:text-blue-500">Home</Link>
            <Link href="/components/molecules/shop" className="text-gray-300 hover:text-blue-500">Shop</Link>
            <Link href="/components/molecules/Contact" className="text-gray-300 hover:text-blue-500">Contact</Link>
            <Link href="/components/molecules/MyOrders" className="text-gray-300 hover:text-blue-500">My Order</Link>
            <Link href="/components/molecules/Home" className="text-gray-300 hover:text-blue-500">Log Out</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {orderError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {orderError}
          </div>
        )}

        <h1 className="text-3xl font-serif font-bold text-center text-pink-800 mb-8">
          Rose Bouquet
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Details */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">
              {selectedRose.name}
            </h2>
            <p className="text-gray-600 mb-4">{selectedRose.description}</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Select Color:</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={selectedOptions.color}
                  onChange={handleColorChange}
                >
                  {selectedRose.options.colors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Select Size:</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={selectedOptions.size}
                  onChange={handleSizeChange}
                >
                  {selectedRose.options.sizes.map((size) => (
                    <option key={size.name} value={size.name}>
                      {size.name} - ${size.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Add-ons:</label>
                {selectedRose.options.addons.map((addon) => (
                  <label key={addon.name} className="flex items-center justify-between p-2 border rounded-md mb-2 bg-pink-100 hover:bg-pink-200">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-pink-600 focus:ring-pink-500"
                        checked={selectedOptions.addons.includes(addon.name)}
                        onChange={() => handleAddonChange(addon)}
                      />
                      <span className="text-pink-600">{addon.name}</span>
                    </div>
                    <span className="text-pink-600 font-semibold">${addon.price}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Quantity:</label>
                <div className="flex items-center space-x-4">
                  <button 
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold text-pink-600 border-2 rounded-md hover:bg-pink-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 h-10 flex items-center justify-center border-2 rounded-md bg-pink-50 text-pink-800 text-xl font-bold">
                    {selectedRose.quantity}
                  </span>
                  <button 
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold text-pink-600 border-2 rounded-md hover:bg-pink-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold text-pink-600 mb-6">Order Details</h2>
            
            <div className="space-y-4 mb-6">
            {Object.entries(formData).map(([key, value]) => {
  if (key === "errors") return null;
  return (
    <div key={key} className="space-y-1">
      <input 
        type={key === "email" ? "email" : "text"}
        name={key}
        value={value}
        onChange={handleInputChange}
        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
        className={`w-full p-2 border rounded-md ${
          formData.errors[key as keyof typeof formData.errors] ? "border-red-500" : ""
        }`}
        required
      />
      {formData.errors[key as keyof typeof formData.errors] && (
        <p className="text-red-500 text-sm">{formData.errors[key as keyof typeof formData.errors]}</p>
      )}
    </div>
                );
              })}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Base Price ({selectedOptions.size}):</span>
                <span className="text-pink-800">
                  ${selectedRose.options.sizes.find(size => size.name === selectedOptions.size)?.price}
                </span>
              </div>
              <div className="flex items-center justify-between font-bold text-lg text-pink-800 pt-2">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting || Object.values(formData.errors).some(error => error)}
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-800 disabled:bg-gray-400"
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pink-500">&copy; 2024 Jacinto's FlowerShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}