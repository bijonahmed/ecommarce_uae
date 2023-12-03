<?php
namespace App\Http\Controllers\Rota;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\RotaShiftManage;
use App\Models\RotaLatePolicy;
use App\Models\RotaGracePeriod;
use App\Models\RotaDutyRoster;
use App\Models\Recruitment;
use App\Models\RotaVisitorRegister;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
use File;
use PhpParser\Node\Stmt\TryCatch;
use function Ramsey\Uuid\v1;
class RotaController extends Controller
{
    protected $frontend_url;
    protected $userid;
    public function __construct(Request $request)
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }


    public function createEditDutyRoster(Request $request)
        {
            //echo  $this->userid;exit; 
            $validator = Validator::make($request->all(), [
                'department_id'          => 'required',
                'designation_id'         => 'required',
                'shift_id'               => 'required',
                'from_date'              => 'required',
                'to_date'                => 'required',
                'status'                 => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            if (empty($request->id)) {
                $data = new RotaDutyRoster;
                $data->department_id         = !empty($request->department_id) ? $request->department_id : "";
                $data->designation_id        = !empty($request->designation_id) ? $request->designation_id : "";
                $data->shift_id              = !empty($request->shift_id) ? $request->shift_id : "";
                $data->from_date             = !empty($request->from_date) ? $request->from_date : "";
                $data->to_date               = !empty($request->to_date) ? $request->to_date : "";
                $data->status                = !empty($request->status) ? $request->status : "";
                $data->entry_by              = $this->userid;
                $data->save();
            } else {
                RotaDutyRoster::where('id', $request->id)->update([
                    'department_id'          => !empty($request->department_id) ? $request->department_id : "",
                    'designation_id'         => !empty($request->designation_id) ? $request->designation_id : "",
                    'shift_id'               => !empty($request->shift_id) ? $request->shift_id : "",
                    'from_date'              => !empty($request->from_date) ? $request->from_date : "",
                    'to_date'                => !empty($request->to_date) ? $request->to_date : "",
                    'status'                 => !empty($request->status) ? $request->status : "",
                    'entry_by'               => $this->userid,
                ]);
            }
            $response = [
                'message' => 'Successfull',
            ];
            return response()->json($response);
        }

    
    public function createEditGracePeriod(Request $request)
    {
        //echo  $this->userid;exit; 
        $validator = Validator::make($request->all(), [
            'department_id'          => 'required',
            'designation_id'         => 'required',
            'shift_id'               => 'required',
            'work_in_time'           => 'required',
            'grace_period'           => 'required',
            'status'                 => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new RotaGracePeriod;
            $data->department_id         = !empty($request->department_id) ? $request->department_id : "";
            $data->designation_id        = !empty($request->designation_id) ? $request->designation_id : "";
            $data->shift_id              = !empty($request->shift_id) ? $request->shift_id : "";
            $data->work_in_time          = !empty($request->work_in_time) ? $request->work_in_time : "";
            $data->grace_period          = !empty($request->grace_period) ? $request->grace_period : "";
            $data->status                = !empty($request->status) ? $request->status : "";
            $data->entry_by              = $this->userid;
            $data->save();
        } else {
            RotaGracePeriod::where('id', $request->id)->update([
                'department_id'          => !empty($request->department_id) ? $request->department_id : "",
                'designation_id'         => !empty($request->designation_id) ? $request->designation_id : "",
                'shift_id'               => !empty($request->shift_id) ? $request->shift_id : "",
                'work_in_time'           => !empty($request->work_in_time) ? $request->work_in_time : "",
                'grace_period'           => !empty($request->grace_period) ? $request->grace_period : "",
                'status'                 => !empty($request->status) ? $request->status : "",
                'entry_by'               => $this->userid,
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function createEditLatePolicy(Request $request)
    {
        //echo  $this->userid;exit; 
        $validator = Validator::make($request->all(), [
            'department_id'          => 'required',
            'designation_id'         => 'required',
            'shift_id'               => 'required',
            'max_grade_period'       => 'required',
            'no_days_allow'          => 'required',
            'day_salary_deducted'    => 'required',
            'status'                 => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new RotaLatePolicy;
            $data->department_id         = !empty($request->department_id) ? $request->department_id : "";
            $data->designation_id        = !empty($request->designation_id) ? $request->designation_id : "";
            $data->shift_id              = !empty($request->shift_id) ? $request->shift_id : "";
            $data->max_grade_period      = !empty($request->max_grade_period) ? $request->max_grade_period : "";
            $data->no_days_allow         = !empty($request->no_days_allow) ? $request->no_days_allow : "";
            $data->day_salary_deducted   = !empty($request->day_salary_deducted) ? $request->day_salary_deducted : "";
            $data->status                = !empty($request->status) ? $request->status : "";
            $data->entry_by              = $this->userid;
            $data->save();
        } else {
            RotaLatePolicy::where('id', $request->id)->update([
                'department_id'          => !empty($request->department_id) ? $request->department_id : "",
                'designation_id'         => !empty($request->designation_id) ? $request->designation_id : "",
                'shift_id'               => !empty($request->shift_id) ? $request->shift_id : "",
                'max_grade_period'       => !empty($request->max_grade_period) ? $request->max_grade_period : "",
                'no_days_allow'          => !empty($request->no_days_allow) ? $request->no_days_allow : "",
                'day_salary_deducted'    => !empty($request->day_salary_deducted) ? $request->day_salary_deducted : "",
                'status'                 => !empty($request->status) ? $request->status : "",
                'entry_by'               => $this->userid,
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function createEditShift(Request $request)
    {
        //echo  $this->userid;exit; 
        $validator = Validator::make($request->all(), [
            'department_id'        => 'required',
            'designation_id'       => 'required',
            'work_in_time'         => 'required',
            'work_out_time'        => 'required',
            'break_time_from'      => 'required',
            'break_time_to'        => 'required',
            'shift_code'           => 'required',
            'status'               => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new RotaShiftManage;
            $data->shift_code            = !empty($request->shift_code) ? $request->shift_code : "";
            $data->department_id         = !empty($request->department_id) ? $request->department_id : "";
            $data->designation_id        = !empty($request->designation_id) ? $request->designation_id : "";
            $data->work_in_time          = !empty($request->work_in_time) ? $request->work_in_time : "";
            $data->work_out_time         = !empty($request->work_out_time) ? $request->work_out_time : "";
            $data->break_time_from       = !empty($request->break_time_from) ? $request->break_time_from : "";
            $data->break_time_to         = !empty($request->break_time_to) ? $request->break_time_to : "";
            $data->shift_description     = !empty($request->shift_description) ? $request->shift_description : "";
            $data->status                = !empty($request->status) ? $request->status : "";
            $data->entry_by              = $this->userid;
            $data->save();
        } else {
            RotaShiftManage::where('id', $request->id)->update([
                'shift_code'             => !empty($request->shift_code) ? $request->shift_code : "",
                'department_id'          => !empty($request->department_id) ? $request->department_id : "",
                'designation_id'         => !empty($request->designation_id) ? $request->designation_id : "",
                'work_in_time'           => !empty($request->work_in_time) ? $request->work_in_time : "",
                'work_out_time'          => !empty($request->work_out_time) ? $request->work_out_time : "",
                'break_time_from'        => !empty($request->break_time_from) ? $request->break_time_from : "",
                'break_time_to'          => !empty($request->break_time_to) ? $request->break_time_to : "",
                'shift_description'      => !empty($request->shift_description) ? $request->shift_description : "",
                'status'                 => !empty($request->status) ? $request->status : "",
                'entry_by'               => $this->userid,
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function allShiftInfo(Request $request)
    {
        try {
            $rows =  RotaShiftManage::all();
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getAllLatePolicy(Request $request)
    {
        try {
            $rows =  RotaLatePolicy::join('department', 'department.id', '=', 'late_policy.department_id')
                ->leftjoin('designation', 'designation.id', '=', 'late_policy.designation_id')
                ->leftjoin('shift_manage', 'shift_manage.id', '=', 'late_policy.shift_id')
                ->select('late_policy.*', 'department.name as dptName', 'designation.name as desName', 'shift_manage.shift_code')
                ->get();
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getAllGracePeriod(Request $request)
    {
        try {
            $rows =  RotaGracePeriod::join('department', 'department.id', '=', 'grace_period.department_id')
                ->leftjoin('designation', 'designation.id', '=', 'grace_period.designation_id')
                ->leftjoin('shift_manage', 'shift_manage.id', '=', 'grace_period.shift_id')
                ->select('grace_period.*', 'department.name as dptName', 'designation.name as desName', 'shift_manage.shift_code')
                ->get();
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }


    public function getAllVisitorRegister(){

        try {
            $rows =  RotaVisitorRegister::all();
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);



    }


    public function getAllDutyRoster(Request $request)
        {
            try {
                $rows =  RotaDutyRoster::join('department', 'department.id', '=', 'duty_roster.department_id')
                    ->leftjoin('designation', 'designation.id', '=', 'duty_roster.designation_id')
                    ->leftjoin('shift_manage', 'shift_manage.id', '=', 'duty_roster.shift_id')
                    ->select('duty_roster.*', 'department.name as dptName', 'designation.name as desName', 'shift_manage.shift_code')
                    ->get();
                $response = [
                    'data' => $rows,
                    'message' => 'success'
                ];
            } catch (\Throwable $th) {
                $response = [
                    'data' => [],
                    'message' => 'failed'
                ];
            }
            return response()->json($response, 200);
        }

    
    public function getshiftManageRow($id)
    {
        $id = (int) $id;
        $data = RotaShiftManage::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function getLatePolicyRow($id)
    {
        $id = (int) $id;
        $data = RotaLatePolicy::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function getLateGracePolicyRow($id)
    {
        $id = (int) $id;
        $data = RotaGracePeriod::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }


  public function getDutyRosterRow($id)
    {
        $id = (int) $id;
        $data = RotaDutyRoster::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    
}
