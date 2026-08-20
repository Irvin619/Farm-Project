<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductsController;

//public routes
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('fetchAllProducts', [ProductsController::class, 'index']);
Route::get('fetchAllCategories', [CategoriesController::class, 'index']);

//private routes
Route::middleware('auth:sanctum')->group(function () {
  Route::post('fetchAllOrders', [OrdersController::class, 'index']);

  });
