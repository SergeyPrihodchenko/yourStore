<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductOption extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product_options')->insert($this::getData());
    }

    static function getData(): array
    {
        $data = [];

        $k = 1;

        for ($i=0; $i < 5; $i++) { 

            $data[] = ['product_id' => $k, 'option_id' => $k]; 
            
            if ($k > 5) {
                $k = 1;
            } else {
                $k++;
            }
        }

        return $data;
    }
}
