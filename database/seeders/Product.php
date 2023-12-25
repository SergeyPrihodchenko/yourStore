<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Product extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert($this::getData());
    }

    static function getData(): array
    {
        $data = [];
        $k = 1;

        for ($i=0; $i < 10; $i++) { 
            $data[] = [
                'title' => fake()->name(),
                'catalog_id' => $k,
                'description' => fake()->text(10),
                'price' => '150',
                'quantity' => '10'
            ];

            if($k > 5) {
                $k = 1;
            } else {
                $k++;
            }
        }

        return $data;
    }
}
