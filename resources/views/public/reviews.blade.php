@extends('layouts.app')

@section('title', 'Отзывы — Фото-сон')

@section('content')
    <section class="page-hero">
        <div class="hero-overlay"></div>
        <div class="container page-hero-content">
            <h1>Отзывы клиентов</h1>
            <p><a href="{{ route('home') }}">Главная</a> / Отзывы</p>
        </div>
    </section>

    <section class="section section-white">
        <div class="container stats-grid">
            <div><p class="stat-num">{{ $reviews->count() }}+</p><p>Отзывов</p></div>
            <div><p class="stat-num">4.9</p><p>Средний рейтинг</p></div>
            <div><p class="stat-num">10+</p><p>Лет опыта</p></div>
            <div><p class="stat-num">100%</p><p>Довольных клиентов</p></div>
        </div>
    </section>

    <section class="section section-alt">
        <div class="container">
        @if($reviews->isNotEmpty())
                <div class="grid grid-2">
                    @foreach($reviews as $review)
                        <article class="card review-card">
                            <h3>{{ $review->author_name }}</h3>
                            <p class="rating">{{ str_repeat('★', (int) $review->rating) }}</p>
                            <p class="muted">{{ $review->content }}</p>
                        </article>
                    @endforeach
                </div>
        @else
                <p class="empty">Пока нет опубликованных отзывов.</p>
        @endif
        </div>
    </section>

    <section class="section cta-banner">
        <div class="container text-center">
            <h2>Станьте частью довольных клиентов</h2>
            <p>Запишитесь в «Фото-сон» и получите рекомендации по образу, локации и подготовке к съемке.</p>
            <a href="{{ route('contacts.index') }}" class="btn btn-light">Записаться на съемку</a>
        </div>
    </section>
@endsection
