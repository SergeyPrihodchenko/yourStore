<?php

use App\Http\Controllers\api\Category\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/category/getAll', [CategoryController::class, 'getAll'])->name('all');
