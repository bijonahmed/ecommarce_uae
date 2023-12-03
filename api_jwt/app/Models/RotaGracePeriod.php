<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class RotaGracePeriod extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "grace_period";
    protected $fillable = [
        'department_id',
        'designation_id',
        'shift_id',
        'work_in_time',
        'grace_period',
        'entry_by',
        'status',
    ];
}
