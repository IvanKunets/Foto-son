@extends('layouts.app')

@section('title', 'Контакты — Фото-сон')

@section('content')
    <section class="page-hero">
        <div class="hero-overlay"></div>
        <div class="container page-hero-content">
            <h1>Контакты</h1>
            <p><a href="{{ route('home') }}">Главная</a> / Контакты</p>
        </div>
    </section>

    <section class="section section-white">
        <div class="container contact-grid">
            <aside>
                <h2>Как с нами связаться</h2>
                <p><strong>Телефон студии:</strong> <a href="tel:+78631234567">+7 (863) 123-45-67</a></p>
                <p><strong>Email:</strong> <a href="mailto:hello@foto-son.ru">hello@foto-son.ru</a></p>
                <p><strong>Адрес:</strong> г. Ростов-на-Дону, ул. Большая Садовая, д. 50</p>
                <p><strong>Режим работы:</strong> Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-18:00</p>
            </aside>

            <div class="card">
                <h2>Заявка на съемку</h2>

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

                <form action="{{ route('order.store') }}" method="post" class="order-form">
                    @csrf

                    <label for="client_name">Ваше имя</label>
                    <input class="input" id="client_name" name="client_name" type="text" value="{{ old('client_name') }}" required maxlength="150">

                    <label for="client_phone">Телефон</label>
                    <input class="input" id="client_phone" name="client_phone" type="tel" value="{{ old('client_phone') }}" required maxlength="30" placeholder="+7 (XXX) XXX-XX-XX">

                    <label for="service_id">Услуга</label>
                    <select class="input select2-order-service" id="service_id" name="service_id" required>
                        <option value="">— Выберите услугу —</option>
                        @foreach ($services as $service)
                            <option value="{{ $service->id }}" @selected((string) old('service_id') === (string) $service->id)>
                                {{ $service->title }} ({{ (int) $service->price }} руб.)
                            </option>
                        @endforeach
                    </select>

                    <label for="preferred_date">Желаемая дата съемки (необязательно)</label>
                    <input class="input" id="preferred_date" name="preferred_date" type="date" value="{{ old('preferred_date') }}">

                    <label for="comment">Комментарий к заявке</label>
                    <textarea class="input" id="comment" name="comment" rows="5" placeholder="Опишите формат съемки, количество участников и пожелания">{{ old('comment') }}</textarea>

                    <p class="order-form__consent">
                        <label class="order-form__consent-label">
                            <input type="checkbox" name="agree" value="1" @checked(old('agree')) required>
                            Я согласен(а) на обработку персональных данных
                        </label>
                    </p>

                    <button class="btn btn-primary btn-block" type="submit">Отправить заявку</button>
                </form>
            </div>
        </div>
    </section>

    <section class="section section-alt">
        <div class="container">
            <div class="map-placeholder">
                Карта и схема проезда до фотосалона «Фото-сон»
            </div>
        </div>
    </section>
@endsection
