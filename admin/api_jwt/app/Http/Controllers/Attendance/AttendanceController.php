<?php
namespace App\Http\Controllers\Attendance;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Holiday;
use App\Models\User;
use App\Models\LeaveType;
use App\Models\LeaveRule;
use App\Models\HolidayList;
use App\Models\LeaveAllocation;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class AttendanceController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }




    public function uploadDocuments(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'file'          => 'required',
            'status'        => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = array(
            'status'        => $request->status,
            'entry_by'      => $this->userid,
        );
        if (!empty($request->file('file'))) {
            $files = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['file'] = $file_url;
        }
        DB::table('upload_attendance')->truncate();
        
        if (empty($request->id)) {
            $id = DB::table('upload_attendance')->insertGetId($data);
        } else {
            $id = $request->id;
            DB::table('upload_attendance')->where('id', $request->id)->update($data);
        }
        $first_row = DB::table('upload_attendance')->first();
        $response = [
            'file_url' => !empty($first_row->file) ? url($first_row->file) : "",
            'message' => 'Upload Done:' . $id
        ];
        return response()->json($response);
    }

    public function getUploadAttendance(){

        $first_row = DB::table('upload_attendance')->first();
        $response = [
            'file_url' => !empty($first_row->file) ? url($first_row->file) : "",
            'message' => 'Upload Done:'
        ];
        return response()->json($response);


    }


    public function getLeaveBalanceReport()
    {
        try {
            $rows  = LeaveAllocation::select('leave_allocation.*', 'circumstances.name as emp_name', 'employee.employee_code')
                ->leftjoin('circumstances', 'circumstances.employe_id', '=', 'leave_allocation.employe_id')
                ->leftjoin('employee', 'employee.id', '=', 'circumstances.employe_id')
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
    public function getLeaveReport(Request $request)
    {
        //$rows =  LeaveAllocation::getLeaveReport($request->all());
        //dd($rows);
        try {
            $rows =  LeaveAllocation::getLeaveReport($request->all());
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
   
    public function leaveTyperow($id)
    {
        $id = (int) $id;
        $data = LeaveType::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
   
}
