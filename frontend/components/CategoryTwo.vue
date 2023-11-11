<template>
<div>
    <div class="row">
        <div class="col-12">
            <div class="top_selling">
                <div class="row mb-2">
                    <div class="sell_title stock_deals">
                        <div>
                            <h5>{{ categoryname }}</h5>
                        </div>
                        <div>
                            <nuxt-link :to="'category/category-list?slug=' + category_slug">See All <i class="fas fa-arrow-right"></i></nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="container text-center my-3">
                    <div class="loading-indicator" v-if="loading" style="text-align: center;">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="slider-container">
                        <div class="slider" ref="slider">
                            <div class="slide" v-for="item in products" :key="item.id">
                                <nuxt-link :to="`/product-details/${item.slug}`"><img :src="item.thumnail" alt="" style="height: 150px;width: 150px;">
                                    <p class="text-center">
                                        {{ item.name }}
                                    </p>
                                </nuxt-link>

                            </div>
                            <div class="prev-slide" @click="scrollLeft">&lsaquo;</div>
                            <div class="next-slide" @click="scrollRight">&rsaquo;</div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            categoryname: '',
            currentSlide: 0,
            category_slug: '',
            loading: false,
            products: [],
        };
    },
    async mounted() {

        await this.initOwlCarousel();
        await this.fetchDefaultProduct();

    },

    methods: {
        scrollLeft() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
                this.scrollToCurrentSlide();
            }
        },
        scrollRight() {
            if (this.currentSlide < this.products.length - 1) {
                this.currentSlide++;
                this.scrollToCurrentSlide();
            }
        },
        scrollToCurrentSlide() {
            const slidesContainer = this.$refs.slider;
            slidesContainer.scrollLeft = this.currentSlide * (150 + 10); // Adjust for slide width and margin
        },
        async fetchDefaultProduct() {
            this.loading = true;
            const category_id = 318;
            await this.$axios.get('/unauthenticate/searchProductCategory', {
                    params: {
                        category_id: category_id,
                        // Add more parameters as needed
                    }
                }).then(response => {
                    //console.log(response.data.result);
                    this.products = response.data.result;
                    this.categoryname = response.data.name;
                    this.category_slug = response.data.catslug;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },
        async initOwlCarousel() {
            const slider = this.$el.querySelector('.slider');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX;
                const walk = (x - startX) * 3; // Adjust this value for smoother scrolling
                slider.scrollLeft = scrollLeft - walk;
            });
        },
    },
};
</script>

<style>

</style>
