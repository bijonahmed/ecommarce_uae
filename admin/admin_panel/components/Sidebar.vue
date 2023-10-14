<template>
<!--sidebar wrapper -->
<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <div>
            <Nuxt-link to="/" href="javascript:;">
                <center><h4 class="logo-text text-center"><img src="/images/futuregenit-logo.png" width="180" alt="" /> </h4></center>
            </Nuxt-link>
        </div>
        <div class="toggle-icon ms-auto" @click="hideleftsidebar"><i class='bx bx-arrow-to-left'></i></div>
    </div>
    <!--navigation-->
    <ul class="metismenu sidebar" id="menu">
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
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Report</Nuxt-link>
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
<style>
/* Custom CSS for sidebar */
body {
    font-family: var(--bs-font-sans-serif);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: #212529;
    -webkit-text-size-adjust: 100%;
}
hr {
    margin: 0.5rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: .25;
}
.sidebar-wrapper .metismenu a .menu-title {
    margin-left: 1px;
}
.sidebar-wrapper .metismenu a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 1px 1px;
    font-size: 15px;
    width: 100%;
    color: #5f5f5f;
    outline-width: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    letter-spacing: .5px;
    border: 1px solid #ffffff00;
    transition: all .3s ease-out;
}
.sidebar-wrapper .metismenu ul a {
    padding: 0px 0px 0px 0px;
    font-size: 15px;
    border: 0;
}
.sidebar-wrapper {
	width: 250px;
	height: 100%;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	background: #000;
	border-right: 0 solid #e4e4e4;
	z-index: 11;
	box-shadow: 0 .3rem .8rem rgba(0, 0, 0, .12) !important;
	transition: all .2s ease-out;
}
.sidebar-wrapper .metismenu ul a {
	padding: 0px 0px 0px 10px;
	font-size: 15px;
	border: 0;
}
.sidebar-wrapper .metismenu ul {
	border: 1px solid #353434;
	background: #090808;
}
.sidebar-wrapper .metismenu a {
	font-size: 15px;
	color: #cecdcd;
	letter-spacing: .5px;
}
.sidebar-header {
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 0 15px;
  z-index: 5;
  background: #000;
    background-clip: border-box;
  background-clip: padding-box;
  border-bottom: 1px solid #e4e4e4;
}
</style>
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
        hideleftsidebar() {
            $(".wrapper").toggleClass("toggled");
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
