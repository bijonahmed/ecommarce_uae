<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Recruitment extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "joblist";
    protected $fillable = [
        'emp_id',
        'emp_id',
        'doc_name',
        'doc',
        'entry_by',
        'status',
    ];
    public static function filterJobList()
    {
        return DB::table('joblist')->get();
    }
    public static function filterJoStatusbList()
    {
        return DB::table('job_status')->get();
    }
    public static function filterJobPublish()
    {
        return DB::table('jobpublish')->orderBy('id', 'desc')->get();
    }
    public static function filterEmailSending()
    {
        return DB::table('send_message')->get();
    }
    public static function filterofferletter()
    {
        return DB::table('generate_offer_letter')->orderBy('id', 'desc')->get();
    }
    public static function filterAppliedJob()
    {
        return DB::table('apply_job')
            ->select('apply_job.*', 'job_status.name as job_status')
            ->leftJoin('job_status', 'job_status.id', '=', 'apply_job.status')
            ->get();
    }
    public static function filterShortListedJob()
    {
        return DB::table('apply_job')
            ->select('apply_job.*', 'job_status.name as job_status')
            ->leftJoin('job_status', 'job_status.id', '=', 'apply_job.status')
            ->where('apply_job.status', 2)
            ->get();
    }
    public static function filterInvertiewList()
    {
        return DB::table('apply_job')
            ->select('apply_job.*', 'job_status.name as job_status')
            ->leftJoin('job_status', 'job_status.id', '=', 'apply_job.status')
            ->where('apply_job.status', 3)
            ->get();
    }
    public static function filterHiredList()
    {
        return DB::table('apply_job')
            ->select('apply_job.*', 'job_status.name as job_status')
            ->leftJoin('job_status', 'job_status.id', '=', 'apply_job.status')
            ->where('apply_job.status', 8)
            ->get();
    }
    public static function filterrejectList()
    {
        return DB::table('apply_job')
            ->select('apply_job.*', 'job_status.name as job_status')
            ->leftJoin('job_status', 'job_status.id', '=', 'apply_job.status')
            ->where('apply_job.status', 10)
            ->get();
    }
    public static function geReport($data = array())
    {
        $cond = '';
        $fdate = date("Y-m-d", strtotime($data['frmdate']));
        $tdate = date("Y-m-d", strtotime($data['todate']));

        if (!empty($fdate) && !empty($tdate)) {
            $cond .= " AND DATE(created_at) BETWEEN '$fdate' AND '$tdate' ";
        }
        
        if (isset($data['status'])) {
          $cond .= " AND apply_job.status='" . $data['status'] . "'";
        }
 
        $cond .= " ORDER BY apply_job.id DESC ";
        $sqld = "SELECT  apply_job.*,job_status.name as job_status FROM `apply_job` LEFT JOIN job_status ON (job_status.id=apply_job.status)  WHERE 1 " . $cond;
       // echo $sqld;exit; 
        $results = DB::select($sqld);
        return $results;
    }

    public static function getAllJobPosts()
    {
        return DB::table('jobpost')->get();
    }
    public static function editId($id)
    {
        return DB::table('joblist')->where('id', $id)->first();
    }
    public static function jobpostRow($id)
    {
        return DB::table('jobpost')->where('id', $id)->first();
    }
    public static function jobpostpublishRow($id)
    {
        return DB::table('jobpublish')->where('id', $id)->first();
    }
    public static function jobApplyRow($id)
    {
        return DB::table('apply_job')->where('id', $id)->first();
    }
    public static function generateOfferLettrow($id)
    {
        return DB::table('generate_offer_letter')->where('id', $id)->first();
    }
}
