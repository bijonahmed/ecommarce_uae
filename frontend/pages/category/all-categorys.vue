<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <section class="search_bar">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-3 col-md-4 col-4">
                    <div class="logo nav_tab">
                        <!-- mobile view sidebar  -->
                        <button type="button" class="btn_menu mobile_view" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="fa-solid fa-bars-staggered"></i></button>
                        <!-- sidebar offcanvas  -->
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Ecommerce</h5>
                            </div>
                            <div class="offcanvas-body">
                                <!-- offf canvas start here  -->
                                <Common_MobileSidebar />
                            </div>
                        </div>
                        <!-- mini tab view navbar here  -->
                        <Common_MiniTabNavbar />
                        <!-- nav end  -->
                        <Nuxt-link to="/">Ecommerce <i class=" fa-regular fa-star"></i></Nuxt-link>
                    </div>
                </div>
                <div class="col-6 desktop_view mini_tab_hide">
                    <form action="" class="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" name="" id="" placeholder="Search Product" class="form-control"> <button type="button">Search</button>
                    </form>
                </div>
                <!-- desktop_view options  -->
                <DesktopViewOption />
                <!-- mobile view options  -->
                <div class="col-4 ms-auto  mobile_view">
                    <div class="mobile_nav_option">
                        <a class="search_form"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </div>
                <!-- search modal  -->
                <Common_MobileSearchProduct />
            </div>
        </div>
    </section>
    <!-- Main section start here  -->
    <div class="loading-indicator" v-if="loading">
                <div class="loader-container">
                    <center class="loader-text">Loading...</center>
                        <img src="/loader/loader.gif" alt="Loader" />
                </div>
            </div>
    <section class="main_content">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="all_cat">
                        <div class="all_cat_title">
                            <h5>All Categories</h5>
                        </div>

                        <div class="row">
                            <div class="col-3 " v-for="category in categories" :key="category.id">
                                <h6>{{ category.name }}</h6>
                                <ul v-for="childCategory in category.children" :key="childCategory.id">
                                    <li><a href="#" @click="redirectCategory(childCategory.slug)">{{ childCategory.name }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- back to top button  -->
    <div class="back_top">
        <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>
    <Footer />
</div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import CategoryProductFilter from '~/components/CategoryProductFilter.vue';
import ExtraDiscount from '~/components/ExtraDiscount.vue';
import CategoryMultipleProduct from '~/components/CategoryMultipleProduct.vue';

export default {

    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        CategoryProductFilter,
        ExtraDiscount,
        CategoryMultipleProduct
    },
    head: {
        title: 'All Categorys',
    },
    data() {
        return {
            limit: 12,
            categories: [],
            loading: false
        };
    },
    async mounted() {
        await this.fetchData();
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
        async fetchData() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/getCategoryList`).then(response => {
                    this.categories = response.data;
                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },

    },
}
</script>
<style scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
/* For Loader */
.loader-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.loader-text {
  margin: 0; /* Remove default margin */
}

.loader-top {
  top: 0;
}

.loader-bottom {
  bottom: 0;
}
</style>