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
                                <li>
                                    <Nuxt-link to="/seller/seller-inventory-post">Add Inventory </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/seller/seller-orders">Orders </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/seller/seller-customer-returns">Customer Returns</Nuxt-link>
                                </li>
                                <li class="active">
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
                    <div class="key_summary mt-3">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="count_box">
                                    <h5>Withdrawal Ammount <i class="fa-solid fa-circle-exclamation"></i></h5>
                                    <h4>0 <span style="font-size: 12px;">TK</span></h4>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="count_box">
                                    <h5>Ammount Under Review <i class="fa-solid fa-circle-exclamation"></i></h5>
                                    <h4>0 <span style="font-size: 12px;">TK</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="top_search_box">
                        <form action="">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Search date" onfocus="(this.type='date')">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Transsection Number">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Order Number">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <button type="submit" class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;">Search </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="main_profile">
                        <div class="user_details">
                            <div class="d-flex align-items-center justify-content-between">
                                <h4>Transection History</h4>
                                <!-- <button type="button" class="btn_edit"><i class="fa-solid fa-pen"></i></button> -->
                            </div>
                            <table class="table" id="MyTableID">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Transection type</th>
                                        <th>Transection Number</th>
                                        <th>Order Number</th>
                                        <th>Details comment</th>
                                        <th>Ammount</th>
                                        <th>VAT</th>
                                        <th>WHT</th>
                                        <th>Statement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                    <tr>
                                        <td>19-08-2023</td>
                                        <td>Online</td>
                                        <td> 343489343</td>
                                        <td> #87483743</td>
                                        <td>Comment </td>
                                        <td> 100.00 TK </td>
                                        <td> 00.00 </td>
                                        <td> None</td>
                                        <td>None </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- pagination  -->
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
        title: 'Seller Wallet',
    },

}
</script>
