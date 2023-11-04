<template>
<div>
    <!-- product grid part start here  -->
    <div class="row">
        <div class="col-12">
            <div class="loading-indicator" v-if="loading">
                <div class="loader-container">
                    <center class="loader-text">Loading...</center>
                    <img src="/loader/loader.gif" alt="Loader" />
                </div>
            </div>
            <div class="product_section">
                <div class="row px-2">
                    <!-- sidebar fillter  -->
                    <div class="col-md-4 desktop_view">
                        <div class="left_side_product">
                            <div class="category_list">

                                <p>Query parameter 'slug': {{ $route.query.slug }}</p>
                                <hr />
                                <h6>Category</h6>
                                <ul>
                                    <li v-for="category in categories" :key="category.id"><a href="#" @click="fetchData(category.slug)">{{ category.name }}</a></li>
                                </ul>
                            </div>

                            <div class="delivery_list">
                                <h6>Express delivery</h6>
                                <ul>
                                    <li>
                                        <input type="checkbox"><label for="">DHL </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="delivery_list">
                                <h6>Shipped from </h6>
                                <ul>
                                    <li>
                                        <input type="checkbox"><label for="">From Bangladesh </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">From Bangladesh </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="brands_list">
                                <h6>Brand</h6>
                                <div class="search_side">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <ul class="brand_scroll">
                                    <li>
                                        <input type="checkbox"><label for="">Addidas </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">AGM </label>
                                    </li>

                                </ul>
                            </div>
                            <div class="price_range">
                                <div class="sidebr_title">
                                    <h6>Price Range </h6>
                                    <button type="button" class="btn_apply">Apply</button>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="slider-range" class="price-filter-range" name="rangeInput"></div>
                                        <div class="d-flex" style="margin:10px auto">
                                            <input type="number" style="width: 45%;margin: 0px 3px;" min=0 max="9900" oninput="validity.valid||(value='0');" id="min_price" class="price-range-field form-control" />
                                            <input type="number" style="width: 45%;margin: 0px 3px" min=0 max="10000" oninput="validity.valid||(value='10000');" id="max_price" class="price-range-field form-control" />
                                        </div>
                                        <!-- <button class="price-range-search" id="price-range-submit">Search</button>
                                        <div id="searchResults" class="search-results-block"></div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="brands_list">
                                <h6>size</h6>
                                <div class="search_side">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <ul class="brand_scroll">
                                    <li>
                                        <input type="checkbox"><label for="">XS</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">S</label>
                                    </li>

                                </ul>
                            </div>
                            <div class="brands_list">
                                <h6>Gender</h6>
                                <ul class="brand_scroll">
                                    <li>
                                        <input type="checkbox"><label for="">Boys</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Girls</label>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- grid  -->
                    <div class="col-md-8">
                        <div class="product_list">
                            <div class="title_product">
                                <div>
                                    <h6>{{ categoryname }}</h6>
                                </div>
                                <div class="d-none">
                                    <label for="">Short By:</label>
                                    <select name="" id="">
                                        <option value="">Popularity</option>
                                        <option value="">New arrival</option>
                                        <option value="">Low to High</option>
                                        <option value="">high to low</option>
                                    </select>
                                </div>
                            </div>
                            <div class="grid_list">
                                <div>
                                    <p>{{ pro_count }} product found</p>
                                </div>
                                <div class="d-flex">
                                    <a type="button" class="filter_btn mobile_view"><i class="fa-solid fa-sliders"></i></a>
                                    <a href="#" @click="categoryGrid"><i class="fa-solid fa-list"></i></a>
                                    <Nuxt-Link to="#" class="active"><i class="fa-solid fa-grip"></i></Nuxt-Link>
                                </div>
                                <div class="filter_modal">
                                    <div class="row px-4">
                                        <div class="col-6"></div>
                                        <div class="col-6 text-end "><i class="fa-solid fa-x filter_close" style="cursor: pointer;"></i></div>
                                    </div>
                                    <div class="modal_fdiv">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="left_side_product">
                                                    <div class="category_list">
                                                        <h6>Category</h6>
                                                        <ul>
                                                            <li v-for="category in categories" :key="category.id"><a href="#" @click="fetchData(category.slug)">{{ category.name }}</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="delivery_list">
                                                        <h6>Express delivery</h6>
                                                        <ul>
                                                            <li>
                                                                <input type="checkbox"><label for="">DHL </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="delivery_list">
                                                        <h6>Shipped from </h6>
                                                        <ul>
                                                            <li>
                                                                <input type="checkbox"><label for="">From Bangladesh </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">From Bangladesh </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="brands_list">
                                                        <h6>Brand</h6>
                                                        <div class="search_side">
                                                            <i class="fa-solid fa-magnifying-glass"></i>
                                                            <input type="text" class="form-control" placeholder="Search">
                                                        </div>
                                                        <ul class="brand_scroll">
                                                            <li>
                                                                <input type="checkbox"><label for="">Addidas </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">AGM </label>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="price_range">
                                                        <div class="sidebr_title">
                                                            <h6>Price Range </h6>
                                                            <button type="button" class="btn_apply">Apply</button>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div id="slider-range" class="price-filter-range" name="rangeInput"></div>

                                                                <div class="d-flex" style="margin:10px auto">
                                                                    <input type="number" style="width: 45%;margin: 0px 3px;" min=0 max="9900" oninput="validity.valid||(value='0');" id="min_price" class="price-range-field" />
                                                                    <input type="number" style="width: 45%;margin: 0px 3px" min=0 max="10000" oninput="validity.valid||(value='10000');" id="max_price" class="price-range-field" />
                                                                </div>

                                                                <!-- <button class="price-range-search" id="price-range-submit">Search</button>

                                                                <div id="searchResults" class="search-results-block"></div> -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="brands_list">
                                                        <h6>size</h6>
                                                        <div class="search_side">
                                                            <i class="fa-solid fa-magnifying-glass"></i>
                                                            <input type="text" class="form-control" placeholder="Search">
                                                        </div>
                                                        <ul class="brand_scroll">
                                                            <li>
                                                                <input type="checkbox"><label for="">XS</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">S</label>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="brands_list">
                                                        <h6>Gender</h6>

                                                        <ul class="brand_scroll">
                                                            <li>
                                                                <input type="checkbox"><label for="">Boys</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Girls</label>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6" v-for="item in prouducts" :key="item.id">
                                    <nuxt-link :to="`/product-details/${item.pro_slug}`" v-if="prouducts.length > 0">
                                        <div class="product_grid">
                                            <img :src="item.thumnail_img" class="img-fluid">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>{{ item.product_name }}</h1>
                                            <p>${{ item.price }}</p>
                                            <p v-if="item.discount !==0"><strike>${{ item.discount }}</strike> <span>-5%</span></p>
                                            <div class="d-flex align-items-center">
                                                <div class="rating">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star "></i>
                                                </div>
                                                <h6>(200)</h6>
                                            </div>
                                            <button type="button" class="btn_cart">Add to cart </button>
                                            <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                        </div>
                                    </Nuxt-link>
                                </div>

                            </div>

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
    props: {
        receivedSlug: String,
    },
    data() {
        return {
            loading: false,
            prouducts: [],
            categories: [],
            pro_count: 0,
            categoryname: '',
        };
    },
    async mounted() {
        const paramSlug = this.$route.query.slug;
        //alert(paramSlug);
        this.fetchData(paramSlug);
        await this.fetchDataCategory();

    },
    methods: {
        categoryGrid() {
            const slug = this.$route.query.slug;
            //alert(paramSlug);
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
        async fetchData(slug) {
            this.loading = true;
            const response = await this.$axios.get(`/unauthenticate/findCategorys/${slug}`).then(response => {
                    this.prouducts = response.data.result;
                    this.pro_count = response.data.pro_count;
                    this.categoryname = response.data.categoryname;

                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;;

        },

        async fetchDataCategory() {
            this.loading = true;
            await this.$axios.get(`/unauthenticate/filterCategorys`).then(response => {
                    this.categories = response.data;
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
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}
</style>
