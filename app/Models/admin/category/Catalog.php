<?php

namespace App\Models\admin\category;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Catalog extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
