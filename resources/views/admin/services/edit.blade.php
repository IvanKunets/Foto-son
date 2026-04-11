@extends('layouts.admin')

@section('title', 'Редактирование услуги — Фото-сон')
@section('page_title', 'Редактирование услуги')

@section('content')
    <form method="post" action="{{ route('admin.services.update', $service->id) }}" enctype="multipart/form-data" class="admin-form admin-panel">
        @csrf
        @method('PUT')
        <div>
            <label for="title">Название</label>
            <input type="text" id="title" name="title" value="{{ old('title', $service->title) }}" required>
            @error('title')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="description">Описание</label>
            <textarea id="description" name="description">{{ old('description', $service->description) }}</textarea>
            @error('description')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="price">Цена (₽)</label>
            <input type="number" id="price" name="price" value="{{ old('price', $service->price) }}" step="0.01" min="0">
            @error('price')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="image">Новое изображение (оставьте пустым, чтобы не менять)</label>
            @if ($service->image)
                <p><img class="admin-thumb" src="{{ asset(\Illuminate\Support\Facades\Storage::url($service->image)) }}" alt="Текущее изображение"></p>
            @endif
            <input type="file" id="image" name="image" accept="image/*">
            @error('image')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="sort_order">Порядок сортировки</label>
            <input type="number" id="sort_order" name="sort_order" value="{{ old('sort_order', $service->sort_order) }}" min="0" required>
            @error('sort_order')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div class="checkbox-field">
            <input type="checkbox" id="is_visible" name="is_visible" value="1" @checked(old('is_visible', $service->is_visible))>
            <label for="is_visible">Показывать на сайте</label>
        </div>
        <div class="admin-toolbar">
            <button type="submit" class="btn">Сохранить</button>
            <a href="{{ route('admin.services.index') }}" class="btn btn-secondary">Отмена</a>
        </div>
    </form>
@endsection
