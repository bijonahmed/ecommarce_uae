<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\AttributeValues;
use AuthorizesRequests;
use DB;
use function Ramsey\Uuid\v1;
class ProductVarrientHistory extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "product_variants_history";
  protected $fillable = [
    'product_id',
    'pro_varient_id',
    'varient_name',
    'pro_attr_val_his_id',
  ];
  public function subattribute()
  {
    return $this->hasMany(SubAttribute::class, 'attributes_id');
  }
  public static function getProductVarientHistory($product_id)
  {
    $returnData = DB::select("SELECT product_variants_history.pro_varient_id,product_variants.file,product_variants_history.id, product_variants.sku, product_variants.qty, product_variants.price,product_variants_history.product_id,product_variants_history.id, product_variants_history.pro_varient_id,
                  GROUP_CONCAT(COALESCE(product_variants_history.varient_name,'') SEPARATOR '=>') as varient_name 
                  FROM `product_variants_history` 
                  LEFT JOIN product_variants ON (product_variants.id=product_variants_history.pro_varient_id)
                  where product_variants_history.product_id=$product_id 
                  group by product_variants_history.pro_varient_id");
    return $returnData;
  }
}
