<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Вход — Админ-панель Фото-сон</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>
<body class="admin-body">
<div class="admin-login-page">
    <div class="admin-login-card">
        <h1>Вход в админ-панель</h1>
        <p>Фото-сон — управление сайтом</p>
        @if ($errors->any())
            <div class="admin-alert admin-alert--error" role="alert">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <form method="post" action="{{ route('admin.login') }}" class="admin-form">
            @csrf
            <div>
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" value="{{ old('email') }}" required autocomplete="username">
            </div>
            <div>
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" required autocomplete="current-password">
            </div>
            <div class="checkbox-field">
                <input type="checkbox" id="remember" name="remember" value="1">
                <label for="remember" style="margin:0">Запомнить меня</label>
            </div>
            <button type="submit" class="btn btn-block">Войти</button>
        </form>
        <p style="margin-top:1.25rem"><a href="{{ url('/') }}">На главную сайта</a></p>
    </div>
</div>
</body>
</html>
