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
                                <router-link to="/ecommarce/category-list">Category List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">New Category</li>
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
                                <div class="card">
                                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                        <div class="card-body">
                                            <ul class="nav nav-pills mb-3" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i class='bx bx-home font-18 me-1'></i>
                                                            </div>
                                                            <div class="tab-title">General</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i class='bx bx-user-pin font-18 me-1'></i>
                                                            </div>
                                                            <div class="tab-title">Data</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#primary-pills-contact" role="tab" aria-selected="false">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i class='bx bx-microphone font-18 me-1'></i>
                                                            </div>
                                                            <div class="tab-title">SEO</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="pills-tabContent">
                                                <div class="tab-pane fade show active" id="primary-pills-home" role="tabpanel">
                                                    <!-- General  -->
                                                    <div class="row mb-3 required">
                                                        <label for="input-name-1" class="col-sm-2 col-form-label">Category Name</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" name="name" placeholder="Category Name" v-model="insertdata.name" class="form-control" />
                                                            <input type="hidden" name="id" id="id" class="form-control" v-model="insertdata.id" />
                                                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>

                                                        </div>
                                                    </div>
                                                    <div class="row mb-3 d-none">
                                                        <label for="input-description-1" class="col-sm-2 col-form-label">Description</label>
                                                        <div class="col-sm-10">

                                                            <client-only placeholder="loading...">
                                                                <ckeditor-nuxt v-model="insertdata.description" :config="editorConfig" class="form-control" />
                                                            </client-only>

                                                        </div>
                                                    </div>
                                                    <div class="row mb-3 required">
                                                        <label for="input-meta-title-1" class="col-sm-2 col-form-label">Meta Tag Title</label>
                                                        <div class="col-sm-10">
                                                            <input type="text" name="meta_title" value placeholder="Meta Tag Title" id="meta_title" v-model="insertdata.meta_title" class="form-control" />
                                                            <div id="error-meta-title-1" class="invalid-feedback"></div>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Meta Tag Description</label>
                                                        <div class="col-sm-10">
                                                            <textarea name="meta_description" rows="5" placeholder="Meta Tag Description" v-model="insertdata.meta_description" id="meta_description" class="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-3">
                                                        <label for="input-meta-description-1" class="col-sm-2 col-form-label">Meta Tag Keywords</label>
                                                        <div class="col-sm-10">
                                                            <textarea name="meta_keyword" rows="5" placeholder="Meta Tag Keywords" id="meta_keyword" class="form-control" v-model="insertdata.meta_keyword"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="primary-pills-profile" role="tabpanel">
                                                    <!-- Data -->
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="row mb-3">
                                                                <label for="input-meta-description-1" class="col-sm-2 col-form-label">Parent</label>
                                                                <div class="col-sm-10">
                                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="parent_id" id="parent_id" v-model="insertdata.parent_id">
                                                                        <option value=""></option>
                                                                        <option v-for='data in categories' :value='data.id' :key="data.id">{{ data.name }}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3">
                                                                <label for="input-meta-description-1" class="col-sm-2 col-form-label">Icon (100x100)</label>
                                                                <div class="col-sm-10">
                                                                    <input class="form-control form-control-sm" id="file" ref="file" @change="onFileSelected" type="file">
                                                                    <a href="https://icons8.com/" target="_blank">https://icons8.com/</a>
                                                                </div>
                                                            </div>

                                                            <div class="row mb-3 d-none">
                                                                <label for="input-meta-description-1" class="col-sm-2 col-form-label">For Mobile View</label>
                                                                <div class="col-sm-10">
                                                                    <input class="form-control form-control-sm" type="text" placeholder="Add fontawsone class" v-model="insertdata.mobile_view_class">
                                                                    <a href="https://fontawesome.com/icons" target="_blank">https://fontawesome.com/icons</a>
                                                                </div>
                                                            </div>
                                                            <div class="row mb-3">
                                                                <label for="input-meta-description-1" class="col-sm-2 col-form-label">Status</label>
                                                                <div class="col-sm-10">
                                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="insertdata.status" name="status" id="status">
                                                                        <option selected value="1">Active</option>
                                                                        <option value="0">Inactive</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="primary-pills-contact" role="tabpanel">
                                                    <!-- SEO -->
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="alert alert-info" bis_skin_checked="1"><i class="fas fa-info-circle"></i> Do not use spaces, instead replace spaces with - and make sure the SEO URL is globally unique.</div>
                                                            <div class="row mb-3">
                                                                <label for="input-meta-description-1" class="col-sm-2 col-form-label">Keyword</label>
                                                                <div class="col-sm-10">
                                                                    <input type="text" name="keyword" value placeholder="Keyword" id="keyword" class="form-control" />
                                                                    <div id="error-name-1" class="invalid-feedback"></div>
                                                                </div>
                                                            </div>

                                                            <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
<style>
.bg-dark {
    background-color: #0d4b88 !important;
}
</style>
<script>
export default {
    components: {
        'ckeditor-nuxt': () => {
            if (process.client) {
                return import('@blowstack/ckeditor-nuxt')
            }
        },
    },
    head: {
        title: 'Category Edit',
    },
    data() {
        return {
            editorConfig: {
                removePlugins: ['Title'],
                simpleUpload: {
                    uploadUrl: 'path_to_image_controller',
                    headers: {
                        'Authorization': 'optional_token'
                    }
                }
            },
            insertdata: {
                id: '',
                name: '',
                description: '',
                meta_title: '',
                meta_description: '',
                meta_keyword: '',
                parent_id: 0,
                mobile_view_class: '',
                keyword: '',
                status: '',
            },
            categories: [],
            notifmsg: '',
            file: '',
            errors: {},
        }
    },

    async mounted() {
        this.getData();
        this.fetchDataParent();
        await this.loadCKEditor();
        CKEDITOR.replace('editor');
    },
   
    methods: { 
        async fetchDataParent() {
            try {
                const response = await this.$axios.get(`/category/getCategoryListParent`);
                this.categories = response.data;

            } catch (error) {
                console.error(error);
            }
        },
        onFileSelected() {
            this.file = this.$refs.file.files[0];
        },
        loadCKEditor() {
            return new Promise((resolve) => {
                if (typeof CKEDITOR === 'undefined') {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js';
                    script.async = true;
                    script.onload = resolve;
                    document.head.appendChild(script);
                } else {
                    resolve();
                }
            });
        },
        saveData() {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('id', this.insertdata.id);
            formData.append('name', this.insertdata.name);
            formData.append('mobile_view_class', this.insertdata.mobile_view_class);
            //formData.append('description', desc);
            formData.append('description', this.insertdata.description);
            formData.append('meta_title', this.insertdata.meta_title);
            formData.append('meta_description', this.insertdata.meta_description);
            formData.append('meta_keyword', this.insertdata.meta_keyword);
            formData.append('parent_id', this.insertdata.parent_id);
            formData.append('status', this.insertdata.status);
            formData.append('keyword', this.insertdata.keyword);
            // formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/category/save',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/ecommarce/category-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getData() {
            let id = this.$route.query.id;
            //alert(id);
            this.$axios.get(`/category/categoryRow/${id}`).then(response => {
                this.insertdata.id = response.data.data.id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.mobile_view_class = response.data.data.mobile_view_class;
                this.insertdata.description = response.data.data.description ? response.data.data.description : "";
                this.insertdata.meta_title = response.data.data.meta_title;
                this.insertdata.meta_description = response.data.data.meta_description;
                this.insertdata.meta_keyword = response.data.data.meta_keyword;
                this.insertdata.parent_id = response.data.data.parent_id;
                this.insertdata.status = response.data.data.status;
                this.insertdata.keyword = response.data.data.keyword;
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
