<?php

namespace App\Models\admin\product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class OptionValues extends Model
{
    use HasFactory;

    protected $fillable = [
        'option_id',
        'title'
    ];

    public $timestamps = false;

    public function option(): BelongsTo
    {
        return $this->belongsTo(Option::class);
    }

    public function quantityForValue(): HasMany
    {
        return $this->hasMany(ProductValue::class);
    }
}
