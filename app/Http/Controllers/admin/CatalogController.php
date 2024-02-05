<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\CatalogRequest;
use App\Http\Requests\CategoryRequest;
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

        return Inertia::render('Admin/Catalog/CatalogPage', ['list' => $data]);
    }

    public function store(CatalogRequest $catalogRequest)
    {
      $catalogRequest = $catalogRequest->validated();

      Catalog::create($catalogRequest);
    }

    public function catalogsByCategory($id): array
    {
        $category = Category::find($id);

        $catalogs = $category->catalogs;

        return ['catalogs' => $catalogs];
    }
    public function destroy(Catalog $catalog)
    {
      $catalog->delete();
    }
}
