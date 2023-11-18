<template>
<div class="col-lg-3 col-md-2 col-2 desktop_view">
    <div class="menus">
        <div class="dropdown">
            <button class="btn  dropdown-toggle btn_account b_link " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user"></i> Account
            </button>
            <ul class="dropdown-menu">

                <span v-if="loggedIn">
                    <button class="drop_btn" type="button" @click="logout">Sign Out</button>
                </span>
                <span v-else>
                    <button class="drop_btn" type="button" @click="openLoginModal">Sign In</button>
                </span>

                <li v-if="loggedIn">
                    <Nuxt-link class="dropdown-item" to="/user/user-profile">MY Account</Nuxt-link>
                </li>
                <li v-if="loggedIn">
                    <Nuxt-link class="dropdown-item" to="/user/user-orders">Orders</Nuxt-link>
                </li>
                <li v-if="loggedIn">
                    <Nuxt-link class="dropdown-item" to="/user/user-whichlist">Wishlist</Nuxt-link>
                </li>
            </ul>
        </div>
        <!-- help -->
        <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-circle-question"></i> Help
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Help Center </a></li>
                <li><a class="dropdown-item" href="#">Place An Order</a></li>
                <li><a class="dropdown-item" href="#">Payment Option </a></li>
                <li><a class="dropdown-item" href="#">Truck an order </a></li>
                <li><a class="dropdown-item" href="#">Cancel an order </a></li>
                <li><a class="dropdown-item" href="#">Return & Refund </a></li>
                <button class="drop_btn" type="button">live Chart </button>
            </ul>
        </div>
        <!-- cart  -->
        <Nuxt-link to="/cart" class="cart_count"><i class="fas fa-cart-shopping"></i><span style="top: -16px;">{{ itemCount }}</span>Cart</Nuxt-link>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    // middleware: "auth",
    data() {
        return {
            cart: [],
            itemCount: 0,
            limit: 12,
            id: '',
            categories: [],

        };
    },
    async mounted() {
        this.$eventBus.$on('cartItemCountUpdated', this.handleCartItemCountUpdated);
        this.loadCart();
        await this.fetchData();
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },

    },
    methods: {
        openLoginModal() {
            $(".login_popup").fadeIn();
        },
        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
        },
        handleCartItemCountUpdated(itemCount) {
            // This method will be called when the event is emitted from ComponentA
            console.log('Received  DesktopViewOptions Com.:', itemCount);
            // Update the local data property with the received itemCount
            this.itemCount = itemCount;
        },
        async fetchData() {
            const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
            this.categories = response.data;
        },
        getUser() {
            let user = this.$store.state.auth.user;
            console.log("Users data: " + user);

        },

        async logout() {
            await this.$auth.logout()
        }

    },
};
</script>
