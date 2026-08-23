<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Categories;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Products::all();

        foreach ($products as $product){
            $product->image = asset('/api/image' . $product->image);
            $product->category = Categories::where('id', $product->category_id)->first();

        }
        return response()->json($products);

    }
}