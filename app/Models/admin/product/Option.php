<?php

namespace App\Models\admin\product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Option extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title'
    ];

    public function values(): HasMany
    {
        return $this->hasMany(OptionValues::class, 'option_id');
    }   

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_options', 'option_id', 'product_id');
    }
}
