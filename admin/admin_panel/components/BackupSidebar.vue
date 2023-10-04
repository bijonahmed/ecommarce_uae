<template>
<!--sidebar wrapper -->
<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <div>
            <Nuxt-link to="/" href="javascript:;">
                <h4 class="logo-text"><img src="/images/logo-img.png" alt="logo icon"> </h4>
            </Nuxt-link>
        </div>
        <!-- <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
        </div> -->
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
        <li>
            <Nuxt-link to="/" href="javascript:;">
                <i class='bx bx-home-circle'></i>
                <div class="menu-title">Dashboard</div>
            </Nuxt-link>

        </li>
        <li>
            <Nuxt-link to="/task/add-task" href="javascript:;">
                <i class="bx bx-right-arrow-alt"></i>
                <div class="menu-title">Assign Task</div>
            </Nuxt-link>

        </li> 
        <li>
            <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bx bx-category"></i>

                <div class="menu-title">Customer</div>
            </a>
            <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_1" style="width:100%;">
                <li>
                    <Nuxt-link to="/lead/leadList"><i class="bx bx-right-arrow-alt"></i>Lead List</Nuxt-link>
                </li>
                <li>
                    <Nuxt-link to="/lead/lead-add"><i class="bx bx-right-arrow-alt"></i>Add Lead</Nuxt-link>
                </li>
                <li>
                    <Nuxt-link to="/customer/customerList"><i class="bx bx-right-arrow-alt"></i>Customer List</Nuxt-link>
                </li>
                <li>
                    <Nuxt-link to="/customer/newCustomer"><i class="bx bx-right-arrow-alt"></i>Add Customer</Nuxt-link>
                </li>

            </ul>
        </li>

        <li>
            <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bx bx-category"></i>

                <div class="menu-title">Appointment</div>
            </a>
            <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_2" style="width:100%;">
                <li>
                    <Nuxt-link to="/appointment/appointment-list"><i class="bx bx-right-arrow-alt"></i>Appointment List</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/appointment/appointment-add"><i class="bx bx-right-arrow-alt"></i>Add Appointment</Nuxt-link>
                </li>
            </ul>
        </li>

        <li>
            <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bx bx-category"></i>

                <div class="menu-title">Employee</div>
            </a>
            <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_3" style="width:100%;">
                <li>
                    <Nuxt-link to="/employee/department-list"><i class="bx bx-right-arrow-alt"></i>Department List</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/employee/department-add"><i class="bx bx-right-arrow-alt"></i>Add Department</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/employee/designation-list"><i class="bx bx-right-arrow-alt"></i>Designation List</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/employee/designation-add"><i class="bx bx-right-arrow-alt"></i>Add Designation</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/employee/employee-list"><i class="bx bx-right-arrow-alt"></i>Employee List</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/employee/employee-add"><i class="bx bx-right-arrow-alt"></i>Add Employee</Nuxt-link>
                </li>
            </ul>
        </li>

        <li>
            <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bx bx-category"></i>

                <div class="menu-title">User</div>
            </a>
            <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_4" style="width:100%;">
                <li>
                    <Nuxt-link to="/role/role_list"><i class="bx bx-right-arrow-alt"></i>Role List</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/role/newrole"><i class="bx bx-right-arrow-alt"></i>Add Role</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/user/user_list"><i class="bx bx-right-arrow-alt"></i>User List</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/user/newUser"><i class="bx bx-right-arrow-alt"></i>Add User</Nuxt-link>
                </li>
            </ul>
        </li>

        <li>
            <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bx bx-category"></i>

                <div class="menu-title">Task</div>
            </a>
            <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_5" style="width:100%;">
                <li>
                    <Nuxt-link to="/project/project-list"><i class="bx bx-right-arrow-alt"></i>Project List</Nuxt-link>
                </li>
                <li>
                    <Nuxt-link to="/project/new-project"><i class="bx bx-right-arrow-alt"></i>Add Project</Nuxt-link>
                </li>

                <li>
                    <Nuxt-link to="/task/task-list"><i class="bx bx-right-arrow-alt"></i>Task List</Nuxt-link>
                </li>
                <li>
                    <Nuxt-link to="/task/add-task"><i class="bx bx-right-arrow-alt"></i>Add Task</Nuxt-link>
                </li>
            </ul>
        </li>


        <li>
            <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_6" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bx bx-category"></i>

                <div class="menu-title">Upload Documents</div>
            </a>
            <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_6" style="width:100%;">
                <li>
                    <Nuxt-link to="/documents/documents-list"><i class="bx bx-right-arrow-alt"></i>Documents List</Nuxt-link>
                </li>
                <li>
                    <Nuxt-link to="/documents/new-documents"><i class="bx bx-right-arrow-alt"></i>Add Documents</Nuxt-link>
                </li>

              
            </ul>
        </li>

    </ul>

    <!--end navigation-->

</div>
<!--end sidebar wrapper -->
</template>

<style>
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
</style>

<script>
export default {

    methods: {
        toggleMenu() {
            this.$root.$emit("bv::toggle::collapse", "menu-collapse");
        },
    },
};
</script>
