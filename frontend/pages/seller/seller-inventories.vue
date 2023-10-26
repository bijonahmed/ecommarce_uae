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
                                <li class="active">
                                    <Nuxt-link to="/seller/seller-inventories">Inventories </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/seller/seller-inventory-post">Add Inventory </Nuxt-link>
                                </li>
                                <li class="">
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
                        <h4>Product Management</h4>
                        <div class="returns_alert">
                            <div class="alert alert-primary"> <i class="fa-solid fa-exclamation"></i>Since we have upgraded the product management, For a better experience, the older operation of file uploading on the current page would be offline in a few days. You can experience the new one in the menu 'Products / Bulk Add/Edit Products'
                                Your products are not yet visible to buyers. Please add address to make them visible</div>
                        </div>
                        <ul>
                            <li>
                                <button type="button " class="active">All</button>
                            </li>
                            <li>
                                <button type="button">Online(999)</button>
                            </li>
                            <li>
                                <button type="button">Draft(999)</button>
                            </li>
                            <li>
                                <button type="button">Pending QC(999)</button>
                            </li>
                            <li>
                                <button type="button">Out Of stock(999)</button>
                            </li>
                            <li>
                                <button type="button">Inactive(999)</button>
                            </li>
                            <li>
                                <button type="button">Suspendes(999)</button>
                            </li>
                            <li>
                                <button type="button">Deleted(999)</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Nuxt-link to="/seller/seller-inventory-post" class="btn_download mb-2">Add New </Nuxt-link>
                    </div>
                    <div class="top_search_box">
                        <form action="">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <select name="" id="">
                                        <option value="" selected disabled>Select Category</option>
                                        <option value="">Category list</option>
                                        <option value="">Category list</option>
                                        <option value="">Category list</option>
                                        <option value="">Category list</option>
                                    </select>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Product Id ">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Product Name ">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Seller SKU ">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Seller SKU">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Shop SKU ">
                                </div>

                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <button type="submit" class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;">Search </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="main_profile">
                        <div class="user_details order_details_table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Local Time </th>
                                        <th>PRoduct/SKU </th>
                                        <th>Variation</th>
                                        <th>Status</th>
                                        <th>Price </th>
                                        <th>Stock</th>
                                        <th>Created</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table_product">
                                            <div>
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                            </div>
                                            <div>
                                                <a href="/product-details.html">
                                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo et amet perferendis mollitia excepturi similique numquam, possimus sit nesciunt repellat perspiciatis. Alias sunt iure nisi debitis adipisci molestias quod?</h6>
                                                </a>
                                            </div>
                                        </td>
                                        <td>12:32</td>
                                        <td>BD-199</td>
                                        <td>None</td>
                                        <td>Active</td>
                                        <td>199TK</td>
                                        <td>In stock </td>
                                        <td>Jhone Due</td>
                                    </tr>
                                    <tr>
                                        <td class="table_product">
                                            <div>
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                            </div>
                                            <div>
                                                <a href="/product-details.html">
                                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo et amet perferendis mollitia excepturi similique numquam, possimus sit nesciunt repellat perspiciatis. Alias sunt iure nisi debitis adipisci molestias quod?</h6>
                                                </a>
                                            </div>
                                        </td>
                                        <td>12:32</td>
                                        <td>BD-199</td>
                                        <td>None</td>
                                        <td>Active</td>
                                        <td>199TK</td>
                                        <td><span style="display: block; color: red;">Out of stock</span></td>
                                        <td>Jhone Due</td>
                                    </tr>
                                    <tr>
                                        <td class="table_product">
                                            <div>
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                            </div>
                                            <div>
                                                <a href="/product-details.html">
                                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo et amet perferendis mollitia excepturi similique numquam, possimus sit nesciunt repellat perspiciatis. Alias sunt iure nisi debitis adipisci molestias quod?</h6>
                                                </a>
                                            </div>
                                        </td>
                                        <td>12:32</td>
                                        <td>BD-199</td>
                                        <td>None</td>
                                        <td>Active</td>
                                        <td>199TK</td>
                                        <td>In stock </td>
                                        <td>Jhone Due</td>
                                    </tr>
                                    <tr>
                                        <td class="table_product">
                                            <div>
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                            </div>
                                            <div>
                                                <a href="/product-details.html">
                                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo et amet perferendis mollitia excepturi similique numquam, possimus sit nesciunt repellat perspiciatis. Alias sunt iure nisi debitis adipisci molestias quod?</h6>
                                                </a>
                                            </div>
                                        </td>
                                        <td>12:32</td>
                                        <td>BD-199</td>
                                        <td>None</td>
                                        <td>Active</td>
                                        <td>199TK</td>
                                        <td><span style="display: block; color: red;">Out of stock</span></td>
                                        <td>Jhone Due</td>
                                    </tr>
                                    <tr>
                                        <td class="table_product">
                                            <div>
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                            </div>
                                            <div>
                                                <a href="/product-details.html">
                                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo et amet perferendis mollitia excepturi similique numquam, possimus sit nesciunt repellat perspiciatis. Alias sunt iure nisi debitis adipisci molestias quod?</h6>
                                                </a>
                                            </div>
                                        </td>
                                        <td>12:32</td>
                                        <td>BD-199</td>
                                        <td>None</td>
                                        <td>Active</td>
                                        <td>199TK</td>
                                        <td>In stock </td>
                                        <td>Jhone Due</td>
                                    </tr>
                                    <tr>
                                        <td class="table_product">
                                            <div>
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                            </div>
                                            <div>
                                                <a href="/product-details.html">
                                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo et amet perferendis mollitia excepturi similique numquam, possimus sit nesciunt repellat perspiciatis. Alias sunt iure nisi debitis adipisci molestias quod?</h6>
                                                </a>
                                            </div>
                                        </td>
                                        <td>12:32</td>
                                        <td>BD-199</td>
                                        <td>None</td>
                                        <td>Active</td>
                                        <td>199TK</td>
                                        <td><span style="display: block; color: red;">Out of stock</span></td>
                                        <td>Jhone Due</td>
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
        title: 'Seller Inventories',
    },

}
</script>
