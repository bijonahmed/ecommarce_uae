<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Category extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "category";
  protected $fillable = [
    'category_name',
    'status',
    'created_at',
    'updated_at',
  ];

  public static function filterSubCategoryList($data = array())
  {
    //dd($data);
    $cond = '';
    if (!empty($data['category'])) {
      $cond .= " AND sub_category.sub_category_name LIKE '%" . $data['category'] . "%'";
    }
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND sub_category.status IN({$st})";
    $cond .= " ORDER BY sub_category.sub_cate_id DESC";
    $limit = $data['length']; //10
    if (!empty($data['page'])) {
      $start = $limit * ($data['page'] - 1);
    }
    $sqld = "SELECT sub_category.*,category.category_name 
              FROM `sub_category` 
              LEFT JOIN category ON (category.category_id=sub_category.category_id) WHERE 1 " . $cond;
    $sqld .= " LIMIT $start,$limit";
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    $sqlt = "SELECT count(*)total FROM `sub_category` WHERE 1 {$cond}";
    $total = DB::select($sqlt)[0]->total;
    $res = [
      "draw" => $data['draw'],
      "recordsTotal" => $total,
      "recordsFiltered" => $total,
      "data" => $results,
      'get' => $data
    ];
    return $res;
  }
  public static function filterCategoryList($data = array())
  {
    //dd($data);
    $cond = '';
    if (!empty($data['category'])) {
      $cond .= " AND category.category_name LIKE '%" . $data['category'] . "%'";
    }
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND category.status IN({$st})";
    $cond .= " ORDER BY category.category_id DESC";
    $limit = $data['length']; //10
    if (!empty($data['page'])) {
      $start = $limit * ($data['page'] - 1);
    }
    $sqld = "SELECT * FROM `category` WHERE 1 " . $cond;
    $sqld .= " LIMIT $start,$limit";
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    $sqlt = "SELECT count(*)total FROM category WHERE 1 {$cond}";
    $total = DB::select($sqlt)[0]->total;
    $res = [
      "draw" => $data['draw'],
      "recordsTotal" => $total,
      "recordsFiltered" => $total,
      "data" => $results,
      'get' => $data
    ];
    return $res;
  }
  public static function addEditCategory($request)
  {
      $data['category_name']  = !empty($request['category_name']) ? $request['category_name'] : "";
      $data['status']         = !empty($request['status']) ? (int)$request['status'] : 0;
      $data['slug']           = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request['category_name'])));
      if (!empty($request['category_id'])) {
        DB::table('category')->where('category_id', $request['category_id'])->update($data);
      } else {
        DB::table('category')->insert($data);
      }
      return $data;
  }


    public static function addEditSubCategory($request)
  {
      $data['category_id']        = !empty($request['category_id']) ? $request['category_id'] : "";
      $data['sub_category_name']  = !empty($request['sub_category_name']) ? $request['sub_category_name'] : "";
      $data['status']             = !empty($request['status']) ? (int)$request['status'] : 0;
      $data['slug']               = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request['sub_category_name'])));
      if (!empty($request['sub_cate_id'])) {
        DB::table('sub_category')->where('sub_cate_id', $request['sub_cate_id'])->update($data);
      } else {
        DB::table('sub_category')->insert($data);
      }
      return $data;
  }

  public static function checkCategoryRow($id)
  {
    return DB::table('category')->where('category_id', $id)->first();
  }

    public static function allCategory()
  {
    return DB::table('category')->where('status', 1)->orderBy('category_name', 'asc')->get();
  }

    public static function checkSubCategoryRow($id)
  {
    return  DB::table('sub_category')->where('sub_cate_id', $id)->first();
   
  }
  
}
