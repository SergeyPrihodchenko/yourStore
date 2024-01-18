<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\category\Category;
use App\Http\Requests\CategoryRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return Inertia::render('Admin/Category/index', ['categories' => $categories]);
    }

    public function store(CategoryRequest $request)
    {
        $data = $request->validated();
        dd($data);
    }

    public function destroy(Category $category)
    {
        $category->delete();
    }
}
