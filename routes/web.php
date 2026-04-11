<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminGalleryCategoryController;
use App\Http\Controllers\Admin\AdminGalleryController;
use App\Http\Controllers\Admin\AdminGalleryPhotoController;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\AdminOrderController;
use App\Http\Controllers\Admin\AdminReviewController;
use App\Http\Controllers\Admin\AdminServiceController;
use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PublicController::class, 'index'])->name('home');
Route::get('/services', [PublicController::class, 'services'])->name('services.index');
Route::get('/gallery', [PublicController::class, 'gallery'])->name('gallery.index');
Route::get('/reviews', [PublicController::class, 'reviews'])->name('reviews.index');
Route::get('/contacts', [PublicController::class, 'contacts'])->name('contacts.index');

Route::post('/order', [PublicController::class, 'storeOrder'])->name('order.store');

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('login', [AdminLoginController::class, 'showLoginForm'])->name('login');
        Route::post('login', [AdminLoginController::class, 'login']);
    });

    Route::middleware('auth')->group(function () {
        Route::post('logout', [AdminLoginController::class, 'logout'])->name('logout');

        Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

        Route::get('orders', [AdminOrderController::class, 'index'])->name('orders.index');
        Route::post('orders/{order}/status', [AdminOrderController::class, 'updateStatus'])->name('orders.status');

        Route::get('services', [AdminServiceController::class, 'index'])->name('services.index');
        Route::get('services/create', [AdminServiceController::class, 'create'])->name('services.create');
        Route::post('services', [AdminServiceController::class, 'store'])->name('services.store');
        Route::get('services/{id}/edit', [AdminServiceController::class, 'edit'])->name('services.edit');
        Route::put('services/{id}', [AdminServiceController::class, 'update'])->name('services.update');
        Route::delete('services/{id}', [AdminServiceController::class, 'destroy'])->name('services.destroy');
        Route::post('services/{id}/toggle', [AdminServiceController::class, 'toggleVisible'])->name('services.toggle');

        Route::get('gallery', [AdminGalleryController::class, 'index'])->name('gallery');

        Route::prefix('gallery/categories')->name('gallery.categories.')->group(function () {
            Route::get('/', [AdminGalleryCategoryController::class, 'index'])->name('index');
            Route::get('create', [AdminGalleryCategoryController::class, 'create'])->name('create');
            Route::post('/', [AdminGalleryCategoryController::class, 'store'])->name('store');
            Route::get('{id}/edit', [AdminGalleryCategoryController::class, 'edit'])->name('edit');
            Route::put('{id}', [AdminGalleryCategoryController::class, 'update'])->name('update');
            Route::delete('{id}', [AdminGalleryCategoryController::class, 'destroy'])->name('destroy');
        });

        Route::prefix('gallery/photos')->name('gallery.photos.')->group(function () {
            Route::get('/', [AdminGalleryPhotoController::class, 'index'])->name('index');
            Route::get('create', [AdminGalleryPhotoController::class, 'create'])->name('create');
            Route::post('/', [AdminGalleryPhotoController::class, 'store'])->name('store');
            Route::get('{id}/edit', [AdminGalleryPhotoController::class, 'edit'])->name('edit');
            Route::put('{id}', [AdminGalleryPhotoController::class, 'update'])->name('update');
            Route::delete('{id}', [AdminGalleryPhotoController::class, 'destroy'])->name('destroy');
            Route::post('{id}/toggle', [AdminGalleryPhotoController::class, 'toggleVisible'])->name('toggle');
        });

        Route::get('reviews', [AdminReviewController::class, 'index'])->name('reviews.index');
        Route::get('reviews/create', [AdminReviewController::class, 'create'])->name('reviews.create');
        Route::post('reviews', [AdminReviewController::class, 'store'])->name('reviews.store');
        Route::get('reviews/{id}/edit', [AdminReviewController::class, 'edit'])->name('reviews.edit');
        Route::put('reviews/{id}', [AdminReviewController::class, 'update'])->name('reviews.update');
        Route::delete('reviews/{id}', [AdminReviewController::class, 'destroy'])->name('reviews.destroy');
        Route::post('reviews/{id}/toggle', [AdminReviewController::class, 'toggleVisible'])->name('reviews.toggle');
    });
});
