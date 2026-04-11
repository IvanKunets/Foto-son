<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminOrderStatusRequest;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class AdminOrderController extends Controller
{
    public function index(): View
    {
        $orders = Order::query()
            ->with('service')
            ->orderByDesc('created_at')
            ->paginate(15);

        return view('admin.orders.index', compact('orders'));
    }

    public function updateStatus(AdminOrderStatusRequest $request, Order $order): RedirectResponse
    {
        $order->update([
            'status' => $request->validated('status'),
        ]);

        return redirect()
            ->route('admin.orders.index')
            ->with('success', 'Статус заявки обновлён.');
    }
}
