<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

// Define the route for getting all products
Route::get('products', [ApiController::class, 'index']);