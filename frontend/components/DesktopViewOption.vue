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
        <Nuxt-Link to="/cart" class="cart_count"><i class="fas fa-cart-shopping"></i><span style="top: -16px;">{{ itemCount }}</span>Cart</Nuxt-Link>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            cart: [],
            limit: 12,
            itemCount: 0,
            categories: [],
        };
    },
    async mounted() {
        this.$eventBus.$on('cartItemCountUpdated', this.handleCartItemCountUpdated);
        this.loadCart();
        await this.fetchData();
    },
    computed: {

    },
    methods: {

        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += item.quantity;
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

    },
};
</script>
