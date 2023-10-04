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
                           
                            <li class="breadcrumb-item active" aria-current="page">MCH Master</li>
                        </ol>
                    </nav>
                </div>
            </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
            <div class="col">
                <div class="card radius-10 bg-gradient-deepblue">
                    <Nuxt-link to="/employee/department-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Department</p>

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
                    <Nuxt-link to="/employee/designation-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Designation</p>

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
                    <Nuxt-link to="/setting/employee-type-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Employee Type</p>

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
                    <Nuxt-link to="/setting/pay-group-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Pay Group</p>
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
                    <Nuxt-link to="/setting/annual-pay-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Annual Pay</p>
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
                    <Nuxt-link to="/setting/bank-master-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Bank Master</p>
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
                    <Nuxt-link to="/setting/bank-short-code-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Bank Short Code</p>
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
                    <Nuxt-link to="/setting/tax-master-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Tax Master</p>
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
                    <Nuxt-link to="/setting/wedges-pay-list">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center text-white">
                                    <p class="mb-0">Wedges Pay Mode</p>
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
                    <Nuxt-link to="/setting/payroll-payitem-list">
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
