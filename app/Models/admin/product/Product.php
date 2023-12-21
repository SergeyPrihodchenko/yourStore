<?php

namespace App\Models\admin\product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Log;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'catalog_id',
        'description',
        'price',
        'quantity',
        'image'
    ];

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);

    }

    public function options()
    {
        return $this->belongsToMany(Option::class, 'product_options', 'product_id', 'option_id');
    }
}
