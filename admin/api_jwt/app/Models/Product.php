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
        'slug',
        'description',
        'meta_title',
        'meta_description',
        'meta_keyword',
        'product_tag',
        'model',
        'sku',
        'external_link',
        'cash_dev_status',
        'price',
        'unit',
        'stock_qty',
        'stock_mini_qty',
        'stock_status',
        'manufacturer',
        'download_link',
        'discount',
        'discount_status',
        'shipping_days',
        'free_shopping',
        'flat_rate_status',
        'flat_rate_price',
        'vat',
        'vat_status',
        'tax',
        'tax_status',
        'thumnail_img',
        'images',
        'status'
    ];

 
}
