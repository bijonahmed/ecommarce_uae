<template>
<div>
    <div class="nav_bar desktop_view">
        <button type="button" class="btn_menu"><i class="fa-solid fa-bars-staggered"></i></button>
        <div class="nav_menu nav_op ">
            <nav>
                <ul v-for="(category, index) in categories" :key="category.id">
                    <li :key="category.id" v-if="index < limit">
                        <a href="#" class="d-flex justify-content-between align-items-center" @click="redirectCategory(category.slug)">
                            <div class="d-flex align-items-center"><img src="/images/cat_svg/icons8-apple-100.png" alt="">{{ category.name }}</div> <i class="fa-solid fa-angle-right"></i>
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
                            <div><img src="/images/cat_svg/more-100.png" alt="">Other Categories</div>
                            <div><i class="fa-solid fa-angle-right"></i></div>
                        </Nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            limit: 12,
            categories: [],
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
            const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
            this.categories = response.data;
        },

    },
};
</script>
