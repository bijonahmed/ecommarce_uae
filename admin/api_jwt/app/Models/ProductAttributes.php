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
    'product_id',
  ];
 
  public function subattribute()
    {
        return $this->hasMany(SubAttribute::class,'attributes_id');
    }


}
