<?php

namespace App\Http\Controllers\api\Category;

use App\Http\Controllers\Controller;
use App\Models\admin\category\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAll()
    {
        $categories = Category::all();

        return $categories;
    }
}
