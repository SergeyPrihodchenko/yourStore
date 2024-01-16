<?php

namespace App\Http\Controllers\admin;

use App\Exceptions\ProductAdminException;
use App\Http\Controllers\Controller;
use App\Http\Requests\admin\RequestProduct;
use App\Models\admin\category\Catalog;
use App\Models\admin\category\Category;
use App\Models\admin\product\Product;
use App\Models\admin\product\ProductImage;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $catalogs = Catalog::all();
        $products = Product::all();

        return Inertia::render('Admin/Product/index', [
            'categories' => $categories, 
            'catalogs' => $catalogs,
            'products' => $products
        ]);
    }

    public function serchProduct(RequestProduct $request)
    {
        $value = $request->validated('value');

        $products = Product::where('title', 'like' ,"%$value%")->get()->toArray();

        return ['products' => $products];
    }

    public function productsByCatalogs($id)
    {
        $catalogs = Catalog::find($id);

        $products = $catalogs->products;

        return ['products' => $products];
    }

    public function setProduct(RequestProduct $request)
    {
            $request = $request->validated();

            $product = Product::create($request);

            $request['product_id'] = $product->id;

            $product_image = new ProductImage;

            $product_image->setImage($request);
    }

    public function deleteProduct(string $id): void
    {
        try {
            $product = Product::find($id);

            $images = $product->images;

            $imgs_path = [];

            foreach ($images as $image) {
                $imgs_path[] = $image['img_path'];
            }

            ProductImage::deleteImage($imgs_path);

            $product->delete();
        } catch (\Throwable $th) {
            Log::channel('daily')->error($th->getPrevious()->getMessage());
        }
    }

    public function updateProduct(RequestProduct $request, $id): void
    {
        try {
            $request = $request->validated();

            $product = Product::find($id);

            $product->update($request);
        } catch (\Throwable $th) {
            Log::channel('maily')->error($th->getPrevious()->getMessage());
        }
    }
}
