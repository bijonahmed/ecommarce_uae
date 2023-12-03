<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
//use Darryldecode\Cart\Cart;
use Illuminate\Support\Facades\Session;
use Cart;

class CartController extends Controller
{
    public function index()
    {

        Cart::add(459, 'Sample Item-5', 100.99, 2, array());
        $cartItems = \Cart::getContent();
        return response()->json(['cartItems' => $cartItems]);
        //return response()->json($cartItems, 200);
        dd($cartItems);
        // return view('cart.index', compact('cartItems'));
    }

    public function getCartData()
    {
        $cartContent = \Cart::getContent();
        dd($cartContent);
        return response()->json(['cartItems' => $cartContent]);
        
    }

    public function addToCart(Request $request)
    {

        $productId =  $request->product_id;
        $product   = Product::find($productId);

        \Cart::add($productId, $product->name, $product->price, 1);
        $cartContent = \Cart::getContent()->toArray();
        return response()->json(['cartItems' => $cartContent]);
        exit; 
        //return response()->json(['message' => 'Item added to cart']);

        exit;
        //Cart::add(464, 'Sample Item-4', 100.99, 2, array());
        \Cart::add([
            'id' => 1,
            'name' => 'Product Name',
            'price' => 19.99,
            'quantity' => 1,
        ]);

        $cartCollection = \Cart::getContent();
        dd($cartCollection);
        //dd($request->all());
        //add to cart
        $productId = $request->product_id;
        $product   = Product::find($productId);
        Cart::add($product->id, $product->name, $product->price, 2, array());
        // Cart::add([
        //     'id'       => $product->id,
        //     'name'     => $product->name,
        //     'price'    => $product->price,
        //     'quantity'      => 1
        // ]);
        return response()->json('Item has been add to your cart!', 200);

        //return redirect()->route('cart.index')->with('success_message', 'Item was added to your cart!');
    }

    public function removeFromCart($rowId)
    {
        Cart::remove($rowId);
        return redirect()->route('cart.index')->with('success_message', 'Item has been removed from your cart!');
    }

    public function updateCart($rowId)
    {
        Cart::update($rowId, request()->quantity);
        return redirect()->route('cart.index')->with('success_message', 'Cart has been updated!');
    }

    public function clearCart()
    {
        Cart::destroy();
        return response()->json("Your cart has been cleared!", 200);
        //return redirect()->route('cart.index')->with('success_message', 'Your cart has been cleared!');
    }
}
