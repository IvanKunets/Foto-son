<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class AdminReviewRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'author_name' => ['required', 'string', 'max:150'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'text' => ['required', 'string'],
            'is_visible' => ['sometimes', 'boolean'],
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'is_visible' => $this->boolean('is_visible'),
        ]);
    }
}
