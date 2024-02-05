<?php

use App\Http\Controllers\admin\CatalogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin/catalog', [CatalogController::class, 'index'])->name('catalog.index');
Route::get('/admin/catalog/catalogsByCategory/{id}', [CatalogController::class, 'catalogsByCategory'])->name('catalogsByCategory');

Route::post('/admin/catalog', [CatalogController::class, 'store'])->name('catalog.store');

Route::delete('admin/catalog/{catalog}', [CatalogController::class, 'destroy'])->name('catalog.destroy');
