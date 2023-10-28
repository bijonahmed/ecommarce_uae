<template>
<div>
    <footer>
        <!-- mobile footer  -->
        <div class="mobile_view">
            <div class="f_posi">
                <div class="" style="height: 20px;"></div>
                <div class="m_footer ">
                    <div class="f_option ">
                        <ul>
                            <li>
                                <Nuxt-link to="/category/all-categorys">
                                    <div class="circle"></div>
                                    <i class="fa-solid fa-table-cells-large"></i>
                                    <p>Category</p>
                                </Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/user/user-whichlist">
                                    <div class="circle"></div>
                                    <i class="fa-solid fa-heart"></i>
                                    <p>Wishlist</p>
                                </Nuxt-link>
                            </li>
                            <li class="active">
                                <Nuxt-link to="/">
                                    <div class="circle"></div>
                                    <i class="fa-solid fa-house"></i>
                                    <p>Home</p>
                                </Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/cart">
                                    <div class="circle"></div>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <p>Cart</p>
                                </Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/user/user-profile">
                                    <div class="circle"></div>
                                    <i class="fa-solid fa-user"></i>
                                    <p>User</p>
                                </Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile footer end  -->
        <!-- footer top  -->
        <div class="footer_top desktop_view">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12 m-auto">
                        <div class="logo">
                            <a href="#" class="text-white">Ecommerce <i class=" fa-regular fa-star"></i></a>
                        </div>
                    </div>
                    <div class="ccol-lg-4 col-md-4 col-sm-12 m-auto">
                        <div class="newsletter">
                            <h3>New to Ecommerce</h3>
                            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                            <div class="d-flex " style="position: relative;">
                                <i class="fas fa-envelope "></i>
                                <input type="text" class="form-control" placeholder="Enter email address" name="" id="">
                                <button type="button">Send</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 m-auto">
                        <div class="store_app">
                            <div class="d-flex">
                                <div>
                                    <i class="fa-regular fa-star "></i>
                                </div>
                                <div>
                                    <h5>DOWNLOAD ECOMMERCE FREE APP</h5>
                                    <p>Get access to exclusive offers!</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <!-- App Store button -->
                                <a href="#" target="_blank" class="market-btn a" role="button">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <img src="/images/apple-logo.svg" alt="">
                                        </div>
                                        <div>
                                            <span class="market-button-subtitle">Download on the</span>
                                            <span class="market-button-title">Google Play</span>
                                        </div>
                                    </div>
                                </a>
                                <!-- Google Play button -->
                                <a href="#" target="_blank" class="market-btn " role="button">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <img src="/images/google-play-store.svg" alt="">
                                        </div>
                                        <div>
                                            <span class="market-button-subtitle">Download on the</span>
                                            <span class="market-button-title">Google Play</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer links  -->
        <div class="footer_links desktop_view">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-6">
                        <h6>Pages</h6>
                        <ul>
                            <li>
                                <Nuxt-link to="/">Home</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/category/all-categorys">All Category</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/category/category-list">Category List</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/product-list">Product List</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/cart">Cart</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/checkout">CheckOut</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/payment">Payment</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-6">
                        <h6>Login and service </h6>
                        <ul>
                            <li>
                                <Nuxt-link to="/login">Login & Signup </Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/seller_form">Seller Register </Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/forget-password">Forget Password</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/changepassword">Change Password</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/update-password">Update Password</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/service">Service</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/flas-sale">Flash Sale</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/official-store">Offical Store</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/customer-review">Customer Review</Nuxt-link>
                            </li>

                        </ul>
                    </div>
                    <div class="col-md-3 col-6">
                        <h6>User Profile </h6>
                        <ul>
                            <li>
                                <Nuxt-link to="/user/user-profile">User Profile</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/user/user-orders">User Orders</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/user/user-whichlist">User Wishlist</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/user/user-review">User Reviews</Nuxt-link>
                            </li>
                        </ul>
                        <h6>Policy </h6>
                        <ul>
                            <li>
                                <Nuxt-link to="/refund">Refund</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/return-and-replacement">Return and Replacement</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-6">
                        <h6>Seller Dashboard</h6>
                        <ul>
                            <li>
                                <Nuxt-link to="/seller/seller-inventories">Seller Inventories</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/seller/seller-inventory-post">Add Inventories</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/Seller/seller-orders">Seller Orders</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/seller/seller-customer-returns">Customer Returns</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/seller/seller-profile">Seller Profile</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/seller/seller-account-setting">Account Settings</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/seller/seller-wallet">Wallet</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/seller/seller-message">Seller Massage</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-6">
                        <h6>Make Money With Us </h6>
                        <ul>
                            <li>
                                <Nuxt-link to="/sell-on-ecommerce">Sell On Ecommerce</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/affiliate/affiliate-programe">Affiliate Programme</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/affiliate/affiliate-programe-register">Affiliate Programme Register</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/affiliate/affiliate-dashboard">Affiliate Dashboard</Nuxt-link>
                            </li>
                            <li>
                                <Nuxt-link to="/affiliate/affiliate-transfer">Transfer Affiliate Money</Nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- social links  -->
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-12">
                        <div class="social_links">
                            <h6>Join us on </h6>
                            <ul>
                                <li>
                                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-12">
                        <div class="social_links">
                            <h6>Payment Method & Delivery partners </h6>
                            <ul>
                                <li>
                                    <a href="#"><i class="fa-brands fa-cc-mastercard"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-cc-visa"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-stripe"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-dhl"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-cc-discover"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" container ">
                <div class="btm_links bg-transparent">
                    <div class="row">
                        <div class="col-9 m-auto text-center">
                            <div class="payment_part">
                                <a href="#" class="a_link active">Ecommerce</a>
                                <a href="#" class="a_link">PaymentOption</a>
                                <a href="#" class="a_link">PaymentOption</a>
                                <a href="#" class="a_link">PaymentOption</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer others web links  -->
    </footer>
</div>
</template>
