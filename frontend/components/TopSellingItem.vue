<template>
<div>
    <div class="row">
        <div class="col-12">
            <div class="top_selling">
                <div class="row mb-2">
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
        //  window.addEventListener('resize', this.handleResize); // Listen for window resize
        //   this.handleResize(); // Call handleResize on component mount
        // this.startAutoplay();
        await this.initOwlCarousel();
        await this.fetchDefaultProduct();

    },
    beforeDestroy() {
        //  window.removeEventListener('resize', this.handleResize); // Remove event listener on component destroy
        //  this.stopAutoplay(); // Clear the interval when component is destroyed
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

        // startAutoplay() {
        //     this.autoplayInterval = setInterval(this.autoPlaySlider, 3000); // Adjust the interval as needed (in milliseconds)
        // },
        // stopAutoplay() {
        //     clearInterval(this.autoplayInterval);
        // },
        // autoPlaySlider() {
        //     this.currentSlide = (this.currentSlide + 1) % this.toproducts.length;
        //     this.scrollToCurrentSlide();
        // },
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
/* Style the slider container */
.slider {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 22%;
    gap: .3rem;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    cursor: grab;
    margin-top: 1rem;
    padding-inline: 1rem;
}

.slider-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.slider {
    display: flex;
    transition: transform 0.3s ease;
    overflow-x: auto;
    /* Enable horizontal scrolling */
    scrollbar-width: none;
    /* Hide the scrollbar */
    -ms-overflow-style: none;
    /* Hide scrollbar for Microsoft Edge */
    padding: 5px 0px;
    text-align: center;
}

.slide {
    flex-shrink: 0;
    width: 150px;
    margin-right: 10px;
    /* Add some spacing between slides */
    box-shadow: 0 0 10px #cbc6c661;
    padding: 10px;
    border: 1px solid #80808059;
    border-radius: 8px;
    
}
.slider::-webkit-scrollbar{
    display: none;
}

@media(min-width: 576px) {

    .slide {
        flex-shrink: 0;
        width: 200px;
        margin-right: 10px;
        /* Add some spacing between slides */
    }
}

.slide img{
    text-align: center;
    margin: auto;
}
/* Hide left and right buttons when at the edge of the slider */
.prev-slide,
.next-slide {
    position: absolute;
    top: 30%;
    font-size: 2rem;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    padding: 10px;
    z-index: 1;
}

.prev-slide {
    left: 0;
    opacity: 0.5;
}

.next-slide {
    right: 0;
    opacity: 0.5;
}

/* Show the buttons when hovering over the slider */
/* .slider[data-overflowing="left"] .prev-slide,
    .slider[data-overflowing="right"] .next-slide {
        display: none;
    } */
</style>
