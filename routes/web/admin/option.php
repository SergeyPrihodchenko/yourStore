<?php

use App\Http\Controllers\admin\OptionController;
use App\Http\Controllers\admin\ValueOptionController;
use Illuminate\Support\Facades\Route;

Route::get('admin/option', [OptionController::class, 'index'])->name('option');

Route::post('admin/option/setOption', [OptionController::class, 'setOption'])->name('setOption');
Route::put('admin/option/updateOption', [OptionController::class, 'updateOption'])->name('updateOption');
Route::delete('admin/option/deleteOption', [OptionController::class, 'deleteOption'])->name('deleteOption');

Route::post('admin/option/setValueOption', [ValueOptionController::class, 'setValueOption'])->name('setValueOption');
Route::put('admin/option/updateValueOption', [ValueOptionController::class, 'updateValueOption'])->name('updateValueOption');
Route::delete('admin/option/deleteValueOption', [ValueOptionController::class, 'deleteValueOption'])->name('deleteValueOption');

Route::post('admin/option/valuesForOption', [ValueOptionController::class, 'valuesForOption'])->name('valuesForOption');