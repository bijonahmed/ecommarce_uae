<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class AttributeValues extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "attributes_values";
  protected $fillable = [
    'attributes_id',
    'name',
    'status',
    
  ];

  public function attribute()
  {
      return $this->belongsTo(Attribute::class);
  }
   
 
}
