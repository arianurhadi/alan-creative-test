<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\CartResource;
use App\Http\Resources\CartCollection;
use App\Http\Requests\CartCreateRequest;
use App\Http\Requests\CartUpdateRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CartController extends Controller
{
    public function create(CartCreateRequest $request): JsonResponse
    {
        $data = $request->validated();

        $cart = Cart::create($data);

        return (new CartResource($cart))->response()->setStatusCode(201);
    }

    public function get(int $id): CartResource
    {
        $cart = Cart::find($id);
        if (!$cart) {
            throw new HttpResponseException(response()->json([
                "errors" => [
                    "message" => [
                        "not found"
                    ]
                ]
            ])->setStatusCode(404));
        }

        return new CartResource($cart);
    }

    public function update(CartUpdateRequest $request, int $id): CartResource
    {
        $cart = Cart::find($id);

        if (!$cart) {
            throw new HttpResponseException(response()->json([
                "errors" => [
                    "message" => [
                        "not found"
                    ]
                ]
            ])->setStatusCode(404));
        }

        $data = $request->validated();

        $cart->update($data);

        return new CartResource($cart);
    }

    public function delete(int $id): JsonResponse
    {
        $cart = Cart::find($id);

        if (!$cart) {
            throw new HttpResponseException(response()->json([
                "errors" => [
                    "message" => [
                        "not found"
                    ]
                ]
            ])->setStatusCode(404));
        }

        $cart->delete();

        return response()->json([
            'data' => true
        ])->setStatusCode(200);
    }

    public function search(Request $request): CartCollection
    {
        $page = $request->input('page', 1);
        $size = $request->input('size', 10);

        $carts = Cart::query();

        $carts = $carts->paginate(perPage: $size, page: $page);

        return new CartCollection($carts);
    }
}
