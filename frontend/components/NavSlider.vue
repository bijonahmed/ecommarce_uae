<template>
<div>
    <div class="row my-2">
        <div class="col-xl-2 col-lg-3 col-md-12 col-sm-12 mini_tab_hide">

            <div class="nav_menu">

                <div v-if="loading">
                    <div class="loader" />
                </div>
                <nav v-if="categories.length > 0">
                    <ul v-for="(category, index) in categories" :key="category.id">
                        <li :key="category.id" v-if="index < limit">
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
                    <ul>
                        <li>
                            <Nuxt-link to="/category/all-categorys" class="d-flex justify-content-between">
                                <div><img src="images/cat_svg/more-100.png" alt="">Other Categories</div>
                                <div><i class="fa-solid fa-angle-right"></i></div>
                            </Nuxt-link>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
        <div class="col-xl-7 col-lg-9 col-md-12 col-sm-12">

            <div id="carouselExample" class="carousel w-100" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-indicators">
                    <button v-for="(item, index) in sliders" :key="index" type="button" data-bs-target="#carouselExample" :data-bs-slide-to="index" :class="{'active': index === currentIndex}"></button>
                </div>
                <div class="carousel-inner" v-if="sliders.length > 0">
                    <div class="carousel-item" v-for="(item, index) in sliders" :key="item.id" :class="{ active: index === 0 }">
                        <img class="d-block w-100" :src="item.images" :alt="'Slide ' + (index + 1)">
                    </div>

                </div>
                <button class="carousel-control-prev" data-bs-target="#carouselExample" type="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" data-bs-target="#carouselExample" type="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
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
            loading: true,
            limit: 12,
            categories: [],
            sliders: [],
            currentIndex: 0
        };
        // Set the initial index
    },

    mounted() {

        this.slidersImg();
        this.fetchData();
    },
    methods: {
        handleCarouselSlide(event) {
            const carousel = event.target;
            if (carousel.classList.contains('carousel')) {
                // Check if the last slide is reached
                if (carousel.querySelector('.carousel-inner .carousel-item:last-child').classList.contains('active')) {
                    // Manually trigger a transition to the first slide
                    carousel.querySelector('.carousel-control-next').click();
                }
            }
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
            setTimeout(() => {
                this.loading = false;
                this.categories = response.data;
            }, 2000); // Adjust the time as needed
        },

        async slidersImg() {
            console.log("slider images...");
            const response = await this.$axios.get(`/unauthenticate/slidersImages`);
            this.sliders = response.data;
        },
    },
};
</script>

<style scoped>

</style>
