<?php

use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PublicController::class, 'index'])->name('home');
Route::get('/services', [PublicController::class, 'services'])->name('services.index');
Route::get('/gallery', [PublicController::class, 'gallery'])->name('gallery.index');
Route::get('/reviews', [PublicController::class, 'reviews'])->name('reviews.index');
Route::get('/contacts', [PublicController::class, 'contacts'])->name('contacts.index');

Route::post('/order', [PublicController::class, 'storeOrder'])->name('order.store');
