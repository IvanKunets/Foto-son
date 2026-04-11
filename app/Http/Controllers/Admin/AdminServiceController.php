<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminServiceRequest;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;

class AdminServiceController extends Controller
{
    public function index(): View
    {
        $services = Service::query()
            ->orderBy('sort_order')
            ->paginate(15);

        return view('admin.services.index', compact('services'));
    }

    public function create(): View
    {
        return view('admin.services.create');
    }

    public function store(AdminServiceRequest $request): RedirectResponse
    {
        Service::create([
            'title' => $request->validated('title'),
            'slug' => $this->uniqueSlug($request->validated('title')),
            'description' => $request->validated('description'),
            'price' => $request->validated('price'),
            'image' => $request->file('image')->store('services', 'public'),
            'is_visible' => $request->boolean('is_visible'),
            'sort_order' => $request->validated('sort_order'),
        ]);

        return redirect()
            ->route('admin.services.index')
            ->with('success', 'Услуга добавлена.');
    }

    public function edit(int $id): View
    {
        $service = Service::query()->findOrFail($id);

        return view('admin.services.edit', compact('service'));
    }

    public function update(AdminServiceRequest $request, int $id): RedirectResponse
    {
        $service = Service::query()->findOrFail($id);

        $payload = [
            'title' => $request->validated('title'),
            'slug' => $this->uniqueSlug($request->validated('title'), $service->id),
            'description' => $request->validated('description'),
            'price' => $request->validated('price'),
            'is_visible' => $request->boolean('is_visible'),
            'sort_order' => $request->validated('sort_order'),
        ];

        if ($request->hasFile('image')) {
            if ($service->image && ! str_starts_with((string) $service->image, 'http')) {
                Storage::disk('public')->delete($service->image);
            }
            $payload['image'] = $request->file('image')->store('services', 'public');
        }

        $service->update($payload);

        return redirect()
            ->route('admin.services.index')
            ->with('success', 'Услуга обновлена.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $service = Service::query()->findOrFail($id);

        if ($service->image && ! str_starts_with((string) $service->image, 'http')) {
            Storage::disk('public')->delete($service->image);
        }

        $service->delete();

        return redirect()
            ->route('admin.services.index')
            ->with('success', 'Услуга удалена.');
    }

    public function toggleVisible(int $id): RedirectResponse
    {
        $service = Service::query()->findOrFail($id);
        $service->update(['is_visible' => ! $service->is_visible]);

        return redirect()
            ->route('admin.services.index')
            ->with('success', 'Видимость услуги изменена.');
    }

    private function uniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $base = Str::slug($title);
        if ($base === '') {
            $base = 'service';
        }

        $slug = $base;
        $counter = 1;

        while (Service::query()
            ->when($ignoreId !== null, fn ($q) => $q->where('id', '!=', $ignoreId))
            ->where('slug', $slug)
            ->exists()) {
            $slug = $base.'-'.$counter;
            $counter++;
        }

        return $slug;
    }
}
