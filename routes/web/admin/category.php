<?php

use App\Http\Controllers\admin\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get('admin/category', [CategoryController::class, 'index'])->name('category.index');
Route::post('admin/category', [CategoryController::class, 'store'])->name('category.store');
Route::delete('admin/category/{category}', [CategoryController::class, 'destroy'])->name('category.destroy');


