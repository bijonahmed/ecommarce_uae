<?php
namespace App\Http\Controllers\Leave;
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
use App\Models\LeaveRequest;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class LeaveController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }



    public function createEditLeaveRequest(Request $request){

        $validator = Validator::make($request->all(), [
            'leave_type_id'      => 'required',
            'frm_date'           => 'required',
            'to_date'            => 'required',
            'no_of_leave'        => 'required',
            'status'             => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new LeaveRequest();
            $data->employe_id           = $this->userid;
            $data->leave_type_id        = $request->leave_type_id;
            $data->frm_date             = $request->frm_date;
            $data->to_date              = $request->to_date;
            $data->no_of_leave          = $request->no_of_leave;
            $data->status               = $request->status;
            $data->remarks              = $request->remarks;
            $data->date_of_application  =date("Y-m-d");
            $data->save();
        } else {
            LeaveRequest::where('id', $request->id)->update([
                'employe_id'           => $this->userid,
                'leave_type_id'        => !empty($request->leave_type_id) ? $request->leave_type_id : "",
                'frm_date'             => !empty($request->frm_date) ? $request->frm_date : "",
                'to_date'              => !empty($request->to_date) ? $request->to_date : "",
                'no_of_leave'          => !empty($request->no_of_leave) ? $request->no_of_leave : "",
                'status'               => !empty($request->status) ? $request->status : "",
                'remarks'              => !empty($request->remarks) ? $request->remarks : "",
                'status'               => !empty($request->status) ? $request->status : "",
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);



    }



    public function getleaveApprovalList(){

        try {
            $rows = LeaveRequest::join('employee_type', 'employee_type.id', '=', 'employee_leave_request.leave_type_id')
                    ->leftjoin('circumstances', 'circumstances.employe_id', '=', 'employee_leave_request.employe_id')
                    ->leftjoin('employee', 'employee.id', '=', 'circumstances.employe_id')
                    ->leftjoin('leave_type', 'leave_type.id', '=', 'employee_leave_request.leave_type_id')
                    ->select('employee_leave_request.*', 'employee.name as emp_name', 'employee.employee_code', 'leave_type.name as lev_type')
                    ->where('employee_leave_request.employe_id',$this->userid)
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
    public function createEditLeaveAllocation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'employee_type'      => 'required',
            'employe_id'         => 'required',
            'year'               => 'required',
            'effective_year'     => 'required',
            'status'             => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new LeaveAllocation;
            $data->maximum_no_annual = !empty($request->maximum_no_annual) ? $request->maximum_no_annual : "";
            $data->leave_type        = !empty($request->leave_type) ? $request->leave_type : "";
            $data->employee_type     = !empty($request->employee_type) ? $request->employee_type : "";
            $data->employe_id        = !empty($request->employe_id) ? $request->employe_id : "";
            $data->year              = !empty($request->year) ? $request->year : "";
            $data->leave_in_hand     = !empty($request->leave_in_hand) ? $request->leave_in_hand : "";
            $data->effective_year    = !empty($request->effective_year) ? $request->effective_year : "";
            $data->status            = !empty($request->status) ? $request->status : "";
            $data->save();
        } else {
            LeaveAllocation::where('id', $request->id)->update([
                'maximum_no_annual' => !empty($request->maximum_no_annual) ? $request->maximum_no_annual : "",
                'employee_type'    => !empty($request->leave_type) ? $request->leave_type : "",
                'employee_type'    => !empty($request->employee_type) ? $request->employee_type : "",
                'employe_id'       => !empty($request->employe_id) ? $request->employe_id : "",
                'year'             => !empty($request->year) ? $request->year : "",
                'leave_in_hand'    => !empty($request->leave_in_hand) ? $request->leave_in_hand : "",
                'effective_year'   => !empty($request->effective_year) ? $request->effective_year : "",
                'status'           => !empty($request->status) ? $request->status : "",
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }


    public function leaveRequestUpdate(Request $request){

       // dd($request->all());
        $validator = Validator::make($request->all(), [
            'status'                => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new LeaveRequest;
            $data->save();
        } else {
            LeaveRequest::where('id', (int)$request->id)->update([
                'status'              => !empty($request->status) ? $request->status : "",
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);


    }
    public function createEditLeaveRule(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'employee_type_id'      => 'required',
            'leave_type_id'         => 'required',
            'maximum_no_annual'     => 'required',
            'effective_from'        => 'required',
            'effective_to'          => 'required',
            'status'                => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new LeaveRule;
            $data->employee_type_id   = !empty($request->employee_type_id) ? $request->employee_type_id : "";
            $data->leave_type_id      = !empty($request->leave_type_id) ? $request->leave_type_id : "";
            $data->maximum_no_annual  = !empty($request->maximum_no_annual) ? $request->maximum_no_annual : "";
            $data->effective_from     = !empty($request->effective_from) ? $request->effective_from : "";
            $data->effective_to       = !empty($request->effective_to) ? $request->effective_to : "";
            $data->status             = !empty($request->status) ? $request->status : "";
            $data->save();
        } else {
            LeaveRule::where('id', $request->id)->update([
                'employee_type_id'    => !empty($request->employee_type_id) ? $request->employee_type_id : "",
                'leave_type_id'       => !empty($request->leave_type_id) ? $request->leave_type_id : "",
                'maximum_no_annual'   => !empty($request->maximum_no_annual) ? $request->maximum_no_annual : "",
                'effective_from'      => !empty($request->effective_from) ? $request->effective_from : "",
                'effective_to'        => !empty($request->effective_to) ? $request->effective_to : "",
                'status'              => !empty($request->status) ? $request->status : "",
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function createEditLeavType(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'code'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new LeaveType;
            $data->name   = !empty($request->name) ? $request->name : "";
            $data->code   = !empty($request->code) ? $request->code : "";
            $data->status = !empty($request->name) ? $request->status : "";
            $data->save();
        } else {
            LeaveType::where('id', $request->id)->update([
                'name'   => !empty($request->name) ? $request->name : "",
                'code'   => !empty($request->code) ? $request->code : "",
                'status' => !empty($request->status) ? $request->status : "",
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function createEditHoliday(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new Holiday;
            $data->name   = !empty($request->name) ? $request->name : "";
            $data->status = !empty($request->name) ? $request->status : "";
            $data->save();
        } else {
            Holiday::where('id', $request->id)->update([
                'name'   => !empty($request->name) ? $request->name : "",
                'status' => !empty($request->status) ? $request->status : "",
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function createEditHolidayList(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'frm_date'          => 'required',
            'to_date'           => 'required',
            'no_of_days'        => 'required',
            'day'               => 'required',
            'holiday_type_id'   => 'required',
            'status'            => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        if (empty($request->id)) {
            $data = new HolidayList;
            $data->frm_date          = !empty($request->frm_date) ? $request->frm_date : "";
            $data->to_date           = !empty($request->to_date) ? $request->to_date : "";
            $data->no_of_days        = !empty($request->no_of_days) ? $request->no_of_days : "";
            $data->day               = !empty($request->day) ? $request->day : "";
            $data->holiday_type_id   = !empty($request->holiday_type_id) ? $request->holiday_type_id : "";
            $data->holiday_description = !empty($request->holiday_description) ? $request->holiday_description : "";
            $data->status              = !empty($request->status) ? $request->status : "";
            $data->save();
        } else {
            HolidayList::where('id', $request->id)->update([
                'frm_date'              => !empty($request->frm_date) ? $request->frm_date : "",
                'to_date'               => !empty($request->to_date) ? $request->to_date : "",
                'no_of_days'            => !empty($request->no_of_days) ? $request->no_of_days : "",
                'day'                   => !empty($request->day) ? $request->day : "",
                'holiday_type_id'       => !empty($request->holiday_type_id) ? $request->holiday_type_id : "",
                'holiday_description'   => !empty($request->holiday_description) ? $request->holiday_description : "",
                'status'                => !empty($request->status) ? $request->status : "",
            ]);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function getholidaylist(Request $request)
    {
        try {
            $rows =  Holiday::all();
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
    public function getLeaveTypeList()
    {
        try {
            $rows =  LeaveType::all();
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
    public function getLeaveRuleList()
    {
        try {
            $rows = LeaveRule::join('employee_type', 'employee_type.id', '=', 'leave_rule.employee_type_id')
                ->leftjoin('leave_type', 'leave_type.id', '=', 'leave_rule.leave_type_id')
                ->select('leave_rule.*', 'employee_type.name as emp_type', 'leave_type.name as lev_type')
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
    public function getLeaveRequestList()
    {
        try {
            $rows = LeaveRequest::join('employee_type', 'employee_type.id', '=', 'employee_leave_request.leave_type_id')
                ->leftjoin('circumstances', 'circumstances.employe_id', '=', 'employee_leave_request.employe_id')
                ->leftjoin('employee', 'employee.id', '=', 'circumstances.employe_id')
                ->leftjoin('leave_type', 'leave_type.id', '=', 'employee_leave_request.leave_type_id')
                ->select('employee_leave_request.*', 'employee.name as emp_name', 'employee.employee_code', 'leave_type.name as lev_type')
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
    public function getLeaveAllocationList()
    {
        try {
            $rows = LeaveAllocation::join('circumstances', 'circumstances.employe_id', '=', 'leave_allocation.employe_id')
                ->select('leave_allocation.*', 'circumstances.name as emp_name')
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
    public function getHolidayAllList(Request $request)
    {
        try {
            $rows = HolidayList::join('holiday', 'holiday.id', '=', 'leave_list.holiday_type_id')
                ->select('leave_list.*', 'holiday.name as holidaytype')
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
    public function chkholiDayRow($id)
    {
        $id = (int) $id;
        $data = Holiday::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
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


    public function requestRowCheck($id)
        {
            $id = (int) $id;
            $data = LeaveRequest::find($id);
            $response = [
                'data' => $data,
                'message' => 'success'
            ];
            return response()->json($response, 200);
        }

    
    public function leaveRulerow($id)
    {
        $id = (int) $id;
        $data = LeaveRule::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    public function leaveApprovalRequestRow($id)
        {
            $id = (int) $id;
            $data = LeaveRequest::find($id);
            $response = [
                'data' => $data,
                'message' => 'success'
            ];
            return response()->json($response, 200);
        }
    
    public function leaveAllocationRow($id)
    {
        $id = (int) $id;
        $data = LeaveAllocation::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function getLeaveRulesCheck(Request $request)
    {
        //dd($request->all());
        $emp_type       = $request->employee_type;
        $emp_id         = (int)$request->emp_id;
        $emp_type       = DB::table('employee_type')->where('name', 'like', '%' . $emp_type . '%')->first();
        $empty_type_id  = $emp_type->id;
        $data           = LeaveRule::where('employee_type_id', $empty_type_id)
            ->select('leave_rule.maximum_no_annual', 'leave_type.name as leave_type')
            ->leftjoin('leave_type', 'leave_type.id', '=', 'leave_rule.leave_type_id')
            ->first();
        $leavAllocation    = LeaveAllocation::where('employe_id', $emp_id)->select('leave_in_hand')->sum('leave_in_hand');
        $maximum_no_annual = !empty($data->maximum_no_annual) ? $data->maximum_no_annual : 0;
        $minus_inhand      = $maximum_no_annual - (int)$leavAllocation;
        $caldata['maximum_no_annual']  = $maximum_no_annual;
        $caldata['leave_type']         = !empty($data->leave_type) ? $data->leave_type : "";
        $caldata['leave_in_hand']      = $minus_inhand;
        $response = [
            'data' => $caldata,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function chkleadlistId($id)
    {
        $id = (int) $id;
        $data = HolidayList::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
}
