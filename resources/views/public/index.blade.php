@extends('layouts.app')

@section('title', 'Фото-сон — студия фотографий')

@section('content')
    <section class="hero">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
            <h1>Ваши моменты — наше искусство</h1>
            <p>Фотосалон «Фото-сон» в Ростове-на-Дону. Создаем выразительные кадры для семьи, портфолио и самых важных событий.</p>
            <div class="hero-actions">
                <a href="{{ route('services.index') }}" class="btn btn-primary">Выбрать услугу</a>
                <a href="{{ route('gallery.index') }}" class="btn btn-outline-light">Посмотреть портфолио</a>
            </div>
        </div>
    </section>

    <section class="section section-white">
        <div class="container">
            <h2 class="section-title">Популярные услуги</h2>
        @if($services->isNotEmpty())
                <div class="grid grid-3">
                @foreach($services as $service)
                        <article class="card service-card">
                        <h3>{{ $service->title }}</h3>
                        <p class="muted">{{ $service->description ?: 'Профессиональная фотосессия с индивидуальным подходом.' }}</p>
                        <p class="price">от {{ $service->price !== null ? number_format((float) $service->price, 2, '.', ' ') : '0.00' }} ₽</p>
                    </article>
                @endforeach
            </div>
        @else
                <p class="empty">Услуги пока не добавлены.</p>
        @endif
        </div>
    </section>

    <section class="section section-alt">
        <div class="container">
            <h2 class="section-title">Последние работы</h2>
        @if($photos->isNotEmpty())
                <div class="grid grid-3 gallery-grid">
                @foreach($photos as $photo)
                        <figure class="gallery-item">
                            <img src="{{ asset($photo->image) }}" alt="{{ $photo->alt ?: 'Фото из галереи Фото-сон' }}" onerror="this.onerror=null;this.src='{{ asset('images/placeholders/gallery-photo.svg') }}';">
                            <figcaption>{{ basename($photo->image) }}</figcaption>
                    </figure>
                @endforeach
            </div>
        @else
                <p class="empty">Фотографии пока не добавлены.</p>
        @endif
        </div>
    </section>

    <section class="section section-white">
        <div class="container">
            <h2 class="section-title">Отзывы</h2>
        @if($reviews->isNotEmpty())
                <div class="grid grid-3">
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
            <h2>Запишитесь на съемку в удобное время</h2>
            <p>Оставьте заявку, и мы свяжемся с вами для согласования даты, формата и деталей съемки.</p>
            <a href="{{ route('contacts.index') }}" class="btn btn-light">Оставить заявку</a>
        </div>
    </section>
@endsection
