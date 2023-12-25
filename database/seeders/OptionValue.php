<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OptionValue extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('option_values')->insert($this::getData());
    }

    static function getData(): array
    {
        $data = [];
        $j = 1;
        for ($i=0; $i < 5; $i++) { 
            for ($k=0; $k < 3; $k++) { 
                $data[] = ['option_id' => $j, 'value' => fake()->name()];
            }
            if($j >= 5) {
                $j = 1;
            } else {
                $j++;
            }
        }

        return $data;
    }
}
