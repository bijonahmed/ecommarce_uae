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
                                <router-link to="/organogram/organisation-hierarchy-list">Organisation Hierarchy List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Organisation Hierarchy List</li>
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
                                    <input type="hidden" class="form-control id" v-model="insertdata.id" id="id">
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">Select Employee Code</label>
                                            <select name="employee_id" v-model="insertdata.employee_id" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in emplyelist' :value='data.id'>{{ data.name }}
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.employee_id">{{errors.employee_id[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Select Level</label>
                                            <select name="level_id" v-model="insertdata.level_id" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in levellist' :value='data.id'>{{ data.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Designation </label>
                                            <input type="text" class="form-control designation" v-model="insertdata.designation" id="designation">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Have Reporting Authority?</label>
                                            <select name="reportign_auth" v-model="insertdata.reportign_auth" class="form-select">
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Name of Reporting Authority</label>
                                            <input type="text" class="form-control name_report_auth" v-model="insertdata.name_report_auth" id="name_report_auth">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Level of reporting Authority</label>
                                            <select name="level_id_authority" v-model="insertdata.level_id_authority" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in levellist' :value='data.id'>{{ data.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Designation (Reporting Authority)</label>
                                            <input type="text" class="form-control designation_report_auth" v-model="insertdata.designation_report_auth" id="designation_report_auth">
                                            <br>
                                        </div>
                                        <hr>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
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
        title: 'Organisation Hierarchy  List',

    },

    data() {
        return {
            insertdata: {
                id: '',
                employee_id: '',
                level_id: '',
                designation: '',
                reportign_auth: '',
                name_report_auth: '',
                level_id_authority: '',
                designation_report_auth: '',
            },
            notifmsg: '',
            emplyelist: [],
            levellist: [],
            errors: {},
        }
    },
    created() {

        this.getEmployee();
        this.getLevel();
        this.getData();

    },
    methods: {

        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('employee_id', this.insertdata.employee_id);
            formData.append('level_id', this.insertdata.level_id);
            formData.append('designation', this.insertdata.designation);
            formData.append('reportign_auth', this.insertdata.reportign_auth);
            formData.append('name_report_auth', this.insertdata.name_report_auth);
            formData.append('level_id_authority', this.insertdata.level_id_authority);
            formData.append('designation_report_auth', this.insertdata.designation_report_auth);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/organogram/saveHierarchy',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/organogram/organisation-hierarchy-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },

        getEmployee() {
            this.$axios.get(`/user/getEmployeeList`).then(response => {
                this.emplyelist = response.data.data;
            });
        },
        getLevel() {
            this.$axios.get(`/organogram/getLevelList`).then(response => {
                this.levellist = response.data.data;
            });
        },

        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/organogram/hierarchy-row/${id}`).then(response => {
                this.insertdata.id = response.data.data.id;
                this.insertdata.employee_id = response.data.data.employee_id;
                this.insertdata.level_id = response.data.data.level_id;
                this.insertdata.designation = response.data.data.designation;
                this.insertdata.reportign_auth = response.data.data.reportign_auth;
                this.insertdata.name_report_auth = response.data.data.name_report_auth;
                this.insertdata.level_id_authority = response.data.data.level_id_authority;
                this.insertdata.designation_report_auth = response.data.data.designation_report_auth;

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
