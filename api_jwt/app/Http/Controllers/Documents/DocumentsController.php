<?php
namespace App\Http\Controllers\Documents;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Project;
use App\Models\Documents;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class DocumentsController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }
 
    public function saveDocuments(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title'           => 'required',
            'note'            => 'required',
            'emp_id'          => 'required',
            'status'          => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'title'          => !empty($request->title) ? $request->title : "",
            'note'           => !empty($request->note) ? $request->note : "",
            'emp_id'         => !empty($request->emp_id) ? $request->emp_id : "",
            'status'         => !empty($request->status) ? $request->status : "",
            'entry_by'       => $this->userid,
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
            $data['doc'] = $file_url;
        }
        // dd($data);
        if (empty($request->id)) {
            DB::table('employee_docs')->insertGetId($data);
        } else {
            DB::table('employee_docs')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }

    public function getAllDocuments(Request $request)
    {
       
        try {
            $rows = Documents::filterList($request->all());
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
        $data = Documents::editId($id);
        $response = [
            'data' => $data,
            'dataImg' => !empty($data->doc) ? url($data->doc) : "",
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
  
}
