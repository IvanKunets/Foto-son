<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Фото-сон')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @stack('head')
</head>
<body>
    <header class="site-header" data-site-header>
        <div class="container header-inner">
            <a href="{{ route('home') }}" class="logo" aria-label="Фото-сон">
                <img src="{{ asset('images/logo.png') }}" alt="Логотип фотосалона Фото-сон">
            </a>
            <button class="nav-toggle" type="button" data-nav-toggle aria-label="Открыть меню">Меню</button>
            <nav class="main-nav" data-main-nav>
                <a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}">Главная</a>
                <a href="{{ route('services.index') }}" class="nav-link {{ request()->routeIs('services.index') ? 'active' : '' }}">Услуги</a>
                <a href="{{ route('gallery.index') }}" class="nav-link {{ request()->routeIs('gallery.index') ? 'active' : '' }}">Галерея</a>
                <a href="{{ route('reviews.index') }}" class="nav-link {{ request()->routeIs('reviews.index') ? 'active' : '' }}">Отзывы</a>
                <a href="{{ route('contacts.index') }}" class="nav-link {{ request()->routeIs('contacts.index') ? 'active' : '' }}">Контакты</a>
            </nav>
            <a href="{{ route('contacts.index') }}" class="btn btn-primary header-cta">Оставить заявку</a>
        </div>
    </header>

    <main class="page-content">
        @yield('content')
    </main>

    <footer class="site-footer">
        <div class="container footer-grid">
            <section>
                <h3>Фото-сон</h3>
                <p>Фотосалон в Ростове-на-Дону: портреты, семейные истории и съемка важных событий.</p>
            </section>
            <section>
                <h4>Навигация</h4>
                <nav class="footer-nav">
                    <a href="{{ route('home') }}">Главная</a>
                    <a href="{{ route('services.index') }}">Услуги</a>
                    <a href="{{ route('gallery.index') }}">Галерея</a>
                    <a href="{{ route('reviews.index') }}">Отзывы</a>
                    <a href="{{ route('contacts.index') }}">Контакты</a>
                </nav>
            </section>
            <section>
                <h4>Контакты</h4>
                <p><a href="tel:+78631234567">+7 (863) 123-45-67</a></p>
                <p>г. Ростов-на-Дону, ул. Большая Садовая, д. 50, офис 204</p>
            </section>
        </div>
        <div class="container footer-bottom">
            <p>&copy; {{ now()->year }} Фото-сон. Все права защищены.</p>
        </div>
    </footer>
    <script src="{{ asset('js/app.js') }}" defer></script>
    @stack('scripts')
</body>
</html>
