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
        Schema::create('product_values', function (Blueprint $table) {
            $table->foreignId('product_id')->index()->constrained('products')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('value_option_id')->index()->constrained('option_values')->onDelete('cascade')->onUpdate('cascade');
            $table->string('quantity')->nullable()->default('0');
            $table->unique(['product_id', 'value_option_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_values');
    }
};
