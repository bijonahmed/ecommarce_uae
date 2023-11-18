<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
//use Darryldecode\Cart\Cart;
use Illuminate\Support\Facades\Session;
use App\Models\Order;
use App\Models\OrderHistory;
use App\Models\User;

class OrderController extends Controller
{

    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }
    function generateUniqueRandomNumber($length = 5) {
        do {
            $randomNumber = mt_rand(pow(10, $length - 1), pow(10, $length) - 1);
        } while (Order::where('id', $randomNumber)->exists());
    
        return $randomNumber;
    }
    public function submitOrder(Request $request)
    {
        
        $randomNum = $this->userid.$this->generateUniqueRandomNumber()."-".date("y");
       
        $cartData = $request->input('cart');
        // dd($cartData);
        $total = 0;
        foreach ($cartData as $cartItem) {
            $productid = $cartItem['product']['id'];
            $quantity  = $cartItem['quantity'];
            $price     = str_replace(',', '', $cartItem['product']['price']); // Remove commas
            $price     = floatval($price); // Convert to float

            if (!is_numeric($quantity) || !is_numeric($price)) {
                echo "Invalid quantity or price for Product ID: {$productid}<br/>";
                continue;  // Skip the current iteration and move to the next item
            }
            // Calculate the subtotal for the current item
            $subtotal = $quantity * $price;
            // Add the subtotal to the total
            $total += $subtotal;
            echo "Product ID: {$productid} - Quantity: {$quantity} - Price: {$price} - Subtotal: {$subtotal} - Total: {$total}<br/>";
        }

        $order                  = new Order();
        $order->orderId         = $randomNum;
        $order->total           = $total;
        $order->customer_id     = $this->userid;
        $order->save();
        // Get the last inserted order ID
        $lastOrderId = $order->id;
        // Update orderId with the last inserted order ID

        $itemtotal = 0;
        foreach ($cartData as $cartItem) {
            $productid = $cartItem['product']['id'];
            $quantity  = $cartItem['quantity'];
            $price     = str_replace(',', '', $cartItem['product']['price']); // Remove commas
            $price     = floatval($price); // Convert to float

            $subtotal = $quantity * $price;
            // Add the subtotal to the total
            $itemtotal += $subtotal;
            $order_history                  = new OrderHistory();
            $order_history->order_id        = $lastOrderId;
            $order_history->product_id      = $productid;
            $order_history->quantity        = $quantity;
            $order_history->price           = $price;
            $order_history->total           = $itemtotal;
            $order_history->save();
        }
        return response()->json("Your order successfully done!", 200);
    }
}
