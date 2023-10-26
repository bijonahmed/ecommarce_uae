<template>
<div>
    <div class="row my-2">
        <div class="col-xl-2 col-lg-3 col-md-12 col-sm-12 mini_tab_hide">
            <div class="nav_menu">
                <nav>
                    <ul v-for="category in categories" :key="category">
                        <li :key="category.id">
                            <a href="#" class="d-flex justify-content-between align-items-center" @click="redirectCategory(category.slug)">
                                <div class="d-flex align-items-center"><img src="images/cat_svg/icons8-apple-100.png" alt="">{{ category.name }}</div> <i class="fa-solid fa-angle-right"></i>
                            </a>
                            <div class="sub_menu">
                                <div class="row" v-if="category.children && category.children.length > 0">
                                    <div class="col-4" v-for="childCategory in category.children" :key="childCategory.id">
                                        <h6><a href="#" @click="redirectCategory(childCategory.slug)"> {{ childCategory.name }}</a></h6>
                                        <ul v-if="childCategory.children && childCategory.children.length > 0">
                                            <li v-for="inSubCategory in childCategory.children" :key="inSubCategory.id"><a href="#" @click="redirectCategory(inSubCategory.slug)">{{ inSubCategory.name }}</a></li>

                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
        <div class="col-xl-7 col-lg-9 col-md-12 col-sm-12">
            <div class="owl-carousel slider_part">
                <div class="slide_img">
                    <a href="#">
                        <img src="images/slider_add(1).jpg" class="img-fluid" alt="">
                    </a>
                </div>
                <div class="slide_img">
                    <a href="#">
                        <img src="images/slider_add(2).jpg" class="img-fluid" alt="">
                    </a>
                </div>
                <div class="slide_img">
                    <a href="#">
                        <img src="images/slider_add(3).png" class="img-fluid" alt="">
                    </a>
                </div>
                <div class="slide_img">
                    <a href="#">
                        <img src="images/ads_size.png" class="img-fluid" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-12  col-sm-12 tab_hide">
            <div class="row">
                <div class="col-12">
                    <img src="images/ads_mini(1).jpg" alt="">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-12">
                    <img src="images/ads_mini(2).png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            categories: [],
        };
    },
    async mounted() {
        await this.fetchData();
    },
    methods: {
        redirectCategory(slug) {
            this.$router.push({ path: '/category/category-list', query: { slug: slug } })
        },
        async fetchData() {
            const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
            this.categories = response.data;
        },

    },
};
</script>
