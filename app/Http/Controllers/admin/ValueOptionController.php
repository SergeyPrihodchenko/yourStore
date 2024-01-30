<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\OptionRequest;
use App\Models\admin\product\OptionValues;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ValueOptionController extends Controller
{

    public function valuesForOption(OptionRequest $request)
    {
        $request = $request->validated();

        $values = OptionValues::where('option_id', $request['id'])->get();

        return $values;
    }

    public function setValueOption(OptionRequest $request): void
    {
        $request = $request->validated();

        OptionValues::create($request);
    }

    public function updateValueOption($id, OptionRequest $request)
    {

        $request = $request->validated();

        $value_option = OptionValues::find($id);

        $value_option->update($request);
    }

    public function deleteValueOption($id)
    {

        $value_option = OptionValues::find($id);

        $value_option->delete();
    }
}
