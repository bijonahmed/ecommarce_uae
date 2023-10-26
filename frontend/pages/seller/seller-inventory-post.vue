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
                                <li class="active">
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
                    <section class="main_content ">
                        <div class="container">
                            <div class="inventory_post_part">
                                <form action="" method="" enctype="multipart/form-data">
                                    <div>
                                        <input type="checkbox" id="Free_Delivery" class=""><label for="Free_Delivery">Free Delivery</label>
                                    </div>
                                    <div>
                                        <div class="upload__box">
                                            <div class="upload__btn-box">
                                                <label class="upload__btn">
                                                    <p>Upload images</p>
                                                    <input type="file" multiple="" data-max_length="20" class="upload__inputfile">
                                                </label>
                                            </div>
                                            <div class="upload__img-wrap"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="">Invetory Title </label>
                                        <input type="text" class="form-control" name="" id="">
                                    </div>
                                    <div>
                                        <label for="">Category</label>
                                        <select name="" class="form-control select2" id="">
                                            <option value="" selected disabled>Select One </option>
                                            <option value="">mobile</option>
                                            <option value="">laptop and tablates</option>
                                            <option value="">fashion</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="">Sub Category</label>
                                        <select name="" class="form-control" id="">
                                            <option value="" selected disabled>Select One </option>
                                            <option value="">mobile</option>
                                            <option value="">laptop and tablates</option>
                                            <option value="">fashion</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="">Brand</label>
                                        <input type="text" class="form-control">
                                    </div>
                                    <div>
                                        <label for="">Price </label>
                                        <input type="text" class="form-control">
                                    </div>
                                    <div>
                                        <label for="">Qualtity </label>
                                        <input type="number" class="form-control">
                                    </div>
                                    <div class="color_size row">
                                        <div class="col-md-6 ">
                                            <label for="">Color:</label>
                                            <input type="text" id="text-tags" class="tags ">
                                        </div>
                                        <div class="col-md-6 ">
                                            <label for="">Size :</label>
                                            <input type="text" id="text-size " class="tagss ">
                                        </div>
                                    </div>
                                    <div>
                                        <label for=""> Description</label>
                                        <textarea name="" class="form-control summernote" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div>
                                        <label for=""> Key features</label>
                                        <textarea name="" class="form-control summernote" id="" cols="30" rows="4"></textarea>
                                    </div>

                                    <div>
                                        <label for=""> Spacification</label>
                                        <textarea name="" class="form-control summernote" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div>
                                        <label for=""> What In the Box</label>
                                        <textarea name="" class="form-control summernote" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <button class="btn_confirm mt-2"> Post </button>
                                </form>
                            </div>

                        </div>
                    </section>

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
        title: 'Seller Inventory Post',
    },

}
</script>
