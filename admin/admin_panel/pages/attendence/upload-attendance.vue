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
                            <li class="breadcrumb-item active" aria-current="page">Upload Attendance</li>
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
                                        <label for="inputEmailAddress2" class="col-sm-3 col-form-label">File</label>
                                        <div class="col-sm-9">
                                            <input type="file" ref="file" @change="onFileSelected" class="form-control" id="file" name="file" />
                                            <span class="text-danger" v-if="errors.file">{{ errors.file[0] }}</span>
                                            <small style="color:red;">File To Upload (.csv)</small><br>
                                            <a v-if="showurl" :href="showurl" target="_blank">{{ showurl }}</a>
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
        title: 'Upload Attendance',
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
            file: '',
            showurl: '',
            notifmsg: '',
            errors: {},
            emp: [],
        }
    },
    created() {

        this.getUploadAttendance();
    },
    methods: {
        onFileSelected() {
            this.file = this.$refs.file.files[0];
            const fileInput = this.$refs.file;
            const selectedFile = fileInput.files[0];
            if (selectedFile) {
                // Check if the selected file has a .csv extension
                if (!selectedFile.name.endsWith('.csv')) {
                    alert('Please select a CSV file.');
                    fileInput.value = ''; // Clear the file input
                    return;
                }

            }

        },
        saveData() {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('id', this.insertdata.id);
            formData.append('status', this.insertdata.status);
            const headers = {

                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/attendance/uploadDocuments',
                formData, {
                    headers
                }).then((res) => {
                    console.log(res.data.file_url);
                    this.showurl = res.data.file_url;
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/attendence/upload-attendance');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getUploadAttendance() {
            this.$axios.get(`/attendance/getUploadAttendance`).then(response => {
                this.showurl =  response.data.file_url;
            });
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'File upload been successfully.'
            });
        },

    },
}
</script>
