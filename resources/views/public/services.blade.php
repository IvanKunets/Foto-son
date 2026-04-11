@extends('layouts.app')
@use('Illuminate\Support\Facades\Storage')

@section('title', 'Услуги — Фото-сон')

@section('content')
    <section class="page-hero">
        <div class="hero-overlay"></div>
        <div class="container page-hero-content">
            <h1>Услуги фотосалона</h1>
            <p><a href="{{ route('home') }}">Главная</a> / Услуги</p>
        </div>
    </section>

    <section class="section section-white">
        <div class="container">
            <h2 class="section-title">Услуги фотосалона</h2>
        @if($services->isNotEmpty())
                <div class="grid grid-3">
                @foreach($services as $service)
                        <article class="card service-card service-card--listing">
                            @if($service->image)
                                <img src="{{ Storage::url($service->image) }}" alt="{{ $service->title }}" loading="lazy">
                            @else
                                <div class="service-card__no-image">Фото не добавлено</div>
                            @endif
                            <h3>{{ $service->title }}</h3>
                            <p class="muted">{{ $service->description ?: 'Описание услуги скоро появится.' }}</p>
                            <p class="price">от {{ $service->price !== null ? number_format((int) $service->price, 0, '', ' ') : '0' }} ₽</p>
                            <a href="{{ route('contacts.index') }}" class="service-card__more">Подробнее</a>
                    </article>
                @endforeach
            </div>
        @else
                <p class="empty">Список услуг пуст.</p>
        @endif
        </div>
    </section>

    <section class="section cta-banner cta-banner--bottom" aria-labelledby="cta-services-heading">
        <div class="container text-center">
            <h2 id="cta-services-heading">Не нашли нужную услугу?</h2>
            <p>Оставьте заявку на странице контактов — администратор «Фото-сон» подберёт формат съемки под вашу задачу, стиль и бюджет.</p>
            <a href="{{ route('contacts.index') }}" class="btn btn-light">Получить консультацию</a>
        </div>
    </section>
@endsection
