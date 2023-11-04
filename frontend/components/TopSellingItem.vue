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
                <div class="slider">

                    <div class="slide" v-for="item in toproducts" :key="item.id">
                        <img :src="item.thumnail" alt="" style="height: 150px;width: 150px;">
                    </div>
                    <div class="prev-slide" @click="scrollLeft">&#10094;</div>
                    <div class="next-slide" @click="scrollRight">&#10095;</div>

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
            const slidesContainer = this.$refs.slides;
            slidesContainer.scrollLeft -= 100; // Adjust the scroll amount as needed
        },
        scrollRight() {
            const slidesContainer = this.$refs.slides;
            slidesContainer.scrollLeft += 100; // Adjust the scroll amount as needed
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

.slider::-webkit-scrollbar {
    display: none;
}

.slide img {
    inline-size: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: .2rem;
}

@media (max-width: 440px) {
    h2 {
        font-size: 1.5rem;
    }

    .slider {
        grid-auto-columns: 40%;
    }
}

.slider {
    position: relative;
}

.prev-slide,
.next-slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    cursor: pointer;
}

.prev-slide {
    left: 0;
}

.next-slide {
    right: 0;
}
</style>
