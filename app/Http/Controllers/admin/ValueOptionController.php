<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\OptionRequest;
use App\Models\admin\product\OptionValues;
use Illuminate\Support\Facades\Log;

class ValueOptionController extends Controller
{
    public function setValueOption(OptionRequest $request): void
    {
        try {

            $request = $request->validated();

            OptionValues::create($request);

        } catch (\Throwable $th) {
            Log::channel('daily')->error($th->getPrevious()->getMessage());
        }
    }

    public function updateValueOption($id, OptionRequest $request)
    {
        try {

            $request = $request->validated();

            $value_option = OptionValues::find($id);

            $value_option->update($request);

        } catch (\Throwable $th) {
            Log::channel('daily')->error($th->getPrevious()->getMessage());
        }
    }

    public function deleteValueOption($id)
    {
        try {

            $value_option = OptionValues::find($id);

            $value_option->delete();

        } catch (\Throwable $th) {
            Log::channel('daily')->error($th->getPrevious()->getMessage());
        }
    }
}
