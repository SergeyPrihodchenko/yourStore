<?php

namespace App\Models\admin\product;

use App\Jobs\admin\product\ImagesDelete;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'img_path',
        'product_id'
    ];

    public $timestamps = false;

    public function setImage(array $request): void
    {
        $image = $request['image'];

        $path = $image->store('public/products');

        $request['img_path'] = $path;

        $this::create($request);
    }

    static function deleteImage(array $path_imgs): void
    {
        $deleteJob = new ImagesDelete($path_imgs);

        $deleteJob->dispatch($path_imgs);
    }
}
