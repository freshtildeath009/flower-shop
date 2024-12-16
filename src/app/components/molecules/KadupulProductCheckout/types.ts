export interface ProductData {
    id: number;
    name: string;
    type: string;
    description: string;
    basePrice: number;
    quantity: number;
    imageUrl: string;
    options: {
      colors: string[];
      sizes: Array<{ name: string; price: number }>;
      addons: Array<{ name: string; price: number }>;
    };
  }
  
  export interface FormData {
    name: string;
    email: string;
    phone: string; // Add this line
    address: string;
    errors: {
      name: string;
      email: string;
      phone: string; // Add this line
      address: string;
    };
  }
  
  export interface SelectedOptions {
    size: string;
    addons: string[];
    color: string;
  }