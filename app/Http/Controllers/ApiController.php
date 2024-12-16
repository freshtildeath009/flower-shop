<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    // Method to fetch all products and return them in JSON format
    public function index()
    {
        // Get all products ordered by ID in descending order
        $products = Product::orderBy('id', 'desc')->get();
        
        // Return the products as a JSON response
        return response()->json($products);
    }
}