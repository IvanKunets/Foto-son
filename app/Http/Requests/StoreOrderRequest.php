<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOrderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'client_name' => ['required', 'string', 'max:150'],
            'client_phone' => ['required', 'regex:/^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/'],
            'service_id' => [
                'required',
                Rule::exists('services', 'id')->where(fn ($q) => $q->where('is_visible', true)),
            ],
            'preferred_date' => ['nullable', 'date', 'after:today'],
            'comment' => ['nullable', 'string'],
            'agree' => ['accepted'],
        ];
    }

    protected function prepareForValidation(): void
    {
        $preferred = $this->input('preferred_date');
        if ($preferred === '' || $preferred === null) {
            $this->merge(['preferred_date' => null]);
        }
    }

    public function messages(): array
    {
        return [
            'client_phone.regex' => 'Введите телефон в формате +7 (XXX) XXX-XX-XX',
        ];
    }
}
