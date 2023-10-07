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
                                <router-link to="/task/task-list">Task List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Task</li>
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
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Title</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control title" v-model="insertdata.title" id="title" placeholder="Title">
                                            <input type="hidden" class="form-control title" v-model="insertdata.id" id="id">
                                            <span class="text-danger" v-if="errors.title">{{ errors.title[0] }}</span>

                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Description</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control description" v-model="insertdata.description" id="description" placeholder="Description.."></textarea>
                                            <span class="text-danger" v-if="errors.description">{{ errors.description[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Project</label>
                                        <div class="col-sm-9">
                                            <select name="department_id" v-model="insertdata.project_id" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in pro' :value='data.id'>{{data.name}}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.project_id">{{ errors.project_id[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Employee</label>
                                        <div class="col-sm-9">
                                            <select name="department_id" v-model="insertdata.emp_id" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in emp' :value='data.id'>{{data.name}}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.emp_id">{{ errors.emp_id[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Start Date</label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control start_date" v-model="insertdata.start_date" id="start_date" placeholder="Start  Date">
                                            <span class="text-danger" v-if="errors.start_date">{{ errors.start_date[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">End Date </label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control age" v-model="insertdata.end_date" id="end_date" placeholder="End  Date">
                                            <span class="text-danger" v-if="errors.end_date">{{ errors.end_date[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEmailAddress2" class="col-sm-3 col-form-label">File</label>
                                        <div class="col-sm-9">
                                            <div id="image"></div>
                                            <input type="file" ref="file" @change="onFileSelected" class="form-control" id="file" name="file" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.status" class="form-select">
                                                <option value="">Select</option>
                                                <option value="1">Pending</option>
                                                <option value="2">Processing</option>
                                                <option value="3">Done</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.status">{{ errors.status[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-9">
                                            <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Send</button>
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
        title: 'Task Edit',

    },

    data() {
        return {
            insertdata: {
                id: '',
                title: '',
                description: '',
                project_id: '',
                emp_id: '',
                start_date: '',
                end_date: '',
                status: '',
            },
            notifmsg: '',
            emp: [],
            pro: [],
            errors: {},
        }
    },
    created() {

        this.employee();
        this.projects();
        this.getData();

    },
    methods: {
        onFileSelected() {
            this.file = this.$refs.file.files[0];
        },
        saveData() {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('id', this.insertdata.id);
            formData.append('title', this.insertdata.title);
            formData.append('description', this.insertdata.description);
            formData.append('project_id', this.insertdata.project_id);
            formData.append('emp_id', this.insertdata.emp_id);
            formData.append('start_date', this.insertdata.start_date);
            formData.append('end_date', this.insertdata.end_date);
            formData.append('status', this.insertdata.status);
            const headers = {

                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/project/saveTask',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/task/task-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        employee() {
            this.$axios.get(`/user/getEmployeeList`).then(response => {
                this.emp = response.data.data;
            });
        },
        projects() {
            this.$axios.get(`/project/allProject`).then(response => {
                this.pro = response.data.data;
            });
        },
        getData() {
            console.log(this.$route.params.id);
            let id = this.$route.params.id;
            this.$axios.get(`/project/taskRow/${id}`).then(response => {
                console.log("task rowsI Images Path: " + response.data.dataImg)
                this.insertdata.id = response.data.data.id;
                this.insertdata.title = response.data.data.title;
                this.insertdata.description = response.data.data.description;
                this.insertdata.project_id = response.data.data.project_id;
                this.insertdata.emp_id = response.data.data.emp_id;
                this.insertdata.start_date = response.data.data.start_date;
                this.insertdata.end_date = response.data.data.end_date;
                this.insertdata.status = response.data.data.status;
                $('#image').append('<a target="_blank" href="' + response.data.dataImg + '" >Download</a>');

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
