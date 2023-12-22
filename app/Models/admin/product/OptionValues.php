<?php

namespace App\Models\admin\product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OptionValues extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'value'
    ];

    protected $titmestamps = false;

    public function option()
    {
        $this->belongsTo(Option::class);
    }
}
