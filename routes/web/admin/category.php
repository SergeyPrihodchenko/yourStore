<?php

use App\Http\Controllers\admin\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get('admin/category', [CategoryController::class, 'index']);
