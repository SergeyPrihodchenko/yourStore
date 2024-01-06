<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\category\Catalog;
use App\Models\admin\category\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function index()
    {
        $data = [];

        $data['categories'] = Category::all();

        $data['catalogs'] = Catalog::all();

        return Inertia::render('Admin/Catalog/index', ['data' => $data]);
    }
}
