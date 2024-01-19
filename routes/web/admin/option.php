<?php

use App\Http\Controllers\admin\OptionController;
use App\Http\Controllers\admin\ValueOptionController;
use Illuminate\Support\Facades\Route;

Route::get('admin/option', [OptionController::class, 'index'])->name('option');

Route::post('admin/setOption', [OptionController::class, 'setOption'])->name('setOption');
Route::put('admin/updateOption', [OptionController::class, 'updateOption'])->name('updateOption');
Route::delete('admin/deleteOption', [OptionController::class, 'deleteOption'])->name('deleteOption');

Route::post('admin/setValueOption', [ValueOptionController::class, 'setValueOption'])->name('setValueOption');
Route::put('admin/updateValueOption', [ValueOptionController::class, 'updateValueOption'])->name('updateValueOption');
Route::delete('admin/deleteValueOption', [ValueOptionController::class, 'deleteValueOption'])->name('deleteValueOption');