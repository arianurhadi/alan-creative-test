<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\MenuResource;
use App\Http\Resources\MenuCollection;
use App\Http\Requests\MenuCreateRequest;
use App\Http\Requests\MenuUpdateRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class MenuController extends Controller
{
    public function create(MenuCreateRequest $request): JsonResponse
    {
        $data = $request->validated();

        $menu = Menu::create($data);

        return (new MenuResource($menu))->response()->setStatusCode(201);
    }

    public function get(int $id): MenuResource
    {
        $menu = Menu::find($id);
        if (!$menu) {
            throw new HttpResponseException(response()->json([
                "errors" => [
                    "message" => [
                        "not found"
                    ]
                ]
            ])->setStatusCode(404));
        }

        return new MenuResource($menu);
    }

    public function update(MenuUpdateRequest $request, int $id): MenuResource
    {
        $menu = Menu::find($id);

        if (!$menu) {
            throw new HttpResponseException(response()->json([
                "errors" => [
                    "message" => [
                        "not found"
                    ]
                ]
            ])->setStatusCode(404));
        }

        $data = $request->validated();

        $menu->update($data);

        return new MenuResource($menu);
    }

    public function delete(int $id): JsonResponse
    {
        $menu = Menu::find($id);

        if (!$menu) {
            throw new HttpResponseException(response()->json([
                "errors" => [
                    "message" => [
                        "not found"
                    ]
                ]
            ])->setStatusCode(404));
        }

        $menu->delete();

        return response()->json([
            'data' => true
        ])->setStatusCode(200);
    }

    public function search(Request $request): MenuCollection
    {
        $page = $request->input('page', 1);
        $size = $request->input('size', 10);

        $menus = Menu::query();

        $name = $request->input('name');

        if ($name) {
            $menus = $menus->where('name', 'like', '%' . $name . '%');
        }

        $menus = $menus->paginate(perPage: $size, page: $page);

        return new MenuCollection($menus);
    }
}
