<?php

namespace App\Models\admin\product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $timestamps = false;

    public function setImage($image): string
    {
        $path = $image->store('products');

        return $path;
    }
}
