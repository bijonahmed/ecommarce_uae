<template>
<div class="side_nav">
    <div class="row">
        <div class="col-12">
            <div class="sidenav_title">
                <nuxt-link to="/user/user-profile">
                    <h6>My Ecommerce Account</h6><i class="fa-solid fa-chevron-right"></i>
                </nuxt-link>
            </div>
            <ul>
                <li v-if="loggedIn">
                    <nuxt-link to="/user/user-orders"><i class="fa-solid fa-box"></i>Order</nuxt-link>
                </li>
                <li v-if="loggedIn">
                    <nuxt-link to="/user/my-reviews"><i class="fa-regular fa-comment-dots"></i>Pending Reviews</nuxt-link>
                </li>
                <li v-if="loggedIn">
                    <nuxt-link to="#"><i class="fa-solid fa-ticket-simple"></i>Voucher </nuxt-link>
                </li>
                <li v-if="loggedIn">
                    <nuxt-link to="/user/user-whichlist"><i class="fa-solid fa-heart"></i>Save items </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="row" v-for="category in categories" :key="category.id">
        <div class="col-12">
            <div class="sidenav_title">
                <Nuxt-link to="/category/all-categorys">
                    <h6>{{ category.name }}</h6>
                    <p>See all</p>
                </Nuxt-link>
            </div>
            <ul>
                <li v-for="childCategory in category.children" :key="childCategory.id">
                    <a href="#" @click="redirectCategory(category.slug)"><i class="fa-solid fa-mobile-screen-button"></i> {{ childCategory.name }}</a>
                </li>

            </ul>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <ul>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Terms and condition</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            limit: 12,
            categories: [],
        };
    },
    async mounted() {
        await this.fetchData();
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn;
        },
    },
    methods: {
        redirectCategory(slug) {
            this.$router.push({
                path: '/category/category-list',
                query: {
                    slug: slug
                }
            })
        },
        redirectCategory(slug) {
            this.$router.push({
                path: '/category/category-list',
                query: {
                    slug: slug
                }
            })
        },
        async fetchData() {
            const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
            this.categories = response.data;
        },

    },
};
</script>
