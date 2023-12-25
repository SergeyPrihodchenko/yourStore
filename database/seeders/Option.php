<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Option extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('options')->insert($this::getData());
    }

    static function getData(): array
    {
        $data = [];

        for ($i=0; $i < 5; $i++) { 
            $data[] = ['title' => fake()->name()];
        }

        return $data;
    }
}
