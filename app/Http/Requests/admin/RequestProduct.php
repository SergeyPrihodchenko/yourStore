<?php

namespace App\Http\Requests\admin;

use Illuminate\Foundation\Http\FormRequest;

class RequestProduct extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'nullable|string|max:100',
            'catalog_id' => 'nullable|numeric',
            'description' => 'nullable|string|max:5000',
            'price' => 'nullable|numeric',
            'quantity' => 'nullable|numeric',
            'image' => 'nullable|image',
            'value' => 'nullable|string|max:100'
        ];
    }
}
