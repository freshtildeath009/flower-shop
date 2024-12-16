<?php

namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function all()
    {
    $products = Product::orderBy('id', 'desc')->get();
    return response()->json(['data' => $products]);
    }

 
    public function index(){
        $products = Product::orderBy('id', 'desc')->get();
        $total = Product::count();
        return view('admin.product.home', compact(['products', 'total']));
         // Get all products ordered by ID in descending order
        //  $products = Product::orderBy('id', 'desc')->get();
        
        //  // Return the products as a JSON response
        //  return response()->json($products);
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
        if ($data) {
            session()->flash('success', 'Product Add Successfully');
            return redirect(route('admin/products'));
        } else {
            session()->flash('error', 'Some problem occure');
            return redirect(route('admin.products/create'));
        }
    }

    public function edit($id)
    {
        $products = Product::findOrFail($id);
        return view('admin.product.update', compact('products'));
    }
    public function delete($id)
    {
        $products = Product::findOrFail($id)->delete();
        if ($products) {
            session()->flash('success', 'Product Deleted Successfully');
            return redirect(route('admin/products'));
        } else {
            session()->flash('error', 'Product Not Delete successfully');
            return redirect(route('admin/products'));
        }
    }
    public function update(Request $request, $id)
    {
        $products = Product::findOrFail($id);
        $title = $request->title;
        $description = $request->description;
        $price = $request->price;
 
        $products->title = $title;
        $products->description = $description;
        $products->price = $price;
        $data = $products->save();
        if ($data) {
            session()->flash('success', 'Product Update Successfully');
            return redirect(route('admin/products'));
        } else {
            session()->flash('error', 'Some problem occure');
            return redirect(route('admin/products/update'));
        }
    }
}
