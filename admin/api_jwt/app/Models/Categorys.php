<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class Categorys extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "categorys";
  protected $fillable = [
    'name',
    'slug',
    'description',
    'meta_title',
    'meta_description',
    'meta_keyword',
    'parent_id',
    'file',
    'keyword',
    'sort_order',
    'status',
  ];

  public function categories()
  {
    return $this->hasMany(Categorys::class);
  }

  public function children()
  {
      return $this->hasMany(Categorys::class, 'parent_id');
  }

  public function parent()
  {
      return $this->belongsTo(Categorys::class, 'parent_id');
  }

  // public function children()
  // {
  //   return $this->hasMany('App\Models\Categorys', 'parent_id');
  // }

  // public function parent()
  // {
  //   return $this->belongsTo('App\Models\Categorys', 'parent_id');
  // }
 
}
