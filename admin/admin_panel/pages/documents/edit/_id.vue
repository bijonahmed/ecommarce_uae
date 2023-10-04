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
                                <router-link to="/documents/documents-list">Documents List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Documents</li>
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
                                            <input type="text" class="form-control title" v-model="insertdata.title" id="title" placeholder="Name">
                                            <span class="text-danger" v-if="errors.title">{{ errors.title[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Descption</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control note" v-model="insertdata.note" id="note" placeholder="Descption"></textarea>
                                            <span class="text-danger" v-if="errors.note">{{ errors.note[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Employee</label>
                                        <div class="col-sm-9">
                                            <select name="department_id" v-model="insertdata.emp_id" class="form-select">
                                                <option value="">Select</option>
                                                <option v-for='data in emp' :value='data.id'>{{data.name}}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.emp_id">{{ errors.emp_id[0] }}</span>

                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEmailAddress2" class="col-sm-3 col-form-label">File</label>
                                        <div class="col-sm-9">
                                                <div id="datafile"></div>
                                            <input type="file" ref="file" @change="onFileSelected" class="form-control" id="file" name="file" />
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
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
        title: 'Documents Edit',

    },

    data() {
        return {
            insertdata: {
                id: '',
                title: '',
                note: '',
                emp_id: '',
                status: 1,
            },
            notifmsg: '',
            emp: [],
            pro: [],
            errors: {},
        }
    },
    created() {

        this.employee();
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
            formData.append('emp_id', this.insertdata.emp_id);
            formData.append('note', this.insertdata.note);
            formData.append('status', this.insertdata.status);
            const headers = {

                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/documents/saveDocuments',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/documents/documents-list');
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
            this.$axios.get(`/documents/documents-row/${id}`).then(response => {
                console.log("task rowsI Images Path: " + response.data.dataImg)
                this.insertdata.id = response.data.data.id;
                this.insertdata.title = response.data.data.title;
                this.insertdata.note = response.data.data.note;
                this.insertdata.emp_id = response.data.data.emp_id;
                this.insertdata.status = response.data.data.status;
                this.insertdata.doc = response.data.data.doc;
                if(response.data.dataImg){
                    $('#datafile').append('<a target="_blank" href="' + response.data.dataImg + '" >Download</a>');
                }else{
                    $('#datafile').append('');
                }
                

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
