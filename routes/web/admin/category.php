<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin/category', function () {return Inertia::render('Admin/Category/index');});
