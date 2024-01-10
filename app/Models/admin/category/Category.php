<?php

namespace App\Models\admin\category;

use App\Models\admin\product\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    public $titmestamps = false;

    public function catalogs(): HasMany
    {
        return $this->hasMany(Catalog::class);
    }
}
