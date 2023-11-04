<template>
<div>
    <div class="row">
        <div class="col-12">
            <div class="category">
                <div class="row px-2">

                    <div class="loading-indicator" v-if="loading" style="text-align: center;">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3" v-for="item in prouducts" :key="item.id">
                        <Nuxt-link :to="`/product-details/${item.slug}`">
                            <div class="cat_div">
                                <img :src="item.thumnail" class="img-fluid" alt="">
                                <p>{{ item.name }}</p>
                            </div>
                        </Nuxt-link>
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
            loading: false,
            prouducts: [],
        };
    },
    async mounted() {
        await this.fetchDefaultProduct();
    },
    methods: {

        async fetchDefaultProduct() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/limitedProducts`).then(response => {
                    this.prouducts = response.data;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        }
    },

}
</script>
