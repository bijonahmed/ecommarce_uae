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

class Variant extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "variants";
  
  protected $fillable = [
    'product_id',
    'name',
  ];
 
  public function subattribute()
    {
        return $this->hasMany(SubAttribute::class,'attributes_id');
    }


}
