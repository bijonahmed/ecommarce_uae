<?php
namespace App\Http\Controllers\Appointment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Appointment;
use App\Models\Profile;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class AppointmentController extends Controller
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
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'email'     => 'required',
            'phone'     => 'required',
            'addres'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'email'         => !empty($request->email) ? $request->email : "",
            'datetimie'     => !empty($request->datetimie) ? $request->datetimie : "",
            'phone'         => !empty($request->phone) ? $request->phone : "",
            'entry_by'      => $this->userid,
            'addres'        => $request->addres,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('appointment')->insertGetId($data);
        } else {
            DB::table('appointment')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function allAppointment(Request $request)
    {
        try {
            $rows = Appointment::filterAppointmentList($request->all());
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
    public function editAppointmentId($id)
    {
        $id = (int) $id;
        $data = Appointment::editAppointmentId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
}