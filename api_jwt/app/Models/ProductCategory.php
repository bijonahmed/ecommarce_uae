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

class ProductCategory extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "produc_categories";

  protected $fillable = [
    'product_id',
    'category_id',
    'parent_id',
  ];
 
}
