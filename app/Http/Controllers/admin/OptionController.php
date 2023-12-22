<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\OptionRequest;
use App\Models\admin\product\Option;
use Illuminate\Support\Facades\Log;

class OptionController extends Controller
{
    public function setOption(OptionRequest $request): void
    {
        try {
            $request = $request->validated();

            Option::create($request);
        } catch (\Throwable $th) {
            Log::channel('maily')->error($th->getPrevious()->getMessage());
        }
    }

    public function updateOption(OptionRequest $request, $id): void
    {
        try {
            $request = $request->validated();

            $option = Option::find($id);

            $option->upgrade($request);
        } catch (\Throwable $th) {
            Log::channel('maily')->error($th->getPrevious()->getMessage());
        }
    }

    public function deleteOption($id): void
    {
        try {
            $option = Option::find($id);

            $option->delete();
        } catch (\Throwable $th) {
            Log::channel('maily')->error($th->getPrevious()->getMessage());
        }
    }
}
