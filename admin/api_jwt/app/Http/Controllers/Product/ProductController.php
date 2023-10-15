<?php
namespace App\Http\Controllers\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Holiday;
use App\Models\User;
use App\Models\ProductAttributeValue;
use App\Models\Categorys;
use App\Models\ProductAttributes;
use App\Models\Product;
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
            'name'           => 'required',
            'category'       => 'required',
            'price'          => 'required|integer',
            'stock_qty'      => 'required|integer',
            'stock_mini_qty' => 'required|integer',
            'shipping_days'  => 'required',
            'status'         => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $request->input('name'))));
        $data = array(
            'name'                       => $request->name,
            'slug'                       => $slug,
            'description'                => !empty($request->description) ? $request->description : "",
            'meta_title'                 => !empty($request->meta_title) ? $request->meta_title : "",
            'meta_description'           => !empty($request->meta_description) ? $request->meta_description : "",
            'meta_keyword'               => !empty($request->meta_keyword) ? $request->meta_keyword : "",
            'product_tag'                => !empty($request->product_tag) ? $request->product_tag : "",
            'model'                      => !empty($request->model) ? $request->model : "",
            'sku'                        => !empty($request->sku) ? $request->sku : "",
            'external_link'              => !empty($request->external_link) ? $request->external_link : "",
            'cash_dev_status'            => !empty($request->cash_dev_status) ? $request->cash_dev_status : "",
            'price'                      => !empty($request->price) ? $request->price : 0,
            'unit'                       => !empty($request->unit) ? $request->unit : "",
            'stock_qty'                  => !empty($request->stock_qty) ? $request->stock_qty : "",
            'stock_mini_qty'             => !empty($request->stock_mini_qty) ? $request->stock_mini_qty : 0,
            'stock_status'               => !empty($request->stock_status) ? $request->stock_status : "",
            'manufacturer'               => !empty($request->manufacturer) ? $request->manufacturer : "",
            'manufacturer'               => !empty($request->manufacturer) ? $request->manufacturer : "",
            'download_link'              => !empty($request->download_link) ? $request->download_link : "",
            'discount'                   => !empty($request->discount) ? $request->discount : "",
            'discount_status'            => !empty($request->discount_status) ? $request->discount_status : "",
            'shipping_days'              => !empty($request->shipping_days) ? $request->shipping_days : "",
            'free_shopping'              => !empty($request->free_shopping) ? $request->free_shopping : "",
            'flat_rate_status'           => !empty($request->flat_rate_status) ? $request->flat_rate_status : "",
            'flat_rate_price'            => !empty($request->flat_rate_price) ? $request->flat_rate_price : "",
            'vat'                        => !empty($request->vat) ? $request->vat : 0,
            'vat_status'                 => !empty($request->vat_status) ? $request->vat_status : "",
            'tax'                        => !empty($request->tax) ? $request->tax : 0,
            'tax_status'                 => !empty($request->tax_status) ? $request->tax_status : "",
            'status'                     => !empty($request->status) ? $request->status : "",
            'entry_by'                   => $this->userid
        );
        if (!empty($request->file('files'))) {
            $files = $request->file('files');
            $fileName = Str::random(20);
            $ext = strtolower($files->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $files->move(public_path('/backend/files/'), $upload_url);
            $file_url = $uploadPath . $path;
            $data['thumnail_img'] = $file_url;
        }
        if (empty($request->id)) {
            //INSERT PRODUCT
            $product_id = Product::insertGetId($data);
            //INSERT MULTIPLE IMAGE
            if (!empty($request->file('images'))) {
                foreach ($request->file('images') as $file) {
                    $name = $file->getClientOriginalName();
                    $dic_name = uniqid() . $name;
                    $uploadPath = '/backend/files/';
                    $file->move(public_path() . '/backend/files/', $dic_name);
                    // $docs[] = $name;  
                    $img_data['images']       = $uploadPath . $dic_name;
                    $img_data['product_id']   = $product_id;
                    DB::table('produc_img_history')->insert($img_data);
                }
            }
            //INSERT MULTIPLE CATEGORY
            $category     = $request->category;
            $dynamicArray = explode(',', $category); // Convert the string to an array
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
                    'product_id'   => $product_id,
                    'category_id'  => $result->id,
                    'parent_id'    => implode(',', $path)
                ];
            }
            DB::table('produc_categories')->insert($formattedResults);
            $resdata['product_id'] = $product_id;
            return response()->json($resdata);
        } else {
            //update
        }
    }
    public function getProductList()
    {
        $data = Product::all();
        return response()->json($data);
    }
    public function insertProductAttrAndValues(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product_attribute_id'       => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'product_id'                 => $request->product_id,
            'attributes_id'              => $request->product_attribute_id,
        );
        $product_attribute_id = ProductAttributes::insertGetId($data);
        if (!empty($request->AttrValues)) {
            $arr_val = $request->AttrValues;
            foreach ($arr_val as $key => $v) {
                $newRecord                  = new ProductAttributeValue();
                $newRecord->product_att_value_id  = $v;
                $newRecord->attribute_id          = $request->product_attribute_id;
                $newRecord->product_attribute_id  = $product_attribute_id;
                $newRecord->product_id            = $request->product_id;
                $newRecord->save();
            }
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function getAttrHistory($id)
    {
        $product_id = (int) $id;
        $Attrdata = DB::select("SELECT product_attributes.id,product_attributes.attributes_id,attributes.name FROM product_attributes 
                 LEFT JOIN attributes ON (attributes.id=product_attributes.attributes_id) WHERE product_id = '$product_id'");
        $formatedData = [];
        $categoriesData = $Attrdata; //Category::all(); // Assuming you have a Category model and table
        foreach ($categoriesData as $val) {
            $atthistory =  DB::table('product_attributes_values_history')
                            ->leftJoin('attributes_values', 'attributes_values.id', '=', 'product_attributes_values_history.product_att_value_id')
                            ->select('attributes_values.name as attr_val_name','attributes_values.id','product_attributes_values_history.id as pro_att_val_his_id','product_attributes_values_history.product_attribute_id','product_att_value_id')
                            ->where('product_attributes_values_history.attribute_id', $val->attributes_id)
                            ->groupBy('attributes_values.name')
                            //->pluck('attr_name')
                            ->get();
            $subcategoryNames = $atthistory;
            $formatedData[] = [
                'id'             => $val->id,
                'name'           => ucfirst($val->name),
                'value_history'  => $subcategoryNames,
            ];
        }
        return response()->json(array_values($formatedData));
        //dd($categoriess);
    }
    
}
