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
                                <li>
                                    <Nuxt-link to="/seller/seller-account-setting">Account Settings</Nuxt-link>
                                </li>
                                <li class="active">
                                    <Nuxt-link to="/seller/seller-message">Massages</Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/login">LogOut</Nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="card chat-app">
                        <div id="plist" class="people-list">
                            <div class="input-group">
                                <button class="btn_message" type="button"> <i class="fa-solid fa-search"></i></button>
                                <input type="text" style="box-shadow: none; outline: 0;" class="form-control" placeholder="Search...">
                            </div>
                            <ul class="list-unstyled chat-list mt-2 mb-0">
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>
                                <li class="clearfix">
                                    <button type="button" class="btn_chatlist">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar">
                                        <div class="about">
                                            <div class="name">Vincent Porter</div>
                                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>
                                        </div>
                                    </button>
                                </li>

                            </ul>
                        </div>
                        <div class="chat">
                            <div class="chat-header clearfix">
                                <div class="row mobile_view">
                                    <div class="col-12">
                                        <div class="mobile_chat_list">
                                            <ul>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" class="btn_chatlist">
                                                        <div>
                                                            <img style="float: unset;" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                                                        </div>
                                                        <p>Jhone Due</p>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                                        </a>
                                        <div class="chat-about">
                                            <h6 class="m-b-0">Aiden Chavez</h6>
                                            <small>Last seen: 2 hours ago</small>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 hidden-sm text-right">
                                        <!-- <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a> -->
                                    </div>
                                </div>
                            </div>
                            <div class="chat-history">
                                <ul class="m-b-0">
                                    <li class="clearfix">
                                        <div class="message-data text-right">
                                            <span class="message-data-time">10:10 AM, Today</span>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                                        </div>
                                        <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="message-data text-start">
                                            <img src="/images/user-100.png" alt="">
                                            <span class="message-data-time">10:12 AM, Today</span>
                                        </div>
                                        <div class="message my-message">Are we meeting today?</div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="message-data text-right">
                                            <span class="message-data-time">10:10 AM, Today</span>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                                        </div>
                                        <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="message-data text-start">
                                            <img src="/images/user-100.png" alt="">
                                            <span class="message-data-time">10:15 AM, Today</span>
                                        </div>
                                        <div class="message my-message">Project has been already finished and I have results to show you.</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="chat-message clearfix">
                                <div class="input-group mb-0">
                                    <button class="btn_message" type="button"><i class="fa-solid fa-paper-plane"></i></button>
                                    <input type="text" class="form-control" style="box-shadow: none; outline: 0;" placeholder="Enter text here...">
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
        title: 'Seller Message',
    },

}
</script>
