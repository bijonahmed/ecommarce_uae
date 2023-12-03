<?php
namespace App\Http\Controllers\Setting;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Setting;
use App\Models\Profile;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class SettingController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }
    public function insertEmployeeType(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('employee_type')->insertGetId($data);
        } else {
            DB::table('employee_type')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPayGroup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('pay_group')->insertGetId($data);
        } else {
            DB::table('pay_group')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertAnnualPay(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('annual_pay')->insertGetId($data);
        } else {
            DB::table('annual_pay')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertBankMaster(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('bank_master')->insertGetId($data);
        } else {
            DB::table('bank_master')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertWedges(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('wedges_pay_mode')->insertGetId($data);
        } else {
            DB::table('wedges_pay_mode')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPayItem(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'              => !empty($request->name) ? $request->name : "",
            'in_percent'        => !empty($request->in_percent) ? $request->in_percent : "",
            'in_rupees'         => !empty($request->in_rupees) ? $request->in_rupees : "",
            'min_value'         => !empty($request->min_value) ? $request->min_value : "",
            'max_value'         => !empty($request->max_value) ? $request->max_value : "",
            'effective_frm'     => !empty($request->effective_frm) ? date("Y-m-d", strtotime($request->effective_frm)) : "",
            'effective_to'      => !empty($request->effective_to) ? date("Y-m-d", strtotime($request->effective_to)) : "",
            'status'            => !empty($request->status) ? $request->status : "",
            'entry_by'           => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('payroll_pay_item')->insertGetId($data);
        } else {
            DB::table('payroll_pay_item')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertBankCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'bank_id'   => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'bank_id'       => !empty($request->bank_id) ? $request->bank_id : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('bank_short_code')->insertGetId($data);
        } else {
            DB::table('bank_short_code')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertTaxMaster(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'                          => !empty($request->name) ? $request->name : "",
            'percentage_of_deduction'       => !empty($request->percentage_of_deduction) ? $request->percentage_of_deduction : "",
            'tax_reference'                 => !empty($request->tax_reference) ? $request->tax_reference : "",
            'status'                        => !empty($request->status) ? $request->status : "",
            'entry_by'                      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('tax_master')->insertGetId($data);
        } else {
            DB::table('tax_master')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPaymentType(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'              => 'required',
            'working_hour'      => 'required',
            'rate'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'                          => !empty($request->name) ? $request->name : "",
            'working_hour'                  => !empty($request->working_hour) ? $request->working_hour : "",
            'rate'                          => !empty($request->rate) ? $request->rate : "",
            'status'                        => !empty($request->status) ? $request->status : "",
            'entry_by'                      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('payment_type')->insertGetId($data);
        } else {
            DB::table('payment_type')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function getEmployeeTypeList(Request $request)
    {
        try {
            $rows = Setting::filterEmpList($request->all());
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
    public function getPayGroupList(Request $request)
    {
        try {
            $rows = Setting::filterPayGroupList($request->all());
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
    public function getAnnualPayist(Request $request)
    {
        try {
            $rows = Setting::filterAnnualPay($request->all());
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
    public function getBankMasterlist(Request $request)
    {
        try {
            $rows = Setting::filterbankMaster($request->all());
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
    public function gettxtMastlist(Request $request)
    {
        try {
            $rows = Setting::filtertaxtMaster($request->all());
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
    public function getWdges(Request $request)
    {
        try {
            $rows = Setting::filterWdges($request->all());
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
    public function getPayItemList(Request $request)
    {
        try {
            $rows = Setting::filterPayItemlist($request->all());
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
    public function getPaymentType(Request $request)
    {
        try {
            $rows = Setting::filterpaymentType($request->all());
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
    public function getBankShortCodelist(Request $request)
    {
        try {
            $rows = Setting::filterBShortCode($request->all());
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
    public function checkrowEmpleeType($id)
    {
        $id = (int) $id;
        $data = Setting::editEmpTypeId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowPayGroup($id)
    {
        $id = (int) $id;
        $data = Setting::editPayGroupId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowAnnualPay($id)
    {
        $id = (int) $id;
        $data = Setting::editAnnualPayId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowBankMaster($id)
    {
        $id = (int) $id;
        $data = Setting::editBankMasterId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowBankShortCode($id)
    {
        $id = (int) $id;
        $data = Setting::editBankShortCodeId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowtxtmaster($id)
    {
        $id = (int) $id;
        $data = Setting::edittxtMasterId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowPaymenttype($id)
    {
        $id = (int) $id;
        $data = Setting::editPaymentId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowWedges($id)
    {
        $id = (int) $id;
        $data = Setting::editWedgesId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkPayItemRow($id)
    {
        $id = (int) $id;
        $data = Setting::editPayrowId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
}
