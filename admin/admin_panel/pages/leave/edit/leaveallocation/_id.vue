<template>
<div>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item">
                                <router-link to="/hrm/dashboard" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <router-link to="/leave/allocation-list">Leave Allocation List </router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Leave Allocation</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->

            <!--end row-->
            <div class="row">
                <div class="col-xl-12 mx-auto">
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="card-body">
                            <div class="border p-4 rounded">

                                <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                    <input type="hidden" class="form-control id" v-model="insertdata.id">
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Employee Type</label>
                                        <div class="col-sm-9">
                                            <select name="employee_type" v-model="insertdata.employee_type" class="form-select employee_type" @change="getEmployee">
                                                <option value="">Select</option>
                                                <option v-for='data in empType' :value='data.name'>{{ data.name }}
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.employee_type">{{ errors.employee_type[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Employee</label>
                                        <div class="col-sm-9">
                                            <select name="employe_id" v-model="insertdata.employe_id" class="form-select employe_id" @change="getLeaveRulesInfo">
                                                <option value="">All</option>
                                                <option v-for='data in emp_data' :value='data.employe_id'>{{ data.name }} [{{ data.employee_code }}]
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.employe_id">{{ errors.employe_id[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Leave Type</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control leave_type" v-model="insertdata.leave_type" disabled>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Max No.</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control maximum_no_annual" v-model="insertdata.maximum_no_annual" disabled>
                                            <input type="hidden" v-model="insertdata.maximum_no_annual" />
                                            <input type="hidden" v-model="insertdata.leave_type" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Choose Year</label>
                                        <div class="col-sm-9">
                                            <select name="year" v-model="insertdata.year" class="form-select year">
                                                <option value="">Select</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.year">{{ errors.year[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Leave in Hand </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control leave_in_hand" v-model="insertdata.leave_in_hand">
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Effective Year </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control leave_type" v-model="insertdata.effective_year">
                                            <span class="text-danger" v-if="errors.effective_year">{{ errors.effective_year[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3 d-none">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.status" class="form-select">
                                                <option value="1" selected>Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.status">{{ errors.status[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
    </div>
    <!--end page wrapper -->
</div>
</template>

<script>
export default {
    head: {
        title: 'Leave Allocation Edit',
    },

    data() {
        return {
            insertdata: {
                id: '',
                employee_type: '',
                employe_id: '',
                maximum_no_annual: '',
                leave_type: '',
                leave_in_hand: '',
                effective_year: '',
                year: '',
                status: 1,
            },
            empType: [],
            leaveType: [],
            emp_data: [],
            notifmsg: '',
            errors: {},
        }
    },
    created() {
        this.getData();
        this.getEmployeeType();
        this.getLeaveType();
    },
    methods: {
        getEmployeeType() {
            this.$axios.get(`/user/allemployeeType`).then(response => {
                this.empType = response.data.data;
            });
        },
        getLeaveType() {
            this.$axios.get(`/leave/getLeaveTypeList`).then(response => {
                this.leaveType = response.data.data;
            });
        },
        getEmployee() {
            var employee_type = this.insertdata.employee_type;
            this.$axios.get(`/user/getEmpType/${employee_type}`).then(response => {
                this.emp_data = response.data.data;
            });
        },
        getEmployeeSelect(employee_type) {
           // var employee_type = this.insertdata.employee_type;
            this.$axios.get(`/user/getEmpType/${employee_type}`).then(response => {
                this.emp_data = response.data.data;
            });
        },
        getLeaveRulesInfo() {
            const employee_type = $(".employee_type").val();
            const emp_id = $(".employe_id").val();
            const params = {
                employee_type: employee_type,
                emp_id: emp_id
            };
            this.$axios.get(`/leave/getLeaveRulesCheck`, {
                params: params
            }).then(response => {
                console.log(response.data.data.maximum_no_annual);
                this.insertdata.maximum_no_annual = response.data.data.maximum_no_annual;
                this.insertdata.leave_type = response.data.data.leave_type;
                this.insertdata.leave_in_hand = response.data.data.leave_in_hand;
            });
        },
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('maximum_no_annual', this.insertdata.maximum_no_annual);
            formData.append('leave_type', this.insertdata.leave_type);
            formData.append('employee_type', this.insertdata.employee_type);
            formData.append('leave_in_hand', this.insertdata.leave_in_hand);
            formData.append('effective_year', this.insertdata.effective_year);
            formData.append('employe_id', this.insertdata.employe_id);
            formData.append('year', this.insertdata.year);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/leave/createEditLeaveAllocation',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/leave/allocation-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },

        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/leave/leaveAllocationRow/${id}`).then(response => {
                // console.log(response.data.data.name)
                this.insertdata.id = response.data.data.id;
                this.insertdata.maximum_no_annual = response.data.data.maximum_no_annual;
                this.insertdata.leave_type = response.data.data.leave_type;
                this.insertdata.employee_type = response.data.data.employee_type;
                this.insertdata.leave_in_hand = response.data.data.leave_in_hand;
                this.insertdata.effective_year = response.data.data.effective_year;
                this.insertdata.employe_id = response.data.data.employe_id;
                this.insertdata.year = response.data.data.year;
                this.insertdata.status = response.data.data.status;
                this.getEmployeeSelect(response.data.data.employee_type);

            });

        },

        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Your data has been successfully inserted.'
            });
        },

    },
}
</script>
