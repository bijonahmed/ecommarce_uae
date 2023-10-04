<?php
//Custom function 
use App\LogActivity as LogActivityModel;
class Helper
{
	public static function sprint($format, $data = array())
	{
		foreach ($data as $k => $v) {
			if (!is_array($v)) {
				$format = str_replace('{' . $k . '}', $v, $format);
			}
		}
		return $format;
	}
	//$currency->gbp_id,$currency->usd_id,$currency->ngn_id,$currency->bdt_id,$i->currencyid,$i->USD,$i->GBP,$i->BDT,$i->NGN
	public static function currencyCondition($currencyid, $usd_price, $gbp_price, $bdt_price, $ngn_price)
	{
		if ($currencyid == 2) {
			$price = $gbp_price;
		} elseif ($currencyid == 1) {
			$price = $usd_price;
		} elseif ($currencyid == 4) {
			$price = $ngn_price;
		} elseif ($currencyid = 3) {
			$price = $bdt_price;
		} else {
			$price = $gbp_price;
		}
		return $price;
	}
	public static function currencyDiscount($currencyid, $usd_discount_price, $gbp_discount_price, $bdt_discount_price, $ngn_discount_price)
	{
		if ($currencyid == 1) {
			return $discountPrice = $usd_discount_price;
		} elseif ($currencyid == 2) {
			return $discountPrice = $gbp_discount_price;
		} elseif ($currencyid == 3) {
			return $discountPrice = $bdt_discount_price;
		} elseif ($currencyid == 4) {
			return $discountPrice = $ngn_discount_price;
		} else {
			return $discountPrice = $gbp_discount_price;
		}
	}
	public static function currencySymbolStatic($currencyid)
	{
		if ($currencyid == 1) {
			return $symbol = "$";
		} elseif ($currencyid == 2) {
			return $symbol = "£";
		} elseif ($currencyid == 3) {
			return $symbol = "৳";
		} elseif ($currencyid == 4) {
			return $symbol = "₦";
		} else {
			return $symbol = "£";
		}
	}
	 
    public static function addToLog($subject,$user_id,$data)
    {
    	$log = [];
    	$log['subject'] 		= $subject;
		$log['user_id'] 		= $user_id;
		$log['request_data'] 	= $data;
    	$log['url'] 			= Request::path();
    	$log['method'] 			= Request::method();
    	$log['ip'] 				= Request::ip();
    	$log['agent'] 			= Request::header('user-agent');
    	LogActivityModel::create($log);
    }
	
 
    public static function logActivityLists()
    {
    	return LogActivityModel::latest()->get();
    }
}
