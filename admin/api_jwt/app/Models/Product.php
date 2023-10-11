<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class Product extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "product";
    protected $fillable = [
        'name',
        'status',
        'entry_by',
        'status',
    ];
    public static function filterList()
    {
        return DB::table('organogram_level')->get();
    }

 
    public static function editId($id)
    {
        return DB::table('organogram_level')->where('id', $id)->first();
    }


  public static function hierarchyRoweditId($id)
    {
        return DB::table('organogram_hierarchy')->where('id', $id)->first();
    }
    
 
}
