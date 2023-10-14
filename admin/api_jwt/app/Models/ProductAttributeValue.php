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

class ProductAttributeValue extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "product_attributes_values_history";
  
  protected $fillable = [
    'product_id',
    'attribute_id',
    'product_attribute_id',
    'product_att_value_id',
  ];
 
  public function subattribute()
    {
        return $this->hasMany(SubAttribute::class,'attributes_id');
    }


}
