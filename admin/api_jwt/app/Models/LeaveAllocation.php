<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class LeaveAllocation extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "leave_allocation";
    protected $fillable = [
        'employee_type',
        'employe_id',
        'year',
        'status',
        'leave_in_hand',
        'effective_year',
    ];
    public static function getLeaveReport($data = array())
    {
        $tbl = with(new static)->getTable();
        $cond = '';
        if (!empty($data['employee_type'])) {
            $cond .= " AND $tbl.employee_type LIKE '%" . $data['employee_type'] . "%'";
        }

        $fdate = date("Y-m-d", strtotime($data['frm_date']));
        $tdate = date("Y-m-d", strtotime($data['to_date']));

        if (!empty($fdate) && !empty($tdate)) {
            $cond .= " AND DATE($tbl.created_at) BETWEEN '$fdate' AND '$tdate' ";
        }
        if (!empty($data['employe_id'])) {
            $cond .= " AND $tbl.employe_id='" . $data['employe_id'] . "'";
        }
        $cond .= " ORDER BY $tbl.id DESC";
        $sqld  = "SELECT  $tbl.*,circumstances.name as emp_name,employee.employee_code FROM $tbl 
                  LEFT JOIN circumstances ON (circumstances.employe_id=$tbl.employe_id)
                  LEFT JOIN employee ON (employee.id=circumstances.employe_id)
         WHERE 1 " . $cond;
        //echo $sqld;exit; 
        return $sqld = DB::select($sqld);
        //retrun $results;
    }
}
