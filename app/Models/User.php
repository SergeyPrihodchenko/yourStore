<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Http\Requests\admin\UserRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'value'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function toggleAdmin($id): void
    {
        $check = \auth()->user()->is_super_admin;

        $user = User::find($id);

        if($check) {
            $user->update(['is_admin' => !$user->is_admin]);
        }
    }

    public function updateName($id, UserRequest $request): void
    {
        $check = \auth()->user()->is_super_admin;

        $user = User::find($id);

        $validated = $request->validated();

        if ($check) {
            $user->update(['name' => $validated['value']]);
        }
    }

    public function deleteUser($id)
    {
        $check = \auth()->user()->is_super_admin;

        $user = User::find($id);

        if ($check) {
            $user->delete();
        }
    }
}
