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
                            <li class="breadcrumb-item active" aria-current="page">Generate Attendance </li>
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
                                <form @submit.prevent="saveData()" id="formrest" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-4 mb-1">
                                            <label for="applicantName" class="form-label">Department</label>
                                            <select name="department_id" v-model="insertdata.department_id" class="form-select department_id">
                                                <option value="" selected>Select</option>
                                                <option v-for='data in dept' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.department_id">{{
                                                    errors.department_id[0] }}</span>

                                        </div>
                                        <div class="col-4 mb-1">
                                            <label for="applicantEmail" class="form-label">Designation</label>
                                            <select name="designation_id" v-model="insertdata.designation_id" class="form-select designation_id">
                                                <option value="" selected>Select</option>
                                                <option v-for='data in desig' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.designation_id">{{
                                                    errors.designation_id[0] }}</span>
                                        </div>
                                        <div class="col-4 mb-1">
                                            <label for="applicantEmail" class="form-label">All Employee</label>
                                            <select name="employee_id" v-model="insertdata.employee_id" class="form-select employee_id">
                                                <option value="" selected>Select</option>
                                                <option v-for='data in emply' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.employee_id">{{ errors.employee_id[0]
                                                }}</span>
                                        </div>

                                        <div class="col-4 mb-1">
                                            <label for="applicantName" class="form-label">From Date</label>
                                            <input type="date" class="form-control from_date" v-model="insertdata.from_date" id="from_date">
                                            <span class="text-danger" v-if="errors.from_date">{{ errors.from_date[0]
                                                }}</span>
                                        </div>
                                        <div class="col-4 mb-1">
                                            <label for="applicantName" class="form-label">To Date</label>
                                            <input type="date" class="form-control to_date" v-model="insertdata.to_date" id="to_date">
                                            <span class="text-danger" v-if="errors.to_date">{{ errors.to_date[0]
                                                }}</span>
                                        </div>
                                        <div class="col-4 mb-1">
                                            <label for="applicantName" class="form-label">Shift Code</label>
                                            <select name="shift_id" v-model="insertdata.shift_id" class="form-select shift_id">
                                                <option value="" selected>Select</option>
                                                <option v-for='data in sCode' :value='data.id'>{{ data.shift_code }}
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.shift_id">{{ errors.shift_id[0]
                                                }}</span>
                                        </div>

                                    </div>
                                    <hr>
                                    <button type="submit" class="btn btn-primary">Generate</button>
                                </form>
                                <hr>
                                <div class="table-responsive">
                                    <table id="basic-datatables1" class="display table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sl No.</th>
                                                <th>Employee Code</th>
                                                <th>Employee Name</th>
                                                <th>Date</th>
                                                <th>Clock In</th>
                                                <th>Clock In Location</th>
                                                <th>Clock Out</th>
                                                <th>Clock Out Location</th>
                                                <th>Duty Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                        <tfoot>
                                        </tfoot>
                                    </table>
                                </div>

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
        title: 'Generate Attendance '
    },
    data() {
        return {
            insertdata: {
                id: '',
                department_id: '',
                designation_id: '',
                shift_id: '',
                employee_id: '',
                from_date: '',
                to_date: '',
                status: 1,
            },
            errors: {},
            dept: [],
            sCode: [],
            desig: [],
            emply: [],
        }
    },
    created() {
        this.department();
        this.designation();
        this.employee();
        this.shiftcode();
    },
    methods: {
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('department_id', this.insertdata.department_id);
            formData.append('designation_id', this.insertdata.designation_id);
            formData.append('shift_id', this.insertdata.shift_id);
            formData.append('from_date', this.insertdata.from_date);
            formData.append('to_date', this.insertdata.to_date);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/rota/no_createEditDutyRoster',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/attendence/generate-attendance');
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

        employee() {
            this.$axios.get('/user/getEmployeeList').then(response => {
                this.emply = response.data.data;
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
