<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\MenuController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/menus', [MenuController::class, 'create']);
Route::get('/menus', [MenuController::class, 'search']);
Route::get('/menus/{id:0-9}', [MenuController::class, 'get']);
Route::put('/menus/{id:0-9}', [MenuController::class, 'update']);
Route::delete('/menus/{id:0-9}', [MenuController::class, 'delete']);

Route::post('/carts', [CartController::class, 'create']);
Route::get('/carts', [CartController::class, 'search']);
Route::get('/carts/{id:0-9}', [CartController::class, 'get']);
Route::put('/carts/{id:0-9}', [CartController::class, 'update']);
Route::delete('/carts/{id:0-9}', [CartController::class, 'delete']);
