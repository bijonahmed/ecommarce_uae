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

    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="user_sidebar">

                        <div class="user_page_list">
                            <ul>
                                <li class="active">
                                    <Nuxt-link to="/user/user-profile">User Account </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/user/user-orders">My Orders </Nuxt-link>
                                </li>
                                <li class="">
                                    <Nuxt-link to="/user/user-whichlist">Wishlist </Nuxt-link>
                                </li>
                                <li class="d-none">
                                    <Nuxt-link to="/user/my-reviews">My Reviews </Nuxt-link>
                                </li>
                                <li class="">
                                    <a href="#" @click="logout">LogOut </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="loading-indicator" v-if="loading">
                        <div class="loader-container">
                            <center class="loader-text">Loading...</center>
                            <img src="/loader/loader.gif" alt="Loader" />
                        </div>
                    </div>
                    <div class="main_profile">
                        <div class="user">
                            <!-- <img src="/images/powerUp.jpg" class="img-fluid" alt=""> -->
                            <h3>{{ userdata.name }}</h3>
                            <p><strong>Registerd at:</strong>{{ userdata.created_at }}</p>
                        </div>
                        <div class="user_details">
                            <div class="d-flex align-items-center justify-content-between">
                                <h4>Contact Details </h4>
                                <button type="button" class="btn_edit" @click="updateProfile"><i class="fa-solid fa-pen"></i></button>
                                <!-- profile update modal here  -->
                                <div class="modal_address_here profileupdate">
                                    <div class="address_form_modal">
                                        <div class="d-flex justify-content-between">
                                            <p>Update Personal Details </p>
                                            <button type="button" class="btn-close btn_address_close" @click="closeProfile"></button>
                                        </div>
                                        <form @submit.prevent="profileupdate()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">

                                            <div>
                                                <label for="">Email </label>
                                                <!-- <input type="email" value="usermail@mail.com"  class="form-control"  > -->
                                                <p>{{ userdata.email }}</p>
                                            </div>
                                            <div>
                                                <label for="name">Name</label>
                                                <input type="text" name="name" id="name" class="form-control" v-model="userdata.name">
                                            </div>
                                            <div class="">
                                                <label for="">Address 1 </label> <br>
                                                <input type="text" id="" class="form-control" placeholder="Address 1" name="name" v-model="userdata.address_1">

                                            </div>
                                            <div class="">
                                                <label for="">Address 2 </label> <br>
                                                <input type="text" id="" class="form-control" placeholder="Address 2" name="name" v-model="userdata.address_2">

                                            </div>

                                            <div class="">
                                                <label for="">Address 3 </label> <br>
                                                <input type="text" id="" class="form-control" placeholder="Address 3" name="name" v-model="userdata.address_3">

                                            </div>

                                            <div>
                                                <button type="submit" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                            </div>

                                        </form>
                                        <hr>
                                    
                                        <div class="card-body">
                                            <div class="border p-4 rounded">
    <center>Change Password</center>
                                                <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                                    <div class="row mb-3">
                                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Password</label>
                                                        <div class="col-sm-9">
                                                            <input type="password" class="form-control password" v-model="passdata.password" id="password" placeholder="Password">
                                                            <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Confirm Password</label>
                                                        <div class="col-sm-9">
                                                            <input type="password" class="form-control password_confirmation" v-model="passdata.password_confirmation" id="password_confirmation" placeholder="Confirm Password">
                                                            <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <label class="col-sm-3 col-form-label"></label>
                                                     
                                                            <button type="submit" class="btn_cart px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                                        
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- modal end  -->
                            </div>
                            <div class="user_info">
                                <h5>Name</h5>
                                <p>{{ userdata.name }} </p>
                            </div>
                            <div class="user_info">
                                <h5>Email</h5>
                                <p>{{ userdata.email }}</p>
                            </div>
                            <div class="user_info">
                                <h5>Phone</h5>
                                <p>{{ userdata.phone_number }} <strong>(Default)</strong></p>
                            </div>

                            <div class="user_info">
                                <h5>Address 1</h5>
                                <p> {{ userdata.address_1 }}</p>

                            </div>

                            <div class="user_info">
                                <h5>Address 2: </h5>
                                <p> {{ userdata.address_2 }} </p>
                            </div>

                            <div class="user_info">
                                <h5>Address 3: </h5>
                                <p> {{ userdata.address_3 }}</p>
                            </div>

                        </div>
                        <div class="recent_orders">
                            <h4>Recent Orders </h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Place On </th>
                                        <th>Total </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="order in orders" :key="order.id">
                                        <td>{{ order.orderId }}</td>
                                        <td>{{ order.placeOn }}</td>
                                        <td>{{ order.total }}</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- END Main Section here -->
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

export default {
    middleware: 'auth',
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,

    },
    head: {
        title: 'My Profile',
    },

    data() {
        return {
            loading: false,
            userdata: {
                name: '',
                email: '',
                phone_number: '',
                address: '',
                address_1: '',
                address_2: '',
                address_3: '',
                created_at: null,
            },
            passdata: {
                password: '',
                password_confirmation: '',
            },
            notifmsg: '',
            orders: [],
            errors: {},
        }
    },
    mounted() {

        this.defaultLoading();
        this.loadingOrders();

    },
    methods: {
        saveData() {
            const formData = new FormData();
            formData.append('password', this.passdata.password);
            formData.append('password_confirmation', this.passdata.password_confirmation);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updatePassword',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                    alert("success");
                this.$router.push('/user/user-profile');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        updateProfile() {
            $(".profileupdate").fadeIn();
        },
        closeProfile() {
            $(".profileupdate").fadeOut();
        },

        profileupdate() {
            const formData = new FormData();
            formData.append('name', this.userdata.name);
            formData.append('email', this.userdata.email);
            formData.append('phone_number', this.userdata.phone_number);
            formData.append('address_1', this.userdata.address_1);
            formData.append('address_2', this.userdata.address_2);
            formData.append('address_3', this.userdata.address_3);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updateprofile',
                formData, {
                    headers
                }).then((res) => {
                $(".profileupdate").fadeOut();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your profile has been successfully updated",
                    showConfirmButton: false,
                    timer: 1500
                });

            });

        },
        async defaultLoading() {

            this.loading = true;
            await this.$axios.post(`/auth/me`).then(response => {
                    this.userdata.name = response.data.name;
                    this.userdata.email = response.data.email;
                    this.userdata.phone_number = response.data.phone_number;
                    this.userdata.address = response.data.address;
                    this.userdata.address_1 = response.data.address_1;
                    this.userdata.address_2 = response.data.address_2;
                    this.userdata.address_3 = response.data.address_3;
                    // Assuming response.data.created_at is a date string like "2023-11-18T03:04:53.000000Z"
                    const createdAtDate = new Date(response.data.created_at);

                    // Format the date as "YYYY-MM-DD"
                    const formattedCreatedAt = createdAtDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    }).replace(/-/g, '');

                    this.userdata.created_at = formattedCreatedAt;

                    console.log("Formatted created_at: " + formattedCreatedAt);

                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });

        },

        async loadingOrders() {
            const response = await this.$axios.get(`/order/getOrder`);
            this.orders = response.data.orderdata;

        },
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            });
        },
        logout() {
            localStorage.removeItem('jwtToken');
            this.$router.push('/');
        },
    }
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
