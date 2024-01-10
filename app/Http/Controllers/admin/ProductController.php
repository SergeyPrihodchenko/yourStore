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

    public function productsByCategory($id)
    {
        $category = Category::find($id);


    }

    public function setProduct(RequestProduct $request)
    {
        try {

            $request = $request->validated();

            $product = Product::create($request);

            $request['product_id'] = $product->id;

            try {

                $product_image = new ProductImage;

                $product_image->setImage($request);
            } catch (\Throwable $th) {
                Log::channel('daily')->error($th->getPrevious()->getMessage());
            }
        } catch (\Throwable $th) {
            $error = new ProductAdminException('Error in created product data set');
            Log::channel('daily')->error($error->getMessage(), ['status_code' => $th->getPrevious()->getMessage()]);
        }
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
