<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Catalog extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('catalogs')->insert($this::getDate());
    }

    static function getDate(): array
    {
        $data = [];
        $j = 1;
        for ($i=0; $i < 5; $i++) { 
            for ($k=0; $k < 3; $k++) { 
                $data[] = ['category_id' => $j, 'title' => fake()->name()];
                if($j >= 5) {
                    $j = 1;
                } else {
                    $j++;
                }
            }
        }

        return $data;
    }
}
