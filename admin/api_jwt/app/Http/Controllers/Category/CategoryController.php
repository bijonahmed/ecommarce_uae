<?php
namespace App\Http\Controllers\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\User;
use App\Models\Categorys;
use App\Category;
use App\Models\Profile;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
class CategoryController extends Controller
{
    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }
    public function index()
    {
        $categories = Categorys::with('children.children.children.children.children')->select('name')->where('parent_id', 0)->get();
        return response()->json($categories);
    }
    public function save(Request $request)
    {
        //dd($request->all());
        if (empty($request->id)) {
            $validator = Validator::make(
                $request->all(),
                [
                    'name'      => 'required|unique:categorys,name',
                    'status'    => 'required',
                ],
                [
                    //'name'   => 'Category name is required',
                    'status' => 'Status is required',
                ]
            );
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
        }
        // Upload image
        if (!empty($request->file('file'))) {
            $files = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $imagePath = $file_url;
            //$data['file'] = $file_url;
        } else {
            $imagePath = "";
        }
        $slug     = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        if (empty($request->id)) {
            // Save to database
            Categorys::create([
                'name'              => $request->input('name'),
                'slug'              => $slug,
                'description'       => $request->input('description'),
                'meta_title'        => $request->input('meta_title'),
                'meta_description'  => $request->input('meta_description'),
                'meta_keyword'      => $request->input('meta_keyword'),
                'parent_id'         => $request->input('parent_id') ? $request->input('parent_id') : 0,
                'status'            => $request->input('status'),
                'keyword'           => $request->input('keyword'),
                'mobile_view_class' => $request->input('mobile_view_class'),
                'file'              => $imagePath,
            ]);
        } else {
            $data = Categorys::find($request->id);
            if (!empty($request->file('file'))) {
                $files = $request->file('file');
                $fileName = Str::random(20);
                $ext = strtolower($files->getClientOriginalExtension());
                $path = $fileName . '.' . $ext;
                $uploadPath = '/backend/files/';
                $upload_url = $uploadPath . $path;
                $files->move(public_path('/backend/files/'), $upload_url);
                $file_url = $uploadPath . $path;
                $imagePath = $file_url;
            } else {
                $imagePath =  $data->file;
            }
            $data->name              =  $request->input('name');
            $data->slug              =  $slug;
            $data->description       =  $request->input('description');
            $data->meta_title        =  $request->input('meta_title');
            $data->meta_description  =  $request->input('meta_description');
            $data->meta_keyword      =  $request->input('meta_keyword');
            $data->parent_id         =  $request->input('parent_id');
            $data->status            =  $request->input('status');
            $data->keyword           =  $request->input('keyword');
            $data->mobile_view_class =  $request->input('mobile_view_class');
            $data->save();
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function allCategory(Request $request)
    {
        $categories = Categorys::with('children.children.children.children.children')->where('parent_id', 0)->get();
        return response()->json($categories);
    }
    public function findCategoryRow($id)
    {
        $data = Categorys::find($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function getSubCategoryChild($id)
    {
        $data = Categorys::where('parent_id', $id)->get();
        $collection = collect($data);
        $modifiedCollection = $collection->map(function ($item) {
            return [
                'value' => $item['id'],
                'label' => $item['name'],
            ];
        });
        return response()->json($modifiedCollection, 200);
    }
    public function getInSubCategoryChild($data)
    {
        $selectedValues = trim($data);
        $queries = DB::select("SELECT id,name,parent_id FROM `categorys` WHERE `parent_id` IN ($selectedValues)");
        $result = [];
        foreach ($queries as $key => $v) {
            $result[] = [
                'value' => $v->id,
                'label' => $v->name
            ];
        }
        return response()->json($result);
    }
    public function searchCategory(Request $request)
    {
        $term = $request->input('term');
        $results = Categorys::where('name', 'like', '%' . $term . '%')
            // ->orWhere('category', 'like', '%' . $term . '%')
            ->get();
        $formattedResults = [];
        foreach ($results as $result) {
            $path = [];
            $category = $result;
            while ($category) {
                array_unshift($path, $category->name);
                $category = $category->parent;
            }
            $formattedResults[] = [
                'name' => $result->name,
                'category' => implode(' > ', $path)
            ];
        }
        return response()->json($formattedResults);
    }
    public function categoryProducts()
    {
        $data =  Categorys::select('id', 'name')->get();
        $collection = collect($data);
        $modifiedCollection = $collection->map(function ($item) {
            return [
                'value' => $item['id'],
                'label' => "Electronics > Computer > Accessories >" . $item['name'],
            ];
        });
        return response()->json($modifiedCollection, 200);
    }
}
