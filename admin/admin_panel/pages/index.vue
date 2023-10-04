<template>
<div class="page-wrapper" v-if="$auth.loggedIn">
    <div class="page-content">
        <span v-if="userData.role_id === 1">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-5">

                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/setting/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">HCM Master</p>
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
                        <Nuxt-link to="/recruitment/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Recruitment</p>
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
                        <Nuxt-link to="/employee/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Employee</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-cart fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <Nuxt-link to="/holiday/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Holiday Management</p>
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
                        <Nuxt-link to="/leave/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Leave Management</p>
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
                    <div class="card radius-10 bg-gradient-ibiza">
                        <Nuxt-link to="/organogram/organisation-hierarchy-list">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Organogram Chart</p>
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
                        <Nuxt-link to="/organisation/profile">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Organisation Profile</p>
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
                    <div class="card radius-10 bg-gradient-orange">
                        <Nuxt-link to="/user/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Users</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-group fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                        <Nuxt-link to="/task/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Task</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-group fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                        <Nuxt-link to="/documents/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Document</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-group fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                        <Nuxt-link to="/rota/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Rota</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-group fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                        <Nuxt-link to="/attendence/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Attendance Management</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-group fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                        <Nuxt-link to="/leave/leave-request-dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Leave Approval</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-group fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                        <Nuxt-link to="/sponsor/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Sponsor Compliance</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-group fs-3 text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>

                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                        <Nuxt-link to="/billing/dashboard">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Billing</p>
                                    </div>
                                    <div class="ms-auto">
                                        <i class='bx bx-group fs-3 text-white'></i>
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
                        <Nuxt-link to="/employee/attendance-status">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Attendance Status</p>
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
                        <Nuxt-link to="/employee/change-of-circumstances-employee">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center text-white">
                                        <p class="mb-0">Circumstances</p>
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
