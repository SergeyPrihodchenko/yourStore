<?php

namespace App\Console\Commands;

use App\Models\admin\category\Catalog;
use App\Models\admin\category\Category;
use App\Models\admin\product\Option;
use App\Models\admin\product\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class Dev extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dev';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $products = Product::where('catalog_id', 1)->get();
        $catalog = Catalog::find(1);

        dd($catalog->products->toArray());
    }
}
