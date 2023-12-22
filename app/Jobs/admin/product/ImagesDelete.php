<?php

namespace App\Jobs\admin\product;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class ImagesDelete implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    private array $path_imgs;

    public function __construct(array $path_imgs)
    {
        $this->path_imgs = $path_imgs;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Storage::delete($this->path_imgs);
    }
}
