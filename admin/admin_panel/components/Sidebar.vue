<template>
<!--sidebar wrapper -->
<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <div>
            <Nuxt-link to="/" href="javascript:;">
                <h4 class="logo-text"><img src="/images/logo-img.png" alt="logo icon"> </h4>
            </Nuxt-link>
        </div>
        <div class="toggle-icon ms-auto" @click="hideleftsidebar"><i class='bx bx-arrow-to-left'></i></div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
        <li>
            <Nuxt-link to="/" href="javascript:;">
                <i class='bx bx-home-circle'></i>
                <div class="menu-title">Dashboard</div>
            </Nuxt-link>
        </li>
        <span v-if="user.role_id === 1">
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_15" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">HCM Master</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_15" style="width:100%;">
                    <li>
                        <Nuxt-link to="/employee/department-list"><i class="bx bx-right-arrow-alt"></i>Department</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/designation-list"><i class="bx bx-right-arrow-alt"></i>Designation</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/employee-type-list"><i class="bx bx-right-arrow-alt"></i>Employee Type</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/pay-group-list"><i class="bx bx-right-arrow-alt"></i>Pay Group</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/annual-pay-list"><i class="bx bx-right-arrow-alt"></i>Annual Pay</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/bank-master-list"><i class="bx bx-right-arrow-alt"></i>Bank Master</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/bank-short-code-list"><i class="bx bx-right-arrow-alt"></i>Bank ShortCode</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/tax-master-list"><i class="bx bx-right-arrow-alt"></i>Tax Master</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/payment-type-list"><i class="bx bx-right-arrow-alt"></i>Payment Type</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/wedges-pay-list"><i class="bx bx-right-arrow-alt"></i>Wedges Pay Mode</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/setting/payroll-payitem-list"><i class="bx bx-right-arrow-alt"></i>Payroll Pay Item</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Recruitment</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_1" style="width:100%;">
                    <li>
                        <Nuxt-link to="/recruitment/job-list"><i class="bx bx-right-arrow-alt"></i>Job List</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/job-posting-list"><i class="bx bx-right-arrow-alt"></i>Job Posting</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/job-publish-list"><i class="bx bx-right-arrow-alt"></i>Job Published</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/job-applied-list"><i class="bx bx-right-arrow-alt"></i>Job Applied</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/job-short-list"><i class="bx bx-right-arrow-alt"></i>Short Listing</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/job-interview-list"><i class="bx bx-right-arrow-alt"></i>Invterview</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/job-hired-list"><i class="bx bx-right-arrow-alt"></i>Hired</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/reject-list"><i class="bx bx-right-arrow-alt"></i>Rejected</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/generate-offer-letter-list"><i class="bx bx-right-arrow-alt"></i>Generate Offer Letter</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/report"><i class="bx bx-right-arrow-alt"></i>Report</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/message-center-list"><i class="bx bx-right-arrow-alt"></i>Message Center</Nuxt-link>
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
                        <Nuxt-link to="/employee/employee-list"><i class="bx bx-right-arrow-alt"></i>Employee</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/change-of-circumstances-list"><i class="bx bx-right-arrow-alt"></i>Change Of Circumstances</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/emp-assign-to-user"><i class="bx bx-right-arrow-alt"></i>Emp. Assign to User</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_30" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Holiday Management</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_30" style="width:100%;">
                    <li>
                        <Nuxt-link to="/holiday/holiday-type-list"><i class="bx bx-right-arrow-alt"></i>Holiday Type</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/holiday/holiday-list"><i class="bx bx-right-arrow-alt"></i>Holiday List</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_30" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Leave Management</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_30" style="width:100%;">
                    <li>
                        <Nuxt-link to="/leave/leave-type-list"><i class="bx bx-right-arrow-alt"></i>Manage Leave Type</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/leave/leave-role-list"><i class="bx bx-right-arrow-alt"></i>Leave Rule</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/leave/allocation-list"><i class="bx bx-right-arrow-alt"></i>Leave Allocation</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/leave/leave-balance-list"><i class="bx bx-right-arrow-alt"></i>Leave Balance</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/leave/leave-report"><i class="bx bx-right-arrow-alt"></i>Leave Report</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_7" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Organogram Chart</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_3" style="width:100%;">
                    <li>
                        <Nuxt-link to="/organogram/level-list"><i class="bx bx-right-arrow-alt"></i>Level</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/organogram/organisation-hierarchy-list"><i class="bx bx-right-arrow-alt"></i>Organisation Hierarchy</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_7" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Organisation</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_3" style="width:100%;">
                    <li>
                        <Nuxt-link to="/organisation/profile"><i class="bx bx-right-arrow-alt"></i>Organisation Profile</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/employee-list"><i class="bx bx-right-arrow-alt"></i>Employee Creation Link</Nuxt-link>
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
                    <div class="menu-title">Documents</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_6" style="width:100%;">
                    <li>
                        <Nuxt-link to="/documents/staff-report"><i class="bx bx-right-arrow-alt"></i>Staff Report</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/documents/archive"><i class="bx bx-right-arrow-alt"></i>Archive </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/organogram/organisation-hierarchy-list"><i class="bx bx-right-arrow-alt"></i>Organisation Report </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/documents/employee-report"><i class="bx bx-right-arrow-alt"></i>Employee Report </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/documents/employee-archive-report"><i class="bx bx-right-arrow-alt"></i>Employee Archive Report </Nuxt-link>
                    </li>

                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_32" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Rota</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_32" style="width:100%;">
                    <li>
                        <Nuxt-link to="/rota/shift-management-list"><i class="bx bx-right-arrow-alt"></i>Shift Management</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/rota/late-policy-list"><i class="bx bx-right-arrow-alt"></i>Late Policy</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/rota/day-off-list"><i class="bx bx-right-arrow-alt"></i>Day Off</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/rota/grace-period-list"><i class="bx bx-right-arrow-alt"></i>Grace Period</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/rota/duty-roster-list"><i class="bx bx-right-arrow-alt"></i>Duty Roster</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/rota/visitor-register-list"><i class="bx bx-right-arrow-alt"></i>Visitor Register</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_33" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Attendence Management</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_33" style="width:100%;">
                    <li>
                        <Nuxt-link to="/attendence/upload-attendance"><i class="bx bx-right-arrow-alt"></i>Upload Attendence</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/attendence/generate-attendance"><i class="bx bx-right-arrow-alt"></i>Generate Attendence</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/attendence/daily-attendance"><i class="bx bx-right-arrow-alt"></i>Daily Attendance</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/attendence/attendence-history"><i class="bx bx-right-arrow-alt"></i>Attendence History</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/attendence/process-attendence"><i class="bx bx-right-arrow-alt"></i>Process Attendence</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/attendence/absent-report"><i class="bx bx-right-arrow-alt"></i>Absent Report</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_33" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Leave Approval</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_33" style="width:100%;">
                    <li>
                        <Nuxt-link to="/leave/leave-request-list"><i class="bx bx-right-arrow-alt"></i>Leave Request </Nuxt-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_34" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Sponsor Compliance</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_34" style="width:100%;">
                    <li>
                        <Nuxt-link to="/organisation/profile"><i class="bx bx-right-arrow-alt"></i>Organisation Profile</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/employee-list"><i class="bx bx-right-arrow-alt"></i>All Employee List </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/migrant-employee-list"><i class="bx bx-right-arrow-alt"></i>Migrant Employee List</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/employee-list"><i class="bx bx-right-arrow-alt"></i>Right to Work checks </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/recruitment/dashboard"><i class="bx bx-right-arrow-alt"></i>Recruitment Process</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/leave/dashboard"><i class="bx bx-right-arrow-alt"></i>Leave Management </Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Key Contact</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Monitoring & Reporting </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Message Centre </Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="/documents/employee-report"><i class="bx bx-right-arrow-alt"></i>Staff Report</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="/attendence/absent-report"><i class="bx bx-right-arrow-alt"></i>Absent Report</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/change-of-circumstances-list"><i class="bx bx-right-arrow-alt"></i>Change Of Circumstances</Nuxt-link>
                    </li>

                    <li>
                        <Nuxt-link to="#"><i class="bx bx-right-arrow-alt"></i>Contract Agreement</Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow nav-link dropdown-toggle" id="submenuDropdown_35" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bx bx-category"></i>
                    <div class="menu-title">Billing</div>
                </a>
                <ul class="menu dropdown-menu" aria-labelledby="submenuDropdown_35" style="width:100%;">
                    <li>
                        <Nuxt-link to="/billing/billing-list"><i class="bx bx-right-arrow-alt"></i>Billing List </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/billing/payment-receipt-list"><i class="bx bx-right-arrow-alt"></i>Payment Receipt </Nuxt-link>
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
                        <Nuxt-link to="/employee/attendance-status"><i class="bx bx-right-arrow-alt"></i>Attendance Status</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/employee/change-of-circumstances-employee"><i class="bx bx-right-arrow-alt"></i>Change Of Circumstances</Nuxt-link>
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
