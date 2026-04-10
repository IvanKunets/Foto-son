@extends('layouts.app')

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
                        <article class="card service-card">
                            <h3>{{ $service->title }}</h3>
                            <p class="muted">{{ $service->description ?: 'Описание услуги скоро появится.' }}</p>
                            <p class="price">от {{ $service->price !== null ? number_format((float) $service->price, 2, '.', ' ') : '0.00' }} ₽</p>
                            <a class="btn btn-primary btn-block" href="{{ route('contacts.index') }}">Записаться</a>
                    </article>
                @endforeach
            </div>
        @else
                <p class="empty">Список услуг пуст.</p>
        @endif
        </div>
    </section>

    <section class="section cta-banner">
        <div class="container two-col">
            <div>
                <h2>Не нашли нужную услугу?</h2>
                <p>Оставьте заявку, и администратор «Фото-сон» подберет формат съемки под вашу задачу, стиль и бюджет.</p>
            </div>
            <div class="card">
                <form action="{{ route('order.store') }}" method="post" class="order-form">
                    @csrf
                    @if(session('success'))
                        <p class="success-message">{{ session('success') }}</p>
                    @endif

                    @if($errors->any())
                        <div class="error-message">
                            <p>Пожалуйста, проверьте корректность заполнения формы:</p>
                            <ul>
                                @foreach($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <label for="service_page_name">Ваше имя</label>
                    <input class="input" id="service_page_name" name="client_name" type="text" value="{{ old('client_name') }}" required maxlength="150">

                    <label for="service_page_phone">Телефон</label>
                    <input class="input" id="service_page_phone" name="client_phone" type="tel" value="{{ old('client_phone') }}" required maxlength="30">

                    <label for="service_page_service">Интересующая услуга</label>
                    <select class="input" id="service_page_service" name="service_id">
                        <option value="">Выберите услугу</option>
                        @foreach($services as $service)
                            <option value="{{ $service->id }}" @selected((string) old('service_id') === (string) $service->id)>{{ $service->title }}</option>
                        @endforeach
                    </select>

                    <button class="btn btn-dark btn-block" type="submit">Получить консультацию</button>
                </form>
            </div>
        </div>
    </section>
@endsection
