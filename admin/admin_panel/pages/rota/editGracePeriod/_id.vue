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
                                <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <router-link to="/rota/grace-period-list">Grace Period List </router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Grace Period</li>
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
                                        <label for="inputpassword_confirmation2" class="col-sm-3 col-form-label">Department</label>
                                        <div class="col-sm-9">
                                            <select name="department_id" v-model="insertdata.department_id" class="form-select department_id">
                                                <option value="" selected>Select</option>
                                                <option v-for='data in dept' :value='data.id'>{{data.name}}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.department_id">{{ errors.department_id[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputpassword_confirmation2" class="col-sm-3 col-form-label">Designation</label>
                                        <div class="col-sm-9">
                                            <select name="designation_id" v-model="insertdata.designation_id" class="form-select designation_id">
                                                <option value="" selected>Select</option>
                                                <option v-for='data in desig' :value='data.id'>{{data.name}}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.designation_id">{{ errors.designation_id[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Shift Code</label>
                                        <div class="col-sm-9">

                                            <select name="shift_id" v-model="insertdata.shift_id" class="form-select shift_id">
                                                <option value="" selected>Select</option>
                                                <option v-for='data in sCode' :value='data.id'>{{data.shift_code}}</option>
                                            </select>

                                            <span class="text-danger" v-if="errors.shift_id">{{ errors.shift_id[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Work In Time</label>
                                        <div class="col-sm-9">
                                            <input type="time" class="form-control work_in_time" v-model="insertdata.work_in_time" id="work_in_time">
                                            <span class="text-danger" v-if="errors.work_in_time">{{ errors.work_in_time[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Grace Period</label>
                                        <div class="col-sm-9">
                                            <input type="time" class="form-control grace_period" v-model="insertdata.grace_period" id="no_days_allow">
                                            <span class="text-danger" v-if="errors.grace_period">{{ errors.grace_period[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3 d-none">
                                        <label for="inputpassword_confirmation2" class="col-sm-3 col-form-label">Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.status" class="form-select">
                                                <option value="1" selected>Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
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
        title: 'Edit Grace Period'
    },
    data() {
        return {
            insertdata: {
                id: '',
                department_id: '',
                designation_id: '',
                shift_id: '',
                work_in_time: '',
                grace_period: '',
                status: 1,
            },
            notifmsg: '',
            errors: {},
            dept: [],
            sCode: [],
            desig: [],
        }
    },
    created() {
        this.department();
        this.designation();
        this.shiftcode();
        this.getData();
    },
    methods: {
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('department_id', this.insertdata.department_id);
            formData.append('designation_id', this.insertdata.designation_id);
            formData.append('shift_id', this.insertdata.shift_id);
            formData.append('work_in_time', this.insertdata.work_in_time);
            formData.append('grace_period', this.insertdata.grace_period);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/rota/createEditGracePeriod',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/rota/grace-period-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        department() {
            this.$axios.get('/user/getDepartmentList').then(response => {
                this.dept = response.data.data;
            });
        },
        designation() {
            this.$axios.get('/user/getDesignationList').then(response => {
                this.desig = response.data.data;
            });
        },
        shiftcode() {
            this.$axios.get('/rota/allShiftInfo').then(response => {
                this.sCode = response.data.data;
            });

        },
        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/rota/getLateGracePolicyRow/${id}`).then(response => {
                console.log(response.data.data.name)
                this.insertdata.id = response.data.data.id;
                this.insertdata.department_id = response.data.data.department_id;
                this.insertdata.designation_id = response.data.data.designation_id;
                this.insertdata.shift_id = response.data.data.shift_id;
                this.insertdata.work_in_time = response.data.data.work_in_time;
                this.insertdata.grace_period = response.data.data.grace_period;
                this.insertdata.status = response.data.data.status;
            });

        },
        getrole() {
            this.$axios.get('/user/getRoleList').then(response => {
                this.allrole = response.data.data;

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
