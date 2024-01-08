<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin/catalog', function () {return Inertia::render('Admin/Catalog/index', []);});