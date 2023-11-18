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
    
        <section class="main_content ">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="user_sidebar">
    
                            <div class="user_page_list">
                                <ul>
                                    <li>
                                        <Nuxt-link to="/user/user-profile">User Account </Nuxt-link>
                                    </li>
                                    <li class="active">
                                        <Nuxt-link to="/user/user-orders">My Orders </Nuxt-link>
                                    </li>
                                    <li class="">
                                        <Nuxt-link to="/user/user-whichlist">Wishlist </Nuxt-link>
                                    </li>
                                    <li class="">
                                        <Nuxt-link to="/user/my-reviews">My Reviews </Nuxt-link>
                                    </li>
                                    <li class="">
                                        <a href="#" @click="logout">LogOut </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                    </div>
                    <div class="col-md-8">
                        <div class="main_profile">                  
                  <div class="recent_orders">
                    <h4>Recent Orders </h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Order id</th>
                          <th>Place On </th>
                          <th>Status </th>
                          <th>Item</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>74476095</td>
                          <td>15 Aug 2023 </td>
                          <td><span class="badge text-bg-warning">Processing</span></td>
                          <td class="order_item">
                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                          </td>
                          <td>6,000 TK</td>
                          <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                            <!-- confirm modal  -->
                            <div class="confirm_modal">
                                <div class="confirm_div">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>Cancel Oreder</h3>
                                    <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <p class="mb-1 ">Are You Sure?</p>
                                <form action="">
                                    <div>
                                        <label for="">Reason</label>
                                        <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn_confirm">Confirm</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </tr>
                        <tr>
                          <td>74476095</td>
                          <td>15 Aug 2023 </td>
                          <td><span class="badge text-bg-success">Delivered</span></td>
                          <td class="order_item">
                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                          </td>
                          <td>6,000 TK</td>
                          <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                             <!-- confirm modal  -->
                             <div class="confirm_modal">
                                <div class="confirm_div">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>Cancel Oreder</h3>
                                    <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <p class="mb-1">Are You Sure?</p>
                                <form action="">
                                    <div>
                                        <label for="">Reason</label>
                                        <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn_confirm">Confirm</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </tr>                        
                        <tr>
                            <td>74476095</td>
                            <td>15 Aug 2023 </td>
                            <td><span class="badge text-bg-danger">Canceled</span></td>
                            <td class="order_item">
                              <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                              <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                              <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            </td>
                            <td>6,000 TK</td>
                            <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                               <!-- confirm modal  -->
                               <div class="confirm_modal">
                                <div class="confirm_div">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>Cancel Oreder</h3>
                                    <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <p class="mb-1">Are You Sure?</p>
                                <form action="">
                                    <div>
                                        <label for="">Reason</label>
                                        <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn_confirm">Confirm</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </tr>
                        <tr>
                            <td>74476095</td>
                            <td>15 Aug 2023 </td>
                            <td><span class="badge text-bg-warning">Processing</span></td>
                            <td class="order_item">
                              <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                              <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                              <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            </td>
                            <td>6,000 TK</td>
                            <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                              <!-- confirm modal  -->
                              <div class="confirm_modal">
                                  <div class="confirm_div">
                                  <div class="d-flex justify-content-between align-items-center">
                                      <h3>Cancel Oreder</h3>
                                      <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                  </div>
                                  <p class="mb-1">Are You Sure?</p>
                                  <form action="">
                                      <div>
                                          <label for="">Reason</label>
                                          <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                      </div>
                                      <div class="d-flex justify-content-end">
                                          <button type="button" class="btn_confirm">Confirm</button>
                                      </div>
                                  </form>
                                  </div>
                              </div>
                              <!-- modal end  -->
                        </tr>
                        <tr>
                        <td>74476095</td>
                        <td>15 Aug 2023 </td>
                        <td><span class="badge text-bg-success">Delivered</span></td>
                        <td class="order_item">
                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                        </td>
                        <td>6,000 TK</td>
                        <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                            <!-- confirm modal  -->
                            <div class="confirm_modal">
                                <div class="confirm_div">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>Cancel Oreder</h3>
                                    <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <p class="mb-1">Are You Sure?</p>
                                <form action="">
                                    <div>
                                        <label for="">Reason</label>
                                        <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn_confirm">Confirm</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </tr>                        
                        <tr>
                            <td>74476095</td>
                            <td>15 Aug 2023 </td>
                            <td><span class="badge text-bg-danger">Canceled</span></td>
                            <td class="order_item">
                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            </td>
                            <td>6,000 TK</td>
                            <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                                <!-- confirm modal  -->
                                <div class="confirm_modal">
                                <div class="confirm_div">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>Cancel Oreder</h3>
                                    <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <p class="mb-1">Are You Sure?</p>
                                <form action="">
                                    <div>
                                        <label for="">Reason</label>
                                        <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn_confirm">Confirm</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </tr>
                        <tr>
                        <td>74476095</td>
                        <td>15 Aug 2023 </td>
                        <td><span class="badge text-bg-warning">Processing</span></td>
                        <td class="order_item">
                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                        </td>
                        <td>6,000 TK</td>
                        <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                            <!-- confirm modal  -->
                            <div class="confirm_modal">
                                <div class="confirm_div">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>Cancel Oreder</h3>
                                    <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <p class="mb-1">Are You Sure?</p>
                                <form action="">
                                    <div>
                                        <label for="">Reason</label>
                                        <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn_confirm">Confirm</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </tr>
                        <tr>
                        <td>74476095</td>
                        <td>15 Aug 2023 </td>
                        <td><span class="badge text-bg-success">Delivered</span></td>
                        <td class="order_item">
                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                        </td>
                        <td>6,000 TK</td>
                        <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                            <!-- confirm modal  -->
                            <div class="confirm_modal">
                                <div class="confirm_div">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>Cancel Oreder</h3>
                                    <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <p class="mb-1">Are You Sure?</p>
                                <form action="">
                                    <div>
                                        <label for="">Reason</label>
                                        <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn_confirm">Confirm</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </tr>                        
                        <tr>
                            <td>74476095</td>
                            <td>15 Aug 2023 </td>
                            <td><span class="badge text-bg-danger">Canceled</span></td>
                            <td class="order_item">
                            <Nuxt-link to="/product-details"><img src="/images/product(1).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(2).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            <Nuxt-link to="/product-details"><img src="/images/product(3).jpg" class="img-fluid" alt=""> </Nuxt-link>
                            </td>
                            <td>6,000 TK</td>
                            <td><button type="button" class="cancel btn_edit">Cancel</button></td>
                                <!-- confirm modal  -->
                                <div class="confirm_modal">
                                <div class="confirm_div">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>Cancel Oreder</h3>
                                    <button class=" close_modal" type="button"><i class="fa-solid fa-x"></i></button>
                                </div>
                                <p class="mb-1">Are You Sure?</p>
                                <form action="">
                                    <div>
                                        <label for="">Reason</label>
                                        <textarea name="" required min="50" id="" cols="30" rows="4"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn_confirm">Confirm</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <!-- modal end  -->
                        </tr>
                      </tbody>
                    </table>
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
    import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
    import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
    import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
    
    export default {
        components: {
            Common_MobileSidebar,
            Common_MiniTabNavbar,
            Common_MobileSearchProduct,
    
        },
        head: {
            title: 'My Orders',
        },
        mounted() {
    
        },
        methods: {
        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
    }
    }
    </script>
    