<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Project extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "projects";
    protected $fillable = [
        'name',
        'status',
    ];
    public static function filterList($data = array())
    {
        //dd($data);
        $cond = '';
        if (!empty($data['name'])) {
            $cond .= " AND projects.name LIKE '%" . $data['name'] . "%'";
        }
        $cond .= " ORDER BY projects.id DESC";
        $sqld = "SELECT * FROM `projects` WHERE 1 " . $cond;
        //echo $sqld;exit; 
        $results = DB::select($sqld);
        return $results;
    }
    public static function filterListTask($data = array())
    {
        //dd($data);
        $cond = '';
        if (!empty($data['name'])) {
            $cond .= " AND tasks.name LIKE '%" . $data['name'] . "%'";
        }
        $cond .= " ORDER BY tasks.id DESC";
        $sqld  = "SELECT tasks.*,projects.name  as projectName,employee.name as employeeName,users.name as createdBy   FROM `tasks`
                 LEFT JOIN projects ON (projects.id=tasks.project_id)
                 LEFT JOIN employee ON (employee.id=tasks.emp_id)
                 LEFT JOIN users ON (users.id=tasks.entry_by)
                 WHERE 1 " . $cond;
        //echo $sqld;exit; 
        $results = DB::select($sqld);
        return $results;
    }
    public static function editId($id)
    {
        return DB::table('projects')->where('id', $id)->first();
    }
    public static function editIdtask($id)
    {
        return DB::table('tasks')->where('id', $id)->first();
    }
}
