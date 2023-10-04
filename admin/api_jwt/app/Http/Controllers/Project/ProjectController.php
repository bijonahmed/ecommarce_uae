<?php
namespace App\Http\Controllers\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Project;
use App\Models\Profile;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class ProjectController extends Controller
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
            DB::table('projects')->insertGetId($data);
        } else {
            DB::table('projects')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }

    public function saveTask(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title'           => 'required',
            'description'     => 'required',
            'project_id'      => 'required',
            'emp_id'          => 'required',
            'start_date'      => 'required',
            'end_date'        => 'required',
            'status'          => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'title'          => !empty($request->title) ? $request->title : "",
            'description'    => !empty($request->description) ? $request->description : "",
            'project_id'     => !empty($request->project_id) ? $request->project_id : "",
            'emp_id'         => !empty($request->emp_id) ? $request->emp_id : "",
            'start_date'     => !empty($request->start_date) ? $request->start_date : "",
            'end_date'       => !empty($request->end_date) ? $request->end_date : "",
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
            $data['image'] = $file_url;
        }

        // dd($data);
        if (empty($request->id)) {
            DB::table('tasks')->insertGetId($data);
        } else {
            DB::table('tasks')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }

    public function allProject(Request $request)
    {

        try {
            $rows = Project::filterList($request->all());
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

    public function geTaskList(Request $request)
        {
            
            try {
                $rows = Project::filterListTask($request->all());
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
        $data = Project::editId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

 public function editTaskId($id)
    {

        $id = (int) $id;
        $data = Project::editIdtask($id);
        $response = [
            'data' => $data,
            'dataImg' => !empty($data->image) ? url($data->image) : "",
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    
}
