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
                                <li>
                                    <Nuxt-link to="/seller/seller-wallet">Wallet</Nuxt-link>
                                </li>
                                <li>
                                    <Nuxt-link to="/seller/seller-profile">Profile information</Nuxt-link>
                                </li>
                                <li class="active">
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
                    <ul class="tab_btns nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-here-tab" data-bs-toggle="pill" data-bs-target="#seller_account" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Change Photos</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Login Information</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="seller_account" role="tabpanel" aria-labelledby="pills-here-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4>Profile image and Logo </h4>

                                    </div>

                                    <form action="" method="" enctype="multipart/form-data">
                                        <div>
                                            <h6>Profile Image</h6>
                                            <div class="imagePreview" id="imagePreview"></div>
                                            <div>
                                                <label for="">Upload Profile Image</label>
                                                <input id="uploadFile" type="file" name="image" class="img form-control uploadFile " accept="image/gif, image/jpeg, image/png" />
                                            </div>
                                        </div>
                                        <button type="button" class="btn_cart" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                    </form>
                                    <div class="mt-4">
                                        <h6>Business Logo</h6>
                                        <div class="imagePreview1" id="imagePreview"></div>
                                        <form action="" enctype="multipart/form-data">
                                            <div>
                                                <label for="">Upload Profile Image</label>
                                                <input id="uploadFile1" type="file" name="image" class="img form-control uploadFile1" accept="image/gif, image/jpeg, image/png" />
                                            </div>
                                            <button type="button" class="btn_cart" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Login Information </h4>
                                        <button type="button" class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Login Information </p>
                                                    <button type="button" class="btn-close btn_address_close"></button>
                                                </div>
                                                <form action="">

                                                    <div>
                                                        <label for="name" class="d-flex">Email <p class="text-danger d-block">*</p></label>
                                                        <input type="text" name="name" value="" id="name" class="form-control">
                                                    </div>

                                                    <div class="">
                                                        <label for="">Phone </label> <br>
                                                        <input type="text" id="" class="form-control mobile_code" placeholder=" " name="name">
                                                    </div>
                                                    <div class="mt-3">
                                                        <button type="button" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                        <!-- modal end  -->
                                    </div>
                                    <div class="user_info">
                                        <h5>Email</h5>
                                        <p>user@mail.com </p>
                                    </div>

                                    <div class="user_info">
                                        <h5>Phone number </h5>
                                        <p>+880172222222</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Password <a href="../changepassword.html" class="btn_edit"><i class="fa-solid fa-pen"></i></a></h5>
                                        <p>***********</p>
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
        title: 'Seller Account Setting',
    },

}
</script>
