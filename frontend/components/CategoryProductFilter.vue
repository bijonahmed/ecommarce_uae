<template>
<div>
    <div class="row">
        <div class="col-12">
            <div class="product_section">
                <div class="row px-2">
                    <!-- sidebar fillter  -->
                    <div class="col-md-4 desktop_view">
                        <div class="left_side_product">
                            <div class="category_list">
                                <h6>Category</h6>
                                <ul>
                                    <li>
                                        <a href="#">Computing</a>
                                    </li>
                                    <li>
                                        <a href="#">Electronics</a>
                                    </li>

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
                    <!-- list  -->
                    <div class="col-md-8">
                        <div class="product_list">
                            <div class="title_product">
                                <div>
                                    <h6>Officail Store Deals</h6>
                                </div>
                                <div>
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
                                    <p>5,000 product found</p>
                                </div>
                                <div class="d-flex">
                                    <a type="button" class="filter_btn mobile_view"><i class="fa-solid fa-sliders"></i></a>
                                    <Nuxt-Link to="/category/category-list" class="active"><i class="fa-solid fa-list"></i></Nuxt-Link>
                                    <Nuxt-Link to="/category/category-grid"><i class="fa-solid fa-grip"></i></Nuxt-Link>
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
                                                            <li>
                                                                <a href="#">Computing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Electronics</a>
                                                            </li>

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
                                <div class="col-12">
                                    <Nuxt-link to="/product-details">
                                        <div class="products_list">
                                            <div class="col">
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                <span>Free Delivery </span>
                                            </div>
                                            <div class="col pad_ding">
                                                <strong>Official store </strong>
                                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora eos exercitationem molestias fugit, optio autem at quo perspiciatis!</h5>
                                                <div class="d-flex align-items-center">
                                                    <div class="ratings m-0">
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star "></i>
                                                    </div>
                                                    <h6 class="m-0">(200)</h6>
                                                </div>
                                                <p><i class="fa-brands fa-dhl"></i></p>
                                            </div>
                                            <div class="col pad_ding">
                                                <h4>Tk 6,500</h4>
                                                <h4 class="disabled"><strike>Tk 6,500</strike><span>-45%</span></h4>
                                                <!-- <button type="button" class="btn_cart " style="display: block;visibility: unset;">Add to cart</button> -->
                                                <button type="button" disabled class="btn_sold " style="display: block;visibility: unset;">Sold Out</button>
                                            </div>
                                        </div>
                                    </Nuxt-link>
                                </div>

                            </div>
                            <!-- pagination -->

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
    
    mounted() {

      
    },
    methods: {
        // redirectCategory(slug) {
        //     this.$router.push({ path: '/category/category-list', query: { slug: slug } })
        // },
        async fetchData() {
            const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
            this.categories = response.data;
            //console.log("====" + response.data);
        },

    },


}
</script>
