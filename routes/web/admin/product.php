<?php

use App\Http\Controllers\admin\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/product', [ProductController::class, 'index'])->name('admin.product');
Route::get('/admin/productPanel', [ProductController::class, 'indexPanel'])->name('admin.productPanel');
Route::get('admin/product/showOption/{id}', [ProductController::class, 'indexShowOption'])->name('indexShowOption');
Route::get('admin/product/filterControl/{id}', [ProductController::class, 'indexFilterControl'])->name('indexFilterControl');

Route::post('/admin/product/set', [ProductController::class, 'setProduct'])->name('setProduct');
Route::delete('/admin/product/delete/{id}', [ProductController::class, 'deleteProduct'])->name('deleteProduct');
Route::post('/admin/product/update/{id}', [ProductController::class, 'updateProduct'])->name('updateProduct');

Route::post('/admin/product/findByTitle', [ProductController::class, 'serchProduct'])->name('findByTitle');
Route::get('/admin/product/productsByCatalogs/{ID}', [ProductController::class, 'productsByCatalogs'])->name('productsByCatalogs');