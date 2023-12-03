<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class LeaveRule extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "leave_rule";
    protected $fillable = [
        'employee_type_id',
        'leave_type_id',
        'maximum_no_annual',
        'effective_from',
        'effective_to',
        'status',
        'created_at',
        'update_at',
    ];
}
