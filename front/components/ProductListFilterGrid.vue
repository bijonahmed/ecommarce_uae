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
                                    <li>
                                        <a href="#">Phone & tablates</a>
                                    </li>
                                    <li>
                                        <a href="#">Fashion</a>
                                    </li>
                                    <li>
                                        <a href="#">Home & office </a>
                                    </li>
                                    <li>
                                        <a href="#">Grocery</a>
                                    </li>
                                    <li>
                                        <a href="#">Health & beauty</a>
                                    </li>

                                    <li>
                                        <a href="#">Baby Product</a>
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
                                        <input type="radio" checked name="from" id="from"><label for="from">From Bangladesh </label>
                                    </li>
                                    <li>
                                        <input type="radio" name="from" id="from"><label for="from">From Bangladesh </label>
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
                                    <li>
                                        <input type="checkbox"><label for="">Apple </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Walton </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Addidas </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">AGM </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Apple </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Walton </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Addidas </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">AGM </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Apple </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Walton </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Addidas </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">AGM </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Apple </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Walton </label>
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
                                    <li>
                                        <input type="checkbox"><label for="">L</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">M </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">XL </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">XXL </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">XXL </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">0-2 Years</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">2-3 Years</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">3-5 Years</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">5-7 Years</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">7-10 Years</label>
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
                                    <li>
                                        <input type="checkbox"><label for="">Man</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Woman</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Male</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Female</label>
                                    </li>
                                    <li>
                                        <input type="checkbox"><label for="">Teen</label>
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
                                    <Nuxt-Link to="/product-list"><i class="fa-solid fa-list"></i></Nuxt-Link>
                                    <Nuxt-Link to="/product-grid" class="active"><i class="fa-solid fa-grip"></i></Nuxt-Link>
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
                                                            <li>
                                                                <a href="#">Phone & tablates</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Fashion</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Home & office </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Grocery</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Health & beauty</a>
                                                            </li>

                                                            <li>
                                                                <a href="#">Baby Product</a>
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
                                                            <li>
                                                                <input type="checkbox"><label for="">Apple </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Walton </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Addidas </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">AGM </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Apple </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Walton </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Addidas </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">AGM </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Apple </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Walton </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Addidas </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">AGM </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Apple </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Walton </label>
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
                                                            <li>
                                                                <input type="checkbox"><label for="">L</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">M </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">XL </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">XXL </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">XXL </label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">0-2 Years</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">2-3 Years</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">3-5 Years</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">5-7 Years</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">7-10 Years</label>
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
                                                            <li>
                                                                <input type="checkbox"><label for="">Man</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Woman</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Male</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Female</label>
                                                            </li>
                                                            <li>
                                                                <input type="checkbox"><label for="">Teen</label>
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
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(1).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(2).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(3).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(4).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(5).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(6).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(7).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(8).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <a href="product-details.html">
                                        <div class="product_grid">
                                            <img src="images/product(9).jpg" class="img-fluid" alt="">
                                            <span>Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                            <p>TK 6,500</p>
                                            <p><strike>TK 6,500</strike> <span>-5%</span></p>
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
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="pagination">
                                        <ul>
                                            <li>
                                                <a href="#"> prv </a>
                                            </li>
                                            <li>
                                                <a href="#" class="active"> 1 </a>
                                            </li>
                                            <li>
                                                <a href="#"> 2 </a>
                                            </li>
                                            <li>
                                                <a href="#"> 3 </a>
                                            </li>
                                            <li>
                                                <a href="#"> next </a>
                                            </li>
                                        </ul>
                                    </div>
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
