<?php
namespace App\Http\Controllers\Organogram;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Project;
use App\Models\Organogram;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class OrganogramController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }
    public function saveLevel(Request $request)
    {
        $validator = Validator::make($request->all(), [
            //'name'      => 'required',
            'name'      => 'required|unique:organogram_level,name',
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
            DB::table('organogram_level')->insertGetId($data);
        } else {
            DB::table('organogram_level')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function updateLevel(Request $request)
    {
        $validator = Validator::make($request->all(), [
            //'name'      => 'required',
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
        DB::table('organogram_level')->where('id', $request->id)->update($data);
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function saveHierarchy(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'employee_id'   => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'employee_id'       => !empty($request->employee_id) ? $request->employee_id : "",
            'level_id'          => !empty($request->level_id) ? $request->level_id : "",
            'designation'       => !empty($request->designation) ? $request->designation : "",
            'reportign_auth'    => !empty($request->reportign_auth) ? $request->reportign_auth : "",
            'name_report_auth'  => !empty($request->name_report_auth) ? $request->name_report_auth : "",
            'level_id_authority' => !empty($request->level_id_authority) ? $request->level_id_authority : "",
            'designation_report_auth' => !empty($request->designation_report_auth) ? $request->designation_report_auth : "",
            'entry_by'          => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('organogram_hierarchy')->insertGetId($data);
        } else {
            DB::table('organogram_hierarchy')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function getLevelList(Request $request)
    {
        try {
            $rows = Organogram::filterList($request->all());
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


    public function getOrganisationHierarchyList(Request $request)
        {
            //$rows = Organogram::organisationHierarchyList($request->all());
           // dd($rows);
            try {
                $rows = Organogram::organisationHierarchyList($request->all());
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

    
    public function editId($id)
    {
        $id = (int) $id;
        $data = Organogram::editId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }


public function hierarchyRow($id)
    {
        $id = (int) $id;
        $data = Organogram::hierarchyRoweditId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }


    
}
