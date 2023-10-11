<?php
namespace App\Http\Controllers\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Holiday;
use App\Models\User;
use App\Models\LeaveType;
use App\Models\Categorys;
use App\Models\HolidayList;
use App\Models\LeaveAllocation;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use Session;
use DB;
class ProductController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }

 
    public function save(Request $request)
    {
    //dd($request->all());
   
        $validator = Validator::make($request->all(), [
            'name'          => 'required',
            'status'        => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        //DB::enableQueryLog();
        $category     = $request->category;
        $dynamicArray = explode(',',$category); // Convert the string to an array
        $results      = Categorys::whereIn('id', $dynamicArray)->get();
        
        $formattedResults = [];
        foreach ($results as $result) {
            $path = [];
            $category = $result;
            while ($category) {
                array_unshift($path, $category->id);
                $category = $category->parent;
            }
            $formattedResults[] = [
                'category_id' => $result->id,
                'parent_id' => implode(',', $path)
            ];
        }

        dd($formattedResults);














        exit; 
    }

  


    public function getSesData(){
        echo "get session";
        $data = Session::get('temp_data');
        dd($data);
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
