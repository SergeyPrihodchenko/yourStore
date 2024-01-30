<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\OptionRequest;
use App\Models\admin\product\Option;
use Inertia\Inertia;

class OptionController extends Controller
{
    public function index()
    {
        $options = Option::all();

        return Inertia::render('Admin/Option/index', ['options' => $options]);
    }

    public function setOption(OptionRequest $request): void
    {
        $request = $request->validated();

        Option::create($request);

    }

    public function updateOption(OptionRequest $request): void
    {
        $request = $request->validated();

        $option = Option::find($request['id']);

        $option->update($request);
    }

    public function deleteOption(OptionRequest $request): void
    {
        $request = $request->validated();

        $option = Option::find($request['id']);

        $option->delete();
    }
}
