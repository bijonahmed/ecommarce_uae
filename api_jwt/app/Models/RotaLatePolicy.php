<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class RotaLatePolicy extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "late_policy";
  protected $fillable = [
    'department_id',
    'designation_id',
    'shift_id',
    'max_grade_period',
    'day_salary_deducted',
    'entry_by',
    'status',
  ];
   
}