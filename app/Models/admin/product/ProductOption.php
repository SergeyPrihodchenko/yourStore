<?php

namespace App\Models\admin\product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOption extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'product_id',
        'option_id'
    ];

    static function forOptions(string $options, int $product_id): void
    {
        $options = explode(',', $options);
        foreach ($options as $key => $value) {
            self::create([
                'option_id' => $value,
                'product_id' => $product_id
            ]);
        }
    }
}
