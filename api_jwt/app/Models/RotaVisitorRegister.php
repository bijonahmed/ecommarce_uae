<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class RotaVisitorRegister extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "visitor_register";
    protected $fillable = [
        'name',
        'designation',
        'email_id',
        'contact_no',
        'address',
        'date',
        'time',
        'reference',
    ];
}
