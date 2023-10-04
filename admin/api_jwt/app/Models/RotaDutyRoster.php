<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class RotaDutyRoster extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "duty_roster";
    protected $fillable = [
        'department_id',
        'designation_id',
        'shift_id',
        'from_date',
        'to_date',
        'entry_by',
        'status',
    ];
}
