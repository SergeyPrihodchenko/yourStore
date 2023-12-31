<?php

use App\Http\Controllers\admin\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/product', [ProductController::class, 'index'])->name('admin.product');

Route::post('/admin/product/set', [ProductController::class, 'setProduct'])->name('setProduct');
Route::delete('/admin/product/delete/{id}', [ProductController::class, 'deleteProduct'])->name('deleteProduct');
Route::post('/admin/product/update/{id}', [ProductController::class, 'updateProduct'])->name('updateProduct');

