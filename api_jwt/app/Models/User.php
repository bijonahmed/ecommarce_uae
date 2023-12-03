<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use DB;
class User extends Authenticatable implements JWTSubject
{
  use HasApiTokens, HasFactory, Notifiable;
  protected $fillable = [
    'name',
    'email',
    'role_id',
    'show_password',
    'password',
  ];
  protected $hidden = [
    'password',
    'remember_token',
  ];
  protected $casts = [
    'email_verified_at' => 'datetime',
    'password' => 'hashed',
  ];
  public function getJWTIdentifier()
  {
    return $this->getKey();
  }
  public function getJWTCustomClaims()
  {
    return [];
  }
  // ******************************************************************** all methods ****************************************************************
  public static function addEditRole($request)
  {
    $data['name'] = !empty($request['name']) ? $request['name'] : "";
    $data['status'] = !empty($request['status']) ? (int) $request['status'] : 0;
    if (!empty($request['id'])) {
      DB::table('rule')->where('id', $request['id'])->update($data);
      $response = "Successfully update";
    } else {
      DB::table('rule')->insert($data);
      $response = "Successfully Insert";
    }
    return response()->json($response, 200);
  }
  public static function checkRoleRow($id)
  {
    $result = DB::table('rule')->where('id', $id)->first();
    return $result;
  }
  public static function countryList()
  {
    return DB::table('country')->get();
  }
  public static function getTimes()
  {
    return DB::table('time')->get();
  }
  public static function inactiveEmployees()
  {
        return DB::table('employee')
              ->select('employee.name as emp_name','employee.employee_type','department.name as dpart_name','designation.name as desi_name')
              ->leftJoin('department', 'department.id', '=', 'employee.department_id')
              ->leftJoin('designation', 'designation.id', '=', 'employee.designation_id')
              ->where('employee.status',0)->get();
}
  public static function alltypedocutms()
  {
    return DB::table('type_of_documents')->where('status', 1)->get();
  }
  public static function checkDepartmentRow($id)
  {
    $row = DB::table('department')->where('id', $id)->first();
    return $row;
  }
  public static function checkDesignationRow($id)
  {
    $row = DB::table('designation')->where('id', $id)->first();
    return $row;
  }
  public static function checkEmployeRow($id)
  {
    $row = DB::table('employee')->where('id', $id)->first();
    return $row;
  }

 public static function orgProfile()
  {
    $row = DB::table('orgainsation_profile_1')->where('id', 1)->first();
    return $row;
  }

   public static function allEmpType()
  {
    $row = DB::table('employee_type')->where('status', 1)->get();
    return $row;
  }


  public static function orgProfiletwo()
  {
    $row = DB::table('orgainsation_profile_2')->where('id', 1)->first();
    return $row;
  }
   public static function orgProfilethree()
  {
    $row = DB::table('orgainsation_profile_3')->where('id', 1)->first();
    return $row;
  }
  public static function checkUserRow($id)
  {
    $result = DB::table('users')->where('id', $id)->first();
    return $result;
  }
  public static function getRoleList($data = array())
  {
    $cond = '';
    if (!empty($data['name'])) {
      $cond .= " AND rule.name LIKE '%" . $data['name'] . "%'";
    }
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND rule.status IN({$st})";
    $cond .= " ORDER BY rule.id DESC ";
    $sqld = "SELECT * FROM `rule` WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;
  }
  public static function allEmployee($data = array())
  {
    $cond = '';
    $tbl = "employee";
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
    $cond .= " ORDER BY id DESC ";
    $sqld = "SELECT $tbl.*,department.name as dpt_name,designation.name as des_name FROM `$tbl` 
             LEFT JOIN department ON department.id=$tbl.department_id
             LEFT JOIN designation ON designation.id=$tbl.designation_id
             WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;
  }


  public static function allUseers($data = array())
  {
    $cond = '';
    $tbl = "users";
    if (!empty($data['name'])) {
      $cond .= " AND $tbl.name LIKE '%" . $data['name'] . "%'";
    }
    if (!empty($data['email'])) {
      $cond .= " AND $tbl.email LIKE '%" . $data['email'] . "%'";
    }
    if (!empty($data['phone_number'])) {
      $cond .= " AND $tbl.phone_number LIKE '%" . $data['phone_number'] . "%'";
    }
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND $tbl.status IN({$st})";
    $cond .= " ORDER BY id DESC ";
    $sqld = "SELECT $tbl.*,rule.name rulename FROM `$tbl` LEFT JOIN rule ON rule.id=$tbl.role_id WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;
  }
  public static function allDepartment($data = array())
  {
    $cond = '';
    $tbl = "department";
    if (!empty($data['name'])) {
      $cond .= " AND $tbl.name LIKE '%" . $data['name'] . "%'";
    }
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND $tbl.status IN({$st})";
    $cond .= " ORDER BY id DESC ";
    $sqld = "SELECT * FROM `$tbl` WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;
  }
  public static function allDesignation($data = array())
  {
    $cond = '';
    $tbl = "designation";
    if (!empty($data['name'])) {
      $cond .= " AND $tbl.name LIKE '%" . $data['name'] . "%'";
    }
    $st = '0,1';
    if (isset($data['status'])) {
      $st = $data['status'];
    }
    $cond .= " AND $tbl.status IN({$st})";
    $cond .= " ORDER BY id DESC ";
    $sqld = "SELECT * FROM `$tbl` WHERE 1 " . $cond;
    //echo $sqld;exit; 
    $results = DB::select($sqld);
    return $results;
  }
}
