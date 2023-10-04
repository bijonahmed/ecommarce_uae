<template>
<div class="page-wrapper">
    <div class="page-content">
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item">
                            <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                        </li>

                        <li class="breadcrumb-item active" aria-current="page">Recruitment</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
            <div class="col">
                <div class="card radius-10 bg-gradient-deepblue">
                    <Nuxt-link to="/recruitment/job-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Job List</p>

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
                <div class="card radius-10 bg-gradient-orange">
                    <Nuxt-link to="/recruitment/job-posting-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Job Posting</p>

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
                    <Nuxt-link to="/recruitment/job-publish-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Job Publish</p>

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
                <div class="card radius-10 bg-gradient-ibiza">
                    <Nuxt-link to="/recruitment/job-applied-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Job Applied</p>
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
                    <Nuxt-link to="/recruitment/job-short-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Short List</p>
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
                    <Nuxt-link to="/recruitment/job-interview-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Invterview </p>
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
                    <Nuxt-link to="/recruitment/job-hired-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Hired </p>
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
                    <Nuxt-link to="/recruitment/reject-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Rejected </p>
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
                    <Nuxt-link to="/setting/payment-type-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Payment Type</p>
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
                    <Nuxt-link to="/recruitment/generate-offer-letter-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Offer Letter</p>
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
                    <Nuxt-link to="/recruitment/report">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Report</p>
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
                    <Nuxt-link to="/recruitment/payroll-payitem-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Payroll Pay Item</p>
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
        title: 'Setting Dashboard',
    },

};
</script>
