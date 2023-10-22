<?php

namespace App\Http\Controllers\Brands;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Holiday;
use App\Models\User;
use App\Models\Manufactures;
use App\Models\Brands;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use Session;
use DB;

class BrandsController extends Controller
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
            'name'           => 'required',
            'status'         => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));

        $data = array(
            'name'                       => $request->name,
            'slug'                       => $slug,
            'status'                     => !empty($request->status) ? $request->status : "",

        );

        if (empty($request->id)) {
            Brands::insertGetId($data);
        } else {
            Brands::where('id', $request->id)->update($data);
        }

        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function allbrandlist()
    {

        try {
            $rows = Brands::all();
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


    public function brandrow($id)
    {

        try {
            $row = Brands::find($id);
            $response = [
                'data' => $row,
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

    public function searchmodels(Request $request)
    {
        $query = $request->input('query');
        $products = Brands::where('name', 'LIKE', "%$query%")->pluck('name');
        return response()->json($products);
    }
}
