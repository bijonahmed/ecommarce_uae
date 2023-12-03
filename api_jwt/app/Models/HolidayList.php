<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class HolidayList extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "leave_list";
    protected $fillable = [
        'day',
        'frm_date',
        'to_date',
        'no_of_days',
        'holiday_description',
        'holiday_type_id',
        'status',
        'created_at',
        'updated_at',
    ];
}
