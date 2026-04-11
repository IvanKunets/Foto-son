<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Models\GalleryCategory;
use App\Models\GalleryPhoto;
use App\Models\Order;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class PublicController extends Controller
{
    public function index(): View
    {
        $services = Service::query()
            ->where('is_visible', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->limit(6)
            ->get();

        $photos = GalleryPhoto::query()
            ->where('is_visible', true)
            ->with('category')
            ->orderByDesc('created_at')
            ->orderByDesc('id')
            ->limit(6)
            ->get();

        $reviews = Review::query()
            ->where('is_visible', true)
            ->orderByDesc('created_at')
            ->orderByDesc('id')
            ->limit(6)
            ->get();

        return view('public.index', compact('services', 'photos', 'reviews'));
    }

    public function services(): View
    {
        $services = Service::query()
            ->where('is_visible', true)
            ->orderBy('sort_order')
            ->get();

        return view('public.services', compact('services'));
    }

    public function gallery(): View
    {
        $categories = GalleryCategory::query()
            ->where('is_visible', true)
            ->with(['photos' => function ($query) {
                $query->where('is_visible', true)->orderBy('sort_order');
            }])
            ->orderBy('sort_order')
            ->get();

        return view('public.gallery', compact('categories'));
    }

    public function reviews(): View
    {
        $reviews = Review::query()
            ->where('is_visible', true)
            ->orderByDesc('created_at')
            ->get();

        return view('public.reviews', compact('reviews'));
    }

    public function contacts(): View
    {
        $services = Service::query()
            ->where('is_visible', true)
            ->orderBy('sort_order')
            ->get();

        return view('public.contacts', compact('services'));
    }

    public function storeOrder(StoreOrderRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Order::create([
            'client_name' => $validated['client_name'],
            'client_phone' => $validated['client_phone'],
            'service_id' => $validated['service_id'],
            'preferred_date' => $validated['preferred_date'] ?? null,
            'comment' => $validated['comment'] ?? null,
            'status' => 'new',
        ]);

        return redirect()->back()->with('success', 'Спасибо! Ваша заявка отправлена.');
    }
}
