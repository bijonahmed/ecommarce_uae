<template>
<div class="page-wrapper">
    <div class="page-content">

        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item">
                            <router-link to="/hrm/dashboard" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                        </li>

                        <li class="breadcrumb-item active" aria-current="page">Leave Approval</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
            <div class="col">
                <div class="card radius-10 bg-gradient-deepblue">
                    <Nuxt-link to="/leave/leave-request-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Leave Request</p>

                                </div>
                                <div class="ms-auto">
                                    <i class='bx bx-cart fs-3 text-white'></i>
                                </div>
                            </div>

                        </div>
                    </Nuxt-link>
                </div>
            </div>
         

        </div>
        <!--end row-->

        <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
    </div>
</div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Leave Dashboard',
    },

};
</script>
