@extends('layouts.admin')

@section('title', 'Заявки — Фото-сон')
@section('page_title', 'Заявки')

@section('content')
    @php
        $statusLabels = [
            'new' => 'Новая',
            'in_progress' => 'В работе',
            'done' => 'Выполнена',
            'cancelled' => 'Отменена',
        ];
    @endphp

    <div class="admin-table-wrap admin-panel">
        <table class="admin-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Телефон</th>
                <th>Услуга</th>
                <th>Желаемая дата</th>
                <th>Статус</th>
                <th>Создана</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($orders as $order)
                <tr>
                    <td>{{ $order->id }}</td>
                    <td>{{ $order->client_name }}</td>
                    <td>{{ $order->client_phone }}</td>
                    <td>{{ $order->service?->title ?? '—' }}</td>
                    <td>{{ $order->preferred_date?->format('d.m.Y') ?? '—' }}</td>
                    <td>
                        <span class="admin-badge admin-badge--{{ $order->status }}">{{ $statusLabels[$order->status] ?? $order->status }}</span>
                    </td>
                    <td>{{ $order->created_at->format('d.m.Y H:i') }}</td>
                    <td>
                        <form method="post" action="{{ route('admin.orders.status', $order) }}" class="inline-form">
                            @csrf
                            <select name="status" aria-label="Статус заявки №{{ $order->id }}">
                                @foreach ($statusLabels as $value => $label)
                                    <option value="{{ $value }}" @selected($order->status === $value)>{{ $label }}</option>
                                @endforeach
                            </select>
                            <button type="submit" class="btn btn-sm">Сохранить</button>
                        </form>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
        <div class="pagination-wrap">
            {{ $orders->withQueryString()->links('pagination.admin') }}
        </div>
    </div>
@endsection
