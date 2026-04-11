@extends('layouts.admin')

@section('title', 'Редактирование отзыва — Фото-сон')
@section('page_title', 'Редактирование отзыва')

@section('content')
    <form method="post" action="{{ route('admin.reviews.update', $review->id) }}" class="admin-form admin-panel">
        @csrf
        @method('PUT')
        <div>
            <label for="author_name">Имя автора</label>
            <input type="text" id="author_name" name="author_name" value="{{ old('author_name', $review->author_name) }}" required maxlength="150">
            @error('author_name')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="rating">Оценка</label>
            <select id="rating" name="rating" required>
                @for ($i = 5; $i >= 1; $i--)
                    <option value="{{ $i }}" @selected((int) old('rating', $review->rating) === $i)>{{ $i }}</option>
                @endfor
            </select>
            @error('rating')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div>
            <label for="text">Текст отзыва</label>
            <textarea id="text" name="text" required>{{ old('text', $review->content) }}</textarea>
            @error('text')<p class="field-error">{{ $message }}</p>@enderror
        </div>
        <div class="checkbox-field">
            <input type="checkbox" id="is_visible" name="is_visible" value="1" @checked(old('is_visible', $review->is_visible))>
            <label for="is_visible">Публиковать на сайте</label>
        </div>
        <div class="admin-toolbar">
            <button type="submit" class="btn">Сохранить</button>
            <a href="{{ route('admin.reviews.index') }}" class="btn btn-secondary">Отмена</a>
        </div>
    </form>
@endsection
