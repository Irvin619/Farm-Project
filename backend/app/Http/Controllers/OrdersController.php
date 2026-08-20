<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Orders::all();
        return response()->json($orders);
    }

    public function getOrdersPerUser($id){
        $orders = Orders::with('products')->where('user_id', $id)->get();
        return response()->json($orders);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $products = $request->products;
        try{
            foreach ($products as $products) {                
                $orders = new Orders();
                $orders->products_id = $products['products_id'];
                $orders->user_id = $request->user_id;
                $orders->quantity = $products['quantity'];
                $orders->order_status = 1;
                $orders->save();
            }
            return response()->json([
                'message' => 'Order created successfully!',
                
            ], 201);
        }catch (\Exception $exception) {
            return response()->json([
                "Error" => "Order creation failed: ",
                $exception
            ], 500);
        }    

    }

    /**
     * Display the specified resource.
     */
    public function show(Orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Orders $orders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Orders $orders)
    {
        //
    }
}