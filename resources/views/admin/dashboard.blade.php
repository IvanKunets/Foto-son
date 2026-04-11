@extends('layouts.admin')

@section('title', 'Дашборд — Фото-сон')
@section('page_title', 'Дашборд')

@section('content')
    @php
        $statusLabels = [
            'new' => 'Новая',
            'in_progress' => 'В работе',
            'done' => 'Выполнена',
            'cancelled' => 'Отменена',
        ];
    @endphp

    <div class="admin-card-grid">
        <article class="admin-metric">
            <p class="admin-metric__value">{{ $ordersCount }}</p>
            <p class="admin-metric__label">Новых заявок</p>
        </article>
        <article class="admin-metric">
            <p class="admin-metric__value">{{ $servicesCount }}</p>
            <p class="admin-metric__label">Услуг в базе</p>
        </article>
        <article class="admin-metric">
            <p class="admin-metric__value">{{ $photosCount }}</p>
            <p class="admin-metric__label">Фотографий в галерее</p>
        </article>
        <article class="admin-metric">
            <p class="admin-metric__value">{{ $reviewsCount }}</p>
            <p class="admin-metric__label">Опубликованных отзывов</p>
        </article>
    </div>

    <section class="admin-panel">
        <h2>Последние 5 заявок</h2>
        <div class="admin-table-wrap">
            <table class="admin-table">
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Телефон</th>
                    <th>Статус</th>
                    <th>Дата</th>
                </tr>
                </thead>
                <tbody>
                @forelse ($recentOrders as $order)
                    <tr>
                        <td>{{ $order->client_name }}</td>
                        <td>{{ $order->client_phone }}</td>
                        <td>
                            <span class="admin-badge admin-badge--{{ $order->status }}">{{ $statusLabels[$order->status] ?? $order->status }}</span>
                        </td>
                        <td>{{ $order->created_at->format('d.m.Y H:i') }}</td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="4">Заявок пока нет.</td>
                    </tr>
                @endforelse
                </tbody>
            </table>
        </div>
        <p style="margin-top:1rem"><a href="{{ route('admin.orders.index') }}" class="btn btn-secondary btn-sm">Все заявки</a></p>
    </section>
@endsection
