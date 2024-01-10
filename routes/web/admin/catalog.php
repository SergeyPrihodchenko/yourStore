<?php

use App\Http\Controllers\admin\CatalogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin/catalog', [CatalogController::class, 'index']);
