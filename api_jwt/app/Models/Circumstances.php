<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Circumstances extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "circumstancesList";
  protected $fillable = [
    'name',
    'addres',
    'phone',
    'status',
  ];



public static function contractAggrementFilter($data = array())
  {

    // echo '<pre>';
    // print_r($data);

    $cond = '';
    $tbl = "circumstances";
    if (!empty($data['employee_type'])) {
      $cond .= " AND $tbl.employee_type LIKE '%" . $data['employee_type'] . "%'";
    }
    if (!empty($data['employe_id'])) {
      $cond .= " AND $tbl.employe_id='" . $data['employe_id'] . "'";
    }
    $cond .= " ORDER BY id DESC ";
    $sqld = "SELECT $tbl.id,$tbl.name,$tbl.phone,$tbl.email,department.name as dpt_name,designation.name as des_name FROM `$tbl` 
             LEFT JOIN department ON department.id=$tbl.department_id
             LEFT JOIN designation ON designation.id=$tbl.designation_id
             WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;

  }

  
  public static function filterEmployeeList($data = array(),$role_id,$user_id)
  {
    //dd($role_id);
    $cond = '';
    $tbl = "circumstances";
    if (!empty($data['name'])) {
      $cond .= " AND $tbl.name LIKE '%" . $data['name'] . "%'";
    }
    if (!empty($data['email'])) {
      $cond .= " AND $tbl.email LIKE '%" . $data['email'] . "%'";
    }
    if (!empty($data['phone'])) {
      $cond .= " AND $tbl.phone LIKE '%" . $data['phone'] . "%'";
    }
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND $tbl.status IN({$st})";
    if($role_id!==1){
      $cond .= " AND $tbl.employe_id='" . $user_id . "'";
    }

    $cond .= " ORDER BY id DESC ";
    $sqld = "SELECT $tbl.*,department.name as dpt_name,designation.name as des_name FROM `$tbl` 
             LEFT JOIN department ON department.id=$tbl.department_id
             LEFT JOIN designation ON designation.id=$tbl.designation_id
             WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;
  }

  public static function checkEmployeRow($id)
  {
    $row = DB::table('circumstances')->where('id', $id)->first();
    return $row;
  }

public static function filterEmployees($employee_type)
  {
   
    $rows = DB::table('circumstances')
           ->select('employe_id','name','employee_code')
           ->where('employee_type', 'like', '%'.$employee_type.'%')
           ->get();
    return $rows;
  }
  
}
