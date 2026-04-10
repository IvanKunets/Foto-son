<?php

namespace App\Http\Controllers;

use App\Models\GalleryCategory;
use App\Models\GalleryPhoto;
use App\Models\Order;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class PublicController extends Controller
{
    public function index(): View
    {
        $services = Service::query()
            ->where('is_visible', true)
            ->orderBy('sort_order')
            ->limit(3)
            ->get();

        $photos = GalleryPhoto::query()
            ->where('is_visible', true)
            ->orderByDesc('created_at')
            ->limit(6)
            ->get();

        $reviews = Review::query()
            ->where('is_visible', true)
            ->orderByDesc('created_at')
            ->limit(3)
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
            ->with('photos')
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
        return view('public.contacts');
    }

    public function storeOrder(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'client_name' => ['required', 'string', 'max:150'],
            'client_phone' => ['required', 'string', 'max:30'],
            'service_id' => ['nullable', 'exists:services,id'],
            'preferred_date' => ['nullable', 'date'],
            'comment' => ['nullable', 'string'],
        ]);

        Order::create([
            'client_name' => $validated['client_name'],
            'client_phone' => $validated['client_phone'],
            'service_id' => $validated['service_id'] ?? null,
            'preferred_date' => $validated['preferred_date'] ?? null,
            'comment' => $validated['comment'] ?? null,
            'status' => 'new',
        ]);

        return redirect()->back()->with('success', 'Спасибо! Ваша заявка отправлена.');
    }
}
