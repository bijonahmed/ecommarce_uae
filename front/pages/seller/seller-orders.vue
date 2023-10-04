<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <section class="search_bar">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-3 col-md-4 col-4">
                    <div class="logo nav_tab">
                        <!-- mobile view sidebar  -->
                        <button type="button" class="btn_menu mobile_view" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="fa-solid fa-bars-staggered"></i></button>
                        <!-- sidebar offcanvas  -->
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Ecommerce</h5>
                            </div>
                            <div class="offcanvas-body">
                                <!-- offf canvas start here  -->
                                <Common_MobileSidebar />
                            </div>
                        </div>
                        <!-- mini tab view navbar here  -->
                        <Common_MiniTabNavbar />
                        <!-- nav end  -->
                        <Nuxt-link to="/">Ecommerce <i class=" fa-regular fa-star"></i></Nuxt-link>
                    </div>
                </div>
                <div class="col-6 desktop_view mini_tab_hide">
                    <form action="" class="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" name="" id="" placeholder="Search Product" class="form-control"> <button type="button">Search</button>
                    </form>
                </div>
                <!-- desktop_view options  -->
                <DesktopViewOption />
                <!-- mobile view options  -->
                <div class="col-4 ms-auto  mobile_view">
                    <div class="mobile_nav_option">
                        <a class="search_form"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </div>
                <!-- search modal  -->
                <Common_MobileSearchProduct />
            </div>
        </div>
    </section>
    <!-- Main section start here  -->

    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="user_sidebar">
                        <div class="user_page_title">
                            <h3><Nuxt-link to="/seller/seller-wallet"><i class="fa-regular fa-star"></i>Wallet</Nuxt-link></h3>
                        </div>
                        <div class="user_page_list">
                            <ul>
                                <li>
                                    <Nuxt-link to="/seller/seller-inventories">Inventories </Nuxt-link>
                                </li>
                                <li >
                                    <Nuxt-link to="/seller/seller-inventory-post">Add Inventory </Nuxt-link>
                                </li>
                                <li class="active">
                                    <Nuxt-link to="/seller/seller-orders">Orders </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/seller/seller-customer-returns">Customer Returns</Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/seller/seller-wallet">Wallet</Nuxt-link>
                                </li>
                                <li>
                                    <Nuxt-link to="/seller/seller-profile">Profile information</Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/seller/seller-account-setting">Account Settings</Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/seller/seller-message">Massages</Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/login">LogOut </Nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="col-md-8">

                    <div class="top_filter">
                        <h4>Orders Overviews</h4>
                        <ul>
                            <li>
                                <button type="button " class="active">All</button>
                            </li>
                            <li>
                                <button type="button">Pending</button>
                            </li>
                            <li>
                                <button type="button">Ready To shiped</button>
                            </li>
                            <li>
                                <button type="button">Shiped</button>
                            </li>
                            <li>
                                <button type="button">Deliverd</button>
                            </li>
                            <li>
                                <button type="button">Cancel</button>
                            </li>
                            <li>
                                <button type="button">Return</button>
                            </li>
                            <li>
                                <button type="button">Failed To Delivery</button>
                            </li>
                            <li>
                                <button type="button">Refund Only</button>
                            </li>
                        </ul>
                    </div>
                    <div class="top_search_box">
                        <form action="">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Order Number">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Customer">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Product">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <select name="" id="">
                                        <option value="">Product Tag</option>
                                        <option value="">Global Collection</option>
                                    </select>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Seller SKU">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Payment">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Fullfilment">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Delivery Option">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Start date" onfocus="(this.type='date')">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="End date" onfocus="(this.type='date')">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <button type="submit" class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;">Search </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="main_profile">
                        <div class="user_details order_details_table">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <h4>Orders list </h4>

                            </div>

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Document</th>
                                        <th>Order No.</th>
                                        <th>Order date</th>
                                        <th>Update date</th>
                                        <th>Payment method</th>
                                        <th>Retail Price</th>
                                        <th>Status</th>
                                        <th>Printed</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#994433</td>
                                        <td>#1232</td>
                                        <td>19-8-23</td>
                                        <td>19-8-23</td>
                                        <td>Bkash</td>
                                        <td>199TK</td>
                                        <td>Pending</td>
                                        <td>Printed</td>
                                        <td><a href="seller-manage-order.html" class="btn_edit"><i class="fa-solid fa-pen"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>#994433</td>
                                        <td>#1232</td>
                                        <td>19-8-23</td>
                                        <td>19-8-23</td>
                                        <td>Bkash</td>
                                        <td>199TK</td>
                                        <td>Pending</td>
                                        <td>Printed</td>
                                        <td><a href="seller-manage-order.html" class="btn_edit"><i class="fa-solid fa-pen"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>#994433</td>
                                        <td>#1232</td>
                                        <td>19-8-23</td>
                                        <td>19-8-23</td>
                                        <td>Bkash</td>
                                        <td>199TK</td>
                                        <td>Pending</td>
                                        <td>Printed</td>
                                        <td><a href="seller-manage-order.html" class="btn_edit"><i class="fa-solid fa-pen"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>#994433</td>
                                        <td>#1232</td>
                                        <td>19-8-23</td>
                                        <td>19-8-23</td>
                                        <td>Bkash</td>
                                        <td>199TK</td>
                                        <td>Pending</td>
                                        <td>Printed</td>
                                        <td><a href="seller-manage-order.html" class="btn_edit"><i class="fa-solid fa-pen"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- pagination -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="pagination">
                                        <ul>
                                            <li>
                                                <a href="#"> prv </a>
                                            </li>
                                            <li>
                                                <a href="#" class="active"> 1 </a>
                                            </li>
                                            <li>
                                                <a href="#"> 2 </a>
                                            </li>
                                            <li>
                                                <a href="#"> 3 </a>
                                            </li>
                                            <li>
                                                <a href="#"> next </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- END Main Section here -->
    <!-- back to top button  -->
    <div class="back_top">
        <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>
    <Footer />
</div>
</template>

    
<script>
import $ from 'jquery';
export default {

    head: {
        title: 'Seller Orders',
    },

}
</script>
