<template>
<div>
    <div class="row">
        <div class="col-12">
            <div class="top_selling">
                <div class="row">
                    <div class="col-6">
                        <div class="sell_title">
                            <h5>Top Selling items</h5>
                        </div>
                    </div>
                </div>
                <div class="loading-indicator" v-if="loading" style="text-align: center;">
                    <div class="loader-container">
                        <center class="loader-text">Loading...</center>
                        <img src="/loader/loader.gif" alt="Loader" />
                    </div>
                </div>
                <div class="slider-container">
                    <div class="slider" ref="slider">
                        <div class="slide" v-for="item in toproducts" :key="item.id">
                            <img :src="item.thumnail" alt="" style="height: 150px;width: 150px;">
                            <p class="text-center"><a href="#">{{ item.name }}</a></p>
                        </div>
                        <div class="prev-slide" @click="scrollLeft">&lsaquo;</div>
                        <div class="next-slide" @click="scrollRight">&rsaquo;</div>

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
            currentSlide: 0, // Add this property to keep track of the current slide
            autoplayInterval: null,
            loading: false,
            toproducts: [],
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
            if (this.currentSlide < this.toproducts.length - 1) {
                this.currentSlide++;
                this.scrollToCurrentSlide();
            }
        },
        scrollToCurrentSlide() {
            const slidesContainer = this.$refs.slider;
            slidesContainer.scrollLeft = this.currentSlide * (150 + 10); // Adjust for slide width and margin
        },

        scrollToCurrentSlide() {
            const slidesContainer = this.$el.querySelector('.slider');
            slidesContainer.scrollLeft = this.currentSlide * slidesContainer.offsetWidth;
        },
        async fetchDefaultProduct() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/topSellingProducts`).then(response => {
                    this.toproducts = response.data;
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
