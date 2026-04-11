<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GalleryPhoto;
use App\Models\Order;
use App\Models\Review;
use App\Models\Service;
use Illuminate\View\View;

class AdminDashboardController extends Controller
{
    public function index(): View
    {
        $ordersCount = Order::query()->where('status', 'new')->count();
        $servicesCount = Service::query()->count();
        $photosCount = GalleryPhoto::query()->count();
        $reviewsCount = Review::query()->where('is_visible', true)->count();

        $recentOrders = Order::query()
            ->with('service')
            ->orderByDesc('created_at')
            ->limit(5)
            ->get();

        return view('admin.dashboard', compact(
            'ordersCount',
            'servicesCount',
            'photosCount',
            'reviewsCount',
            'recentOrders'
        ));
    }
}
