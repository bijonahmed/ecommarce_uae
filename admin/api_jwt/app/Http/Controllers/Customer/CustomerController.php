<?php
namespace App\Http\Controllers\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Customer;
use App\Models\Profile;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class CustomerController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }
public function saveLead(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'          => 'required',
            'email'         => 'required',
            'phone'         => 'required',
            'address'       => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'     => !empty($request->name) ? $request->name : "",
            'phone'    => !empty($request->phone) ? $request->phone : "",
            'email'    => !empty($request->email) ? $request->email : "",
            'address'  => !empty($request->address) ? $request->address : "",
            'entry_by' => $this->userid,
            'status'   => $request->status,
        );
        if($request->status == 2){
            $sdata['name']      = $request->name;
            $sdata['addres']    = $request->address;
            $sdata['email']     = $request->email;
            $sdata['phone']     = $request->phone;
            $sdata['entry_by']  = $this->userid;
            $sdata['status']    = 1;
            DB::table('customer')->insertGetId($sdata);
         }
        if (empty($request->id)) {
            DB::table('lead')->insertGetId($data);
        } else {
            DB::table('lead')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully',
        ];
        return response()->json($response);
    }
    public function saveCustomer(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'  => 'required',
            'phone' => 'required',
            'email' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'     => !empty($request->name) ? $request->name : "",
            'phone'    => !empty($request->phone) ? $request->phone : "",
            'addres'   => !empty($request->addres) ? $request->addres : "",
            'email'    => !empty($request->email) ? $request->email : "",
            'entry_by' => $this->userid,
            'status'   => $request->status,
        );
        if (empty($request->id)) {
            DB::table('customer')->insertGetId($data);
        } else {
            DB::table('customer')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfully Working',
        ];
        return response()->json($response);
    }
    public function allCustomers(Request $request)
    {
       
        try {
            $rows = Customer::filterCustomerList($request->all());
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
     public function allleadList(Request $request)
    {

        try {
            $rows = Customer::filterLeadList($request->all());
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
    public function checkCustomer($id)
    {
        $id = (int) $id;
        $data = Customer::checkCustomerRow($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
 public function checkLead($id)
    {
        $id = (int) $id;
        $data = Customer::checkLeadRow($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
}