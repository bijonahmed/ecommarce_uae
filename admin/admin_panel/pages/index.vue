<template>
<div class="page-wrapper" v-if="$auth.loggedIn">
    <div class="page-content">
        <span v-if="userData.role_id === 1">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-5">


                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/hrm/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">HRM</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-envelope fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>
                
            </div>
        </span>

        <span v-else-if="userData.role_id==2">

            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-5">

                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/profile">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">View Profile</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-envelope fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                
 

                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/employee/leave-approval-list">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Leave Approval</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-envelope fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

            </div>
        </span>

        <!--end row-->
        <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
    </div>
</div>
</template>

<script>
export default {
    head: {
        title: 'Dashboard',
    },

    data() {
        return {
            userData: {
                role_id: '',
            },
        }
    },
    mounted() {
        this.defaultLoadingData();
    },
    computed: {

        loggedIn() {
            return this.$store.state.auth.loggedIn;
        },
        user() {
            return this.$store.state.auth.user
        }
    },
    methods: {

        defaultLoadingData() {
            this.$axios.get('/auth/showProfileData').then(response => {
                console.log(response.data.data.role_id)
                this.userData.role_id = response.data.data.role_id;

            });
        },
    },

}
</script>

<style>
</style>
