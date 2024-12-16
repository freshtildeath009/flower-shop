<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return view('admin.product.home');
    }

    public function create(){
        return view('admin.product.create');
    }

    public function save(Request $request){
        $validation = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
        ]);
        $data = Product::create($validation);
        if($data){
            session()->flash('success', 'Product created successfully');
            return redirect()->route('admin/products');
        }else{
            session()->flash('error', 'Failed to create product');
            return redirect(route('admin.products/create'));
        }


    }
}
