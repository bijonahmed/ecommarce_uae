<template>
<!--sidebar wrapper -->
<div class="sidebar-wrapper" data-simplebar="true" style="background-color: black;">
    <div class="sidebar-header">
        <div>
            <Nuxt-link to="/" href="javascript:;">
                <h4 class="logo-text"><img src="/images/futuregenit-logo.png" style="height: 40px; width:100px;" alt="logo icon"> </h4>
            </Nuxt-link>
        </div>
        <div class="toggle-icon ms-auto" @click="toggleMenu"><i class='bx bx-arrow-to-left'></i>
        </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu-collapse" is-nav>
        <li>
            <Nuxt-link to="/" href="javascript:;">
                <i class='bx bx-home-circle'></i>
                <div class="menu-title">Dashboard</div>
            </Nuxt-link>
        </li>
        <span v-if="user.role_id === 1">
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_30" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">My Products</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_30" style="width:100%;">
                    <li>
                        <Nuxt-link to="/ecommarce/product-list"><i class="bx bx-right-arrow-alt"></i>Product</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Product Review</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Seller Product</Nuxt-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_31" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Sales</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_31" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>All Orders</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Inhouse orders</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Seller Orders</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Pickup- Point Order</Nuxt-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_32" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Delivery Boy</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_32" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>All Delivery Boy</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Add Delivery Boy</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Payment Histories</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Collected Histories</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Cancel Request</Nuxt-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_33" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Refund</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_33" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Refund Requests</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Approved Refunds</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i> Rejected Refunds</Nuxt-link>
                    </li>

                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_34" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Customer</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_34" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Customer Add</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Customer List</Nuxt-link>
                    </li>

                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_34" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Sellers</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_34" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>All Sellers</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Payouts</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Payouts Request</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Seller Commission</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Seller Packages</Nuxt-link>
                    </li>

                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_34" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Reports</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_34" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Sellers Producs Sales</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Products Stock </Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Products wishlist </Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Users Searches</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Commission History</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Wallet Recharge History</Nuxt-link>
                    </li>

                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_34" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Blog System</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_34" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Category</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Posts</Nuxt-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_34" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Support</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_34" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Ticket</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Product Conversations</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Product Queries</Nuxt-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_34" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Affliate System</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_34" style="width:100%;">
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Affliate Configrations</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Affliate Users</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Referral Users</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Affliate Withdraw Requests</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Affiliate Logs</Nuxt-link>
                    </li>

                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_30" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Ecommarce Setting</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_30" style="width:100%;">
                    <li>
                        <Nuxt-link to="/ecommarce/category-list"><i class="bx bx-right-arrow-alt"></i>Category</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/ecommarce/attributes-list"><i class="bx bx-right-arrow-alt"></i>Attributes</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/manufacturer/manufacturers-list"><i class="bx bx-right-arrow-alt"></i>Manufacturers</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/brands/brands-list"><i class="bx bx-right-arrow-alt"></i>Brands</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_15" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">HRM</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_15" style="width:100%;">
                    <li>
                        <Nuxt-link to="/setting/dashboard"><i class="bx bx-right-arrow-alt"></i>Setting Master</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/dashboard"><i class="bx bx-right-arrow-alt"></i>Employee</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/holiday/dashboard"><i class="bx bx-right-arrow-alt"></i>Holiday</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/leave/dashboard"><i class="bx bx-right-arrow-alt"></i>Leave Management</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/task/dashboard"><i class="bx bx-right-arrow-alt"></i>Task</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/leave/leave-request-list"><i class="bx bx-right-arrow-alt"></i>Leave Request </Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">User Management</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_4" style="width:100%;">
                    <li>
                        <Nuxt-link to="/role/role_list"><i class="bx bx-right-arrow-alt"></i>Role List</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="/user/user_list"><i class="bx bx-right-arrow-alt"></i>User List</Nuxt-link>
                    </li>

                </ul>
            </li>
        </span>
        <span v-else-if="user.role_id==2">
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_35" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Employee Access Value</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_35" style="width:100%;">
                    <li>
                        <Nuxt-link to="/profile"><i class="bx bx-right-arrow-alt"></i>View Profile</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/leave-approval-list"><i class="bx bx-right-arrow-alt"></i>Leave Approval List</Nuxt-link>
                    </li>
                </ul>
            </li>
        </span>
    </ul>

    <!--end navigation-->

</div>
<!--end sidebar wrapper -->
</template>

<script>
export default {
    data() {
        return {
            user: {
                role_id: '',
            },
        }
    },
    mounted() {
        this.defaultLoadingData();
    },
    methods: {
        toggleMenu() {
            const wrapper = document.querySelector('.wrapper');
            if (wrapper.classList.contains('toggled')) {
                wrapper.classList.remove('toggled');
            } else {
                wrapper.classList.add('toggled');
            }
        },
        defaultLoadingData() {
            this.$axios.get('/auth/showProfileData').then(response => {
                console.log(response.data.data.role_id)
                this.user.role_id = response.data.data.role_id;
            });
        },
    },
};
</script>
