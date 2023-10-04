<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Appointment extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "appointment";
  protected $fillable = [
    'name',
    'addres',
    'phone',
    'status',
  ];
  public static function filterAppointmentList($data = array())
  {
    //dd($data);
    $cond = '';
    if (!empty($data['name'])) {
      $cond .= " AND appointment.name LIKE '%" . $data['name'] . "%'";
    }
   
    $cond .= " ORDER BY appointment.id DESC";
   
    $sqld = "SELECT * FROM `appointment` WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;
 
  }
  public static function editAppointmentId($id)
  {
    return DB::table('appointment')->where('id', $id)->first();
  }
}