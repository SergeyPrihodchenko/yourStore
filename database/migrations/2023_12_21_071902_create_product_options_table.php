<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_options', function (Blueprint $table) {
            $table->foreignId('product_id')->index()->constrained('products')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('option_id')->index()->constrained('options')->onDelete('cascade')->onUpdate('cascade');
            $table->unique(['product_id', 'option_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_options');
    }
};
