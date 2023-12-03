<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class LeaveRequest extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "employee_leave_request";
    protected $fillable = [
        'id',
        'employe_id',
        'leave_type_id',
        'frm_date',
        'to_date',
        'date_of_application',
        'no_of_leave',
        'status',
        'remarks',
        'created_at',
        'update_at',
    ];
}
