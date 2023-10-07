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
                                <router-link to="/leave/leave-role-list">Leave Role List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Leave Role</li>
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
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Employee Type</label>
                                        <div class="col-sm-9">
                                            <select name="employee_type_id" v-model="insertdata.employee_type_id" class="form-select employee_type_id">
                                                <option value="">Select</option>
                                                <option v-for='data in empType' :value='data.id'>{{ data.name }}
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.employee_type_id">{{ errors.employee_type_id[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Leave Type</label>
                                        <div class="col-sm-9">
                                            <select name="leave_type_id" v-model="insertdata.leave_type_id" class="form-select leave_type_id">
                                                <option value="">Select</option>
                                                <option v-for='data in leaveType' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.leave_type_id">{{ errors.leave_type_id[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Maximum No. (Annual)</label>
                                        <div class="col-sm-9">
                                            <input type="hidden" class="form-control id" v-model="insertdata.id" id="id">
                                            <input type="text" class="form-control maximum_no_annual" v-model="insertdata.maximum_no_annual" id="maximum_no_annual">
                                            <span class="text-danger" v-if="errors.maximum_no_annual">{{ errors.maximum_no_annual[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Effective From</label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control effective_from" v-model="insertdata.effective_from" id="effective_from">
                                            <span class="text-danger" v-if="errors.effective_from">{{ errors.effective_from[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Effective To</label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control effective_to" v-model="insertdata.effective_to" id="code">
                                            <span class="text-danger" v-if="errors.effective_to">{{ errors.effective_to[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
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
        title: 'Leave Rule Edit',
    },

    data() {
        return {
            insertdata: {
                id: '',
                employee_type_id: '',
                leave_type_id: '',
                maximum_no_annual: '',
                effective_from: '',
                effective_to: '',
                status: '',
            },
            empType: [],
            leaveType: [],
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

        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('employee_type_id', this.insertdata.employee_type_id);
            formData.append('leave_type_id', this.insertdata.leave_type_id);
            formData.append('maximum_no_annual', this.insertdata.maximum_no_annual);
            formData.append('effective_from', this.insertdata.effective_from);
            formData.append('effective_to', this.insertdata.effective_to);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/leave/createEditLeaveRule',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/leave/leave-role-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },

        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/leave/leaveRulerow/${id}`).then(response => {
                // console.log(response.data.data.name)
                this.insertdata.id = response.data.data.id;
                this.insertdata.employee_type_id = response.data.data.employee_type_id;
                this.insertdata.leave_type_id = response.data.data.leave_type_id;
                this.insertdata.maximum_no_annual = response.data.data.maximum_no_annual;
                this.insertdata.effective_from = response.data.data.effective_from;
                this.insertdata.effective_to = response.data.data.effective_to;
                this.insertdata.status = response.data.data.status;
            });

        },
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
