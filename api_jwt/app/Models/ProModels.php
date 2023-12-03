<?php
namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;
class ProModels extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "models";
    protected $fillable = [
        'name',
        'slug',
        'status',
    ];
}
