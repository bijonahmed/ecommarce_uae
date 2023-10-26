<template>
 
        <div class="col-lg-3 col-md-2 col-2 desktop_view">
                    <div class="menus">
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle btn_account b_link login_popup_show" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user"></i> Account
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <!-- help -->
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-circle-question"></i> Help
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <!-- cart  -->
                        <Nuxt-Link to="/cart" class="cart_count"><i class="fas fa-cart-shopping"></i><span style="top: -16px;">9</span>Cart</Nuxt-Link>
                    </div>
                </div>
    
</template>