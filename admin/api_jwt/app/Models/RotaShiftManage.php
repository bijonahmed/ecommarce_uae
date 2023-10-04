<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class RotaShiftManage extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "shift_manage";
  protected $fillable = [
    'department_id',
    'designation_id',
    'work_in_time',
    'work_out_time',
    'break_time_from',
    'break_time_to',
    'shift_description',
    'shift_code',
    'entry_by',
    'status',
  ];
   
}