<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
//use Darryldecode\Cart\Cart;
use Illuminate\Support\Facades\Session;
use App\Models\Order;
use App\Models\OrderHistory;
use App\Models\WishList;
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

    function addtowish($slug)
    {
        $findproduct = Product::where('slug', $slug)->select('id')->first();
        $row                  = new WishList();
        $row->customer_id     = $this->userid;
        $row->product_id      = $findproduct->id;
        $row->save();
        return response()->json("Item successfully added to your wishlist!", 200);
    }

    function allWishList()
    {
        $rows = WishList::join('product', 'product.id', '=', 'wishlist.id')->select('wishlist.id as wishid','product.thumnail_img', 'product.slug', 'product.name', 'price', 'product.id')->get();
        $products = [];
        foreach ($rows as $key => $v) {
            $products[] = [
                'id'           => $v->id,
                'product_name' => $v->name,
                'wishid'       => $v->wishid,
                'price'        => number_format($v->price, 2),
                'thumnail_img' => url($v->thumnail_img),
                'slug'         => $v->slug,

            ];
        }     

        return response()->json($products, 200);
    }


    function removeWishList($id){
        
        $wishlistItem = WishList::find($id);
        if (!$wishlistItem) {
            return response()->json(['error' => 'WishList item not found'], 404);
        }
        $wishlistItem->delete();
        return response()->json(['message' => 'WishList item deleted successfully']);
    }


    function generateUniqueRandomNumber($length = 5)
    {
        do {
            $randomNumber = mt_rand(pow(10, $length - 1), pow(10, $length) - 1);
        } while (Order::where('id', $randomNumber)->exists());

        return $randomNumber;
    }

    public function getOrder()
    {

        $data['orders']  = Order::where('customer_id', $this->userid)->where('order_status', 1)->limit(2)->get();
        foreach ($data['orders'] as $v) {
            $orders[] = [
                'orderId'      => $v->orderId,
                'placeOn'      => date_format(date_create($v->created_at), "Y-m-d"),
                'total'        => number_format($v->total, 2),
            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }

    public function orderDetails($order_id)
    {

        $findorder       =  Order::join('order_status', 'order_status.id', '=', 'orders.order_status')->select('orders.*', 'order_status.name as orderstatus')->where('customer_id', $this->userid)->where('orderId', $order_id)->first();
        $data['orders']  = OrderHistory::join('product', 'product.id', '=', 'order_history.product_id')
            ->select('product.name as product_name', 'order_history.*')
            ->where('order_id', $findorder->id)->get();
        foreach ($data['orders'] as $v) {
            $orders[] = [
                'product_name'    => $v->product_name,
                'quantity'        =>  $v->quantity,
                'price'           =>  $v->price,
                'total'           => $v->quantity * $v->price,
            ];
        }

        $order['orderdata']     = $orders;
        $order['orderrow']      = !empty($findorder->orderstatus) ? $findorder->orderstatus : "";
        return response()->json($order, 200);
    }
    public function allOrders()
    {

        $data['orders']  = Order::join('order_status', 'orders.order_status', '=', 'order_status.id')
            ->select('orders.*', 'order_status.name')
            ->where('orders.customer_id', $this->userid)
            ->get(); //Order::where('customer_id', $this->userid)->get();
        foreach ($data['orders'] as $v) {
            $orders[] = [
                'name'         => $v->name,
                'orderId'      => $v->orderId,
                'placeOn'      => date_format(date_create($v->created_at), "Y-m-d"),
                'total'        => number_format($v->total, 2),
            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }

    public function submitOrder(Request $request)
    {

        $randomNum = $this->userid . $this->generateUniqueRandomNumber() . "-" . date("y");

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
        $order->subtotal         = $total;
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
            $order_history->order_status    = 1; // Order Placed 
            $order_history->save();
        }
        return response()->json("Your order successfully done!", 200);
    }
}
