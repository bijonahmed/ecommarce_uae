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

class ProductVarrient extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "product_variants";
  
  protected $fillable = [
    'product_id',
    'pro_attr_val_his_id',
    'sku',
    'qty',
    'price',
    'file',
  ];
 
  public function subattribute()
    {
        return $this->hasMany(SubAttribute::class,'attributes_id');
    }
    
}
