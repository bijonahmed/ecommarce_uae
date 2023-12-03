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

class ProductAttributes extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "product_attributes";

  protected $fillable = [
    'attributes_id',
    'attr_status',
    'product_id',
  ];

  public function subattribute()
  {
    return $this->hasMany(SubAttribute::class, 'attributes_id');
  }

  public static function checkingAttrube($product_id)
  {

    $return = DB::select("SELECT product_attributes.id,product_attributes.attributes_id,attributes.name FROM product_attributes 
                LEFT JOIN attributes ON (attributes.id=product_attributes.attributes_id) WHERE product_id = '$product_id'");
    return $return;
  }

  public static function attribueHistory($attributes_id)
  {

    $return = DB::table('product_attributes_values_history')
      ->leftJoin('attributes_values', 'attributes_values.id', '=', 'product_attributes_values_history.product_att_value_id')
      ->select('attributes_values.name as attr_val_name', 'attributes_values.id', 'product_attributes_values_history.id as pro_att_val_his_id', 'product_attributes_values_history.product_attribute_id', 'product_att_value_id')
      ->where('product_attributes_values_history.attribute_id', $attributes_id)
      ->groupBy('attributes_values.name')
      ->get();
    return $return;
  }
}
