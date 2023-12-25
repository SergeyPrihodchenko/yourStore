<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OptionValueQuatity extends Seeder
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

        for ($i=0; $i < 5; $i++) { 
            $data[] = ['product_id' => $i, 'value_id' => $i, '5'];
        }

        return $data;
    }
}
