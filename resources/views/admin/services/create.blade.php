@extends('layouts.admin')

@section('title', 'Новая услуга — Фото-сон')
@section('page_title', 'Новая услуга')

@section('content')
    <form method="post" action="{{ route('admin.services.store') }}" enctype="multipart/form-data" class="admin-form admin-panel">
        @csrf
        <div>
            <label for="title">Название</label>
            <input type="text" id="title" name="title" value="{{ old('title') }}" required>
            @error('title')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="description">Описание</label>
            <textarea id="description" name="description">{{ old('description') }}</textarea>
            @error('description')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="price">Цена (₽)</label>
            <input type="number" id="price" name="price" value="{{ old('price') }}" step="0.01" min="0">
            @error('price')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="image">Изображение</label>
            <input type="file" id="image" name="image" accept="image/*" required>
            @error('image')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="sort_order">Порядок сортировки</label>
            <input type="number" id="sort_order" name="sort_order" value="{{ old('sort_order', 0) }}" min="0" required>
            @error('sort_order')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div class="checkbox-field">
            <input type="checkbox" id="is_visible" name="is_visible" value="1" @checked(old('is_visible', true))>
            <label for="is_visible">Показывать на сайте</label>
        </div>
        <div class="admin-toolbar">
            <button type="submit" class="btn">Сохранить</button>
            <a href="{{ route('admin.services.index') }}" class="btn btn-secondary">Отмена</a>
        </div>
    </form>
@endsection
