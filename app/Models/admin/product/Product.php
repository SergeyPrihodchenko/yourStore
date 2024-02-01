<?php

namespace App\Models\admin\product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'catalog_id',
        'description',
        'price',
        'quantity',
    ];

    protected $table = 'products';

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    public function options(): BelongsToMany
    {
        return $this->belongsToMany(Option::class, 'product_options', 'product_id', 'option_id');
    }

    public function quantityForValue(): HasMany
    {
        return $this->hasMany(ProductValue::class);
    }

}
