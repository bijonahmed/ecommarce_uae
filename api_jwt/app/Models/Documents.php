<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class Documents extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "employee_docs";
    protected $fillable = [
        'emp_id',
        'emp_id',
        'doc_name',
        'doc',
        'entry_by',
        'status',
    ];
   

     public static function filterList($data = array())
    {
        //dd($data);
        $cond = '';
        if (!empty($data['name'])) {
            $cond .= " AND employee_docs.name LIKE '%" . $data['name'] . "%'";
        }

        $cond .= " ORDER BY employee_docs.id DESC";
        $sqld  = "SELECT employee_docs.*,employee.name  as employeeName  FROM `employee_docs`
                 LEFT JOIN employee ON (employee.id=employee_docs.emp_id)
                 WHERE 1 " . $cond;
        //echo $sqld;exit; 
        $results = DB::select($sqld);
        return $results;
    }
    public static function editId($id)
    {
        return DB::table('employee_docs')->where('id', $id)->first();
    }
 
    
}
