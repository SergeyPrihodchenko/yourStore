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
        foreach ($request['images'] as $image) {

            $imageData = [];

            $path = $image->store('public/products');

            $imageData['img_path'] = $path;

            $imageData['product_id'] = $request['product_id'];

            $this::create($imageData);

        }
    }

    static function deleteImage(array $path_imgs): void
    {
        $deleteJob = new ImagesDelete($path_imgs);

        $deleteJob->dispatch($path_imgs);
    }
}
