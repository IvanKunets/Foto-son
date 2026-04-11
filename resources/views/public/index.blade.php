@extends('layouts.app')
@use('Illuminate\Support\Facades\Storage')

@section('title', 'Фото-сон — студия фотографий')

@section('content')
    <section class="hero hero--home" aria-labelledby="hero-heading">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
            <h1 id="hero-heading">Ваши моменты — наше искусство</h1>
            <p>Профессиональная фотостудия в Ростове-на-Дону. Создаём уникальные образы и сохраняем важные моменты вашей жизни.</p>
            <div class="hero-actions">
                <a href="{{ route('contacts.index') }}" class="btn btn-primary">Оставить заявку</a>
                <a href="{{ route('services.index') }}" class="btn btn-outline-light">Наши услуги</a>
            </div>
        </div>
    </section>

    <section class="section section-alt home-about" aria-labelledby="about-heading">
        <div class="container home-about__grid">
            <div class="home-about__text">
                <h2 id="about-heading">О нас</h2>
                <p>Фото-сон — это команда профессиональных фотографов с более чем 10-летним опытом работы. Мы специализируемся на создании высококачественных фотографий, которые передают эмоции и рассказывают истории.</p>
                <p>Наша студия оснащена современным оборудованием, а индивидуальный подход к каждому клиенту гарантирует уникальный результат, который превосходит ожидания.</p>
                <p>Мы создаём не просто фотографии — мы создаём воспоминания, которые останутся с вами навсегда.</p>
                <ul class="home-about__features" role="list">
                    <li class="home-about__feature-label">10+ лет опыта</li>
                    <li class="home-about__feature-label">Высокое качество</li>
                    <li class="home-about__feature-label">Индивидуальный подход</li>
                </ul>
            </div>
            <figure class="home-about__figure">
                <img
                    src="{{ asset('images/gallery/О нас.jpg') }}"
                    alt="Фотостудия «Фото-сон»"
                    width="600"
                    height="720"
                    loading="lazy"
                    class="home-about__img"
                >
            </figure>
        </div>
    </section>

    <section class="section section-white home-services" aria-labelledby="services-heading">
        <div class="container">
            <h2 id="services-heading" class="section-title">Наши услуги</h2>
            @if ($services->isNotEmpty())
                <div class="home-services__grid">
                    @foreach ($services as $service)
                        <article class="card service-card service-card--home">
                            @if ($service->image)
                                <img src="{{ Storage::url($service->image) }}" alt="{{ $service->title }}" loading="lazy" class="service-card__thumb">
                            @else
                                <div class="service-card__no-image">Фото не добавлено</div>
                            @endif
                            <h3>{{ $service->title }}</h3>
                            <p class="muted">{{ \Illuminate\Support\Str::limit($service->description ?: 'Профессиональная фотосессия с индивидуальным подходом.', 120) }}</p>
                            <p class="price">от {{ $service->price !== null ? number_format((int) $service->price, 0, '', ' ') : '0' }} ₽</p>
                            <a href="{{ route('services.index') }}" class="service-card__more">Подробнее →</a>
                        </article>
                    @endforeach
                </div>
                <p class="home-services__footer">
                    <a href="{{ route('services.index') }}" class="btn btn-primary">Все услуги</a>
                </p>
            @else
                <p class="empty">Услуги пока не добавлены.</p>
            @endif
        </div>
    </section>

    <section class="section section-alt home-showcase" aria-labelledby="showcase-heading">
        <div class="container">
            <h2 id="showcase-heading" class="section-title">Примеры работ</h2>
            @if ($photos->isNotEmpty())
                <div class="home-showcase__grid">
                    @foreach ($photos as $photo)
                        <figure class="home-showcase__item home-showcase__tile gallery-item">
                            @if ($photo->image)
                                <img
                                    src="{{ Storage::url($photo->image) }}"
                                    alt="{{ $photo->alt ?: 'Работа фотосалона Фото-сон' }}"
                                    loading="lazy"
                                >
                            @else
                                <div class="gallery-item__placeholder">Фото не загружено</div>
                            @endif
                        </figure>
                    @endforeach
                </div>
                <p class="home-showcase__footer">
                    <a href="{{ route('gallery.index') }}" class="btn btn-outline-dark">Смотреть все работы</a>
                </p>
            @else
                <p class="empty">Фотографии пока не добавлены.</p>
            @endif
        </div>
    </section>

    <section class="section section-white home-reviews" aria-labelledby="reviews-heading">
        <div class="container">
            <h2 id="reviews-heading" class="section-title">Отзывы клиентов</h2>
            @if ($reviews->isNotEmpty())
                <div class="home-reviews__strip">
                    @foreach ($reviews as $review)
                        <article class="card review-card review-card--home">
                            <div class="review-card__head">
                                <span class="review-card__avatar" aria-hidden="true">{{ mb_substr((string) $review->author_name, 0, 1) ?: '?' }}</span>
                                <div>
                                    <p class="review-card__name">{{ $review->author_name }}</p>
                                    <p class="rating" aria-label="Оценка {{ $review->rating }} из 5">{{ str_repeat('★', (int) $review->rating) }}{{ str_repeat('☆', max(0, 5 - (int) $review->rating)) }}</p>
                                </div>
                            </div>
                            <p class="muted review-card__text">{{ \Illuminate\Support\Str::limit($review->content, 220) }}</p>
                        </article>
                    @endforeach
                </div>
                <p class="home-reviews__footer">
                    <a href="{{ route('reviews.index') }}" class="home-reviews__all">Все отзывы</a>
                </p>
            @else
                <p class="empty">Пока нет опубликованных отзывов.</p>
            @endif
        </div>
    </section>

    <section class="section cta-banner cta-banner--bottom" aria-labelledby="cta-bottom-heading">
        <div class="container text-center">
            <h2 id="cta-bottom-heading">Запишитесь прямо сейчас</h2>
            <p>Оставьте заявку — согласуем дату, формат и детали съёмки.</p>
            <a href="{{ route('contacts.index') }}" class="btn btn-light">Оставить заявку</a>
        </div>
    </section>
@endsection
