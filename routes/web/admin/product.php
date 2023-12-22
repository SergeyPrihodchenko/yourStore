<?php

use App\Http\Controllers\admin\ProductController;
use Illuminate\Support\Facades\Route;

Route::post('/admin/setProduct', [ProductController::class, 'setProduct'])->name('setProduct');
Route::delete('/admin/deleteProduct/{id}', [ProductController::class, 'deleteProduct'])->name('deleteProduct');
Route::post('/admin/updateProduct/{id}', [ProductController::class, 'updateProduct'])->name('updateProduct');

