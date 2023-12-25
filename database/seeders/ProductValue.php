<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductValue extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product_values')->insert($this::getData());
    }

    static function getData(): array
    {
        $data = [];

        $k = 1;

        for ($i=0; $i < 5; $i++) { 

            $data[] = ['product_id' => $k, 'value_option_id' => $k, 'quantity' => '5']; 
            
            if ($k > 5) {
                $k = 1;
            } else {
                $k++;
            }
        }

        return $data;
    }
}
