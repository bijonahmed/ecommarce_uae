<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Categorys;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
use File;
use PhpParser\Node\Stmt\TryCatch;
use function Ramsey\Uuid\v1;

class UnauthenticatedController extends Controller
{
    protected $frontend_url;
    protected $userid;

    public function allCategory(Request $request)
    {
        $categories = Categorys::with('children.children.children.children.children')->where('parent_id', 0)->get();
        return response()->json($categories);
    }

    public function limitedProducts(){

        $data = Product::orderBy('id', 'desc')->select('id','name','thumnail_img','slug')->limit(12)->get();
        //dd($data);
        $collection = collect($data);
        $modifiedCollection = $collection->map(function ($item) {
            return [
                'id'        => $item['id'],
                'name'      => substr($item['name'], 0, 20),
                'thumnail'  => !empty($item->thumnail_img) ? url($item->thumnail_img) : "",
                'slug'        => $item['slug'],
            ];
        });
        //dd($modifiedCollection);
        return response()->json($modifiedCollection, 200);


    }

    public function topSellProducts(){
        $data = Product::orderBy('id', 'desc')->select('id','name','thumnail_img','slug')->limit(12)->get();
        foreach($data as $v){
            $result[] = [
                'id'   => $v->id,  
                'name' => substr($v->name, 0, 12), 
                'thumnail'  => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'     => $v->slug,
            ];
        }

       // dd($result);
        return response()->json($result, 200);

    }
    

    public function filterCategory(Request $request)
    {
        $categories = Categorys::where('status', 1)->orderBy("name", "asc")->get();;
        //dd($categories);
        return response()->json($categories);
    }

    public function findCategorys($slug)
    {

        $chkCategory   = Categorys::where('slug', $slug)->select('id','name')->first();
        $proCategorys  = ProductCategory::where('category_id', $chkCategory->id)
            ->select('product.discount','produc_categories.product_id', 'product.name as pro_name', 'produc_categories.category_id','description','price','thumnail_img','product.slug as pro_slug')
            ->join('product', 'product.id', '=', 'produc_categories.product_id')->get();

        
        $result=[];
        foreach ($proCategorys as $key => $v) {
            $result[] = [
                'product_id'   => $v->product_id,  
                'product_name' => $v->pro_name, 
                'category_id'  => $v->category_id,
                'discount'     => $v->discount,
                'price'        => number_format($v->price,2),
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->pro_slug,
                
            ];
        }

        $data['result']        = $result;
        $data['pro_count']     = count($result);
        $data['categoryname']  = $chkCategory->name;
        return response()->json($data, 200);
    }
}
