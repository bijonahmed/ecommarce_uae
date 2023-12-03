<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Customer extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "customer";
  protected $fillable = [
    'name',
    'addres',
    'phone',
    'status',
  ];
  public static function filterCustomerList($data = array())
  {
    //dd($data);
    $cond = '';
    if (!empty($data['name'])) {
      $cond .= " AND customer.name LIKE '%" . $data['name'] . "%'";
    }
    
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND customer.status IN({$st})";
    $cond .= " ORDER BY customer.id DESC";
   
    $sqld = "SELECT * FROM `customer` WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;

    //return DB::table('customer')->orderBy('id', 'DESC')->get();
  }
  public static function checkCustomerRow($id)
  {
    return DB::table('customer')->where('id', $id)->first();
  }


 public static function filterLeadList($data = array())
  {
    //dd($data);
    $cond = '';
    $tbl='lead';
    if (!empty($data['name'])) {
      $cond .= " AND $tbl.name LIKE '%" . $data['name'] . "%'";
    }
    
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND $tbl.status IN({$st})";
    $cond .= " ORDER BY $tbl.id DESC";
   
    $sqld = "SELECT * FROM `$tbl` WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;

    //return DB::table('customer')->orderBy('id', 'DESC')->get();
  }
  public static function checkLeadRow($id)
  {
    return DB::table('lead')->where('id', $id)->first();
  }

  
}