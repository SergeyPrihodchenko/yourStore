<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\CategoryRequest;
use App\Models\admin\category\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return Inertia::render('Admin/Category/CategoryPage', ['categories' => $categories]);
    }
    public function store(CategoryRequest $categoryRequest)
    {
      $data = $categoryRequest->validated();
      Category::create($data);
    }

    public function destroy(Category $category)
    {
      $category->delete();
    }
}
