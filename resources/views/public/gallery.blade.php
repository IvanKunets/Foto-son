@extends('layouts.app')

@section('title', 'Галерея — Фото-сон')

@section('content')
    <section class="page-hero">
        <div class="hero-overlay"></div>
        <div class="container page-hero-content">
            <h1>Галерея работ</h1>
            <p><a href="{{ route('home') }}">Главная</a> / Портфолио</p>
        </div>
    </section>

    <section class="section section-alt">
        <div class="container">
            @if($categories->isNotEmpty())
                <div class="filters" data-gallery-filters>
                    <button class="filter-btn active" type="button" data-filter="all">Все категории</button>
                    @foreach($categories as $category)
                        <button class="filter-btn" type="button" data-filter="{{ $category->slug }}">{{ $category->name }}</button>
                    @endforeach
                </div>

                <div class="gallery-all">
                    @foreach($categories as $category)
                        @if($category->photos->isNotEmpty())
                            @foreach($category->photos as $photo)
                                <figure class="gallery-item" data-category="{{ $category->slug }}">
                                    <img src="{{ asset($photo->image) }}" alt="{{ $photo->alt ?: 'Фото категории ' . $category->name }}" onerror="this.onerror=null;this.src='{{ asset('images/placeholders/gallery-photo.svg') }}';">
                                    <figcaption>{{ $category->name }}</figcaption>
                                </figure>
                            @endforeach
                        @endif
                    @endforeach
                </div>
            @else
                <p class="empty">Категории галереи пока не добавлены.</p>
            @endif
        </div>
    </section>
@endsection
